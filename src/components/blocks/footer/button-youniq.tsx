import Image from 'next/image';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import useMediaQuery from '@/hooks/use-media-query';
import { Suspense, useEffect, useRef } from 'react';

import styles from './button-yoniq.module.scss';
import BgAnimationData from './assets/button-youniq-lottie .json';
import BgSVG from './assets/button-slime-bg-gray.svg';
import clsx from 'clsx';
import youniqLogoImg from '@/assets/images/logo-youniq.png';
import useLottiePlayOnHover from '@/hooks/use-lottie-play-on-hover';

export default function ButtonYouniq({ className }: { className?: string }) {
  const { isDesktop } = useMediaQuery();
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useLottiePlayOnHover({
    elRef: buttonRef,
    lottieRef,
  });
  return (
    <a
      href="https://youniqlabs.io/"
      target="_blank"
      rel="noreferrer"
      className={clsx(className, styles.button)}
      ref={buttonRef}
    >
      <Image src={youniqLogoImg} alt="YOUNIQ" width={126} />
      {!isDesktop && <BgSVG className={styles['bg-svg']} />}
      {isDesktop && (
        <Lottie
          animationData={BgAnimationData}
          autoplay={false}
          lottieRef={lottieRef}
          loop={false}
          className={styles['bg-animation']}
        />
      )}
    </a>
  );
}
