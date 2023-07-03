import useMediaQuery from '@/hooks/use-media-query';
import { useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import Image from 'next/image';
import clsx from 'clsx';

import styles from './button-opensea-square.module.scss';
import logoImg from './assets/logo.png';
import BgSVG from './assets/bg-fallback.svg';
import animationData from './assets/lottie-data.json';
import ArrowTopRightIcon from '@/assets/icons/arrow-top-right.svg';
import useLottiePlayOnHover from '@/hooks/use-lottie-play-on-hover';

interface IButtonOpenseaSquareProps {
  className?: string;
}
export default function ButtonOpenseaSquare({
  className,
}: IButtonOpenseaSquareProps) {
  const { isDesktop } = useMediaQuery();
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useLottiePlayOnHover({ elRef: buttonRef, lottieRef });
  return (
    <a
      href="https://opensea.io/collection/unkwn-angels"
      target="_blank"
      rel="noreferrer"
      className={clsx(styles.container, className)}
      ref={buttonRef}
    >
      <div className={styles.wrap}>
        <div className={styles['logo']}>
          <Image src={logoImg} alt="OpenSea" />
        </div>
        <span className={styles['text']}>OpenSea</span>
        <i className={styles.arrow}>
          <ArrowTopRightIcon />
        </i>
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
