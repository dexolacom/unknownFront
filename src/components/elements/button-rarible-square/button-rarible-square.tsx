import Image from 'next/image';
import clsx from 'clsx';

import styles from './button-rarible-square.module.scss';
import logoImg from './assets/logo.png';
import Arrow from './assets/arrow.svg';
import BgSVG from '@/assets/svg/button-slime-bg-variant-1.svg';
import animationData from '@/assets/lottie/button-slime/lottie-data-variant-5.json';
import Lottie, { LottieRefCurrentProps, useLottie } from 'lottie-react';
import { Suspense, useRef } from 'react';
import useMediaQuery from '@/hooks/use-media-query';
import useLottiePlayOnHover from '@/hooks/use-lottie-play-on-hover';

interface IButtonRaribleSquareProps {
  className?: string;
}
export default function ButtonRaribleSquare({
  className,
}: IButtonRaribleSquareProps) {
  const { isDesktop } = useMediaQuery();
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useLottiePlayOnHover({ elRef: buttonRef, lottieRef });
  return (
    <a
      href="https://rarible.com/"
      target="_blank"
      rel="noreferrer"
      className={clsx(styles.container, className)}
      ref={buttonRef}
    >
      <div className={clsx('button__wrap', styles.wrap)}>
        <div className={clsx('button__arrow', styles['arrow'])}>
          <Arrow />
        </div>
        <div className={clsx('button__logo', styles['logo'])}>
          <Image src={logoImg} alt="Rarible" />
        </div>
        <span className={clsx('button__text', styles['text'])}>Rarible</span>
      </div>
      <div className={styles.bg}>
        {!isDesktop && <BgSVG />}
        {isDesktop && (
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay={false}
            lottieRef={lottieRef}
            className={styles['bg-lottie']}
          />
        )}
      </div>
    </a>
  );
}
