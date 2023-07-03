import Image from 'next/image';
import gsap from 'gsap';

import { COLORS } from '@/constants';
import styles from './mint-cinema.module.scss';
import frameDesktopImg from './assets/frame-desk.png';
import frameTabletImg from './assets/frame-tab.png';
import frameMobileImg from './assets/frame-mob.png';
import ButtonConnectWallet from './button-connect-wallet';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export default function MintCinema() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const buttonConnectWalletRef = useRef<HTMLButtonElement>(null);

  // Prefetch the next page
  useEffect(() => {
    router.prefetch('/freemint');
  }, [router]);

  // When the video ends, go to the next page
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.addEventListener('ended', () => {
      router.push('/freemint');
    });
  }, [router]);

  const handleVideoPlay = () => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const button = buttonConnectWalletRef.current;

    if (!video || !overlay || !button) return;
    console.log('video', video);

    gsap
      .timeline()
      .to(button, {
        scale: 0,
        y: '50%',
        duration: 0.5,
      })
      .to(video, { autoAlpha: 1, duration: 0.5 })
      // .to(overlay, {
      //   background: COLORS.COLOR_2,
      //   duration: 0.5,
      // })
      // .set(overlay, {
      //   opacity: 0,
      //   pointerEvents: 'none',
      //   immediateRender: false,
      // })
      .then(() => video?.play());
  };

  return (
    <section className={styles.section}>
      <video className={styles.video} playsInline ref={videoRef}>
        <source src="./video/cinema_1920_1080.mp4" type="video/mp4" />
      </video>
      <div className={styles.wrapper}>
        <div className={styles['video-overlay']} ref={overlayRef}>
          <ButtonConnectWallet
            className={styles['button-connect-wallet']}
            onClick={handleVideoPlay}
            ref={buttonConnectWalletRef}
          />
        </div>
      </div>

      <picture className={styles.frame}>
        <source srcSet={frameMobileImg.src} media="(max-width: 767px)" />
        <source srcSet={frameTabletImg.src} media="(max-width: 1199px)" />
        <Image src={frameDesktopImg} alt="" fill sizes="100vw" priority />
      </picture>
    </section>
  );
}
