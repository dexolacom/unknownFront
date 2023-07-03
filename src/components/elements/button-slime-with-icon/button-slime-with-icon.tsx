import React, { Suspense, useEffect, useRef } from 'react';
import clsx from 'clsx';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import useMediaQuery from '@/hooks/use-media-query';

import styles from './button-slime-with-icon.module.scss';

import animationDataVariant1 from '@/assets/lottie/button-slime/lottie-data-variant-1.json';
import animationDataVariant2 from '@/assets/lottie/button-slime/lottie-data-variant-2.json';
import animationDataVariant3 from '@/assets/lottie/button-slime/lottie-data-variant-3.json';
import animationDataVariant4 from '@/assets/lottie/button-slime/lottie-data-variant-4.json';
import animationDataVariant5 from '@/assets/lottie/button-slime/lottie-data-variant-5.json';

import BgSVGVariant1 from './assets/button-variant-1.svg';
import BgSVGVariant2 from './assets/button-variant-2.svg';
import BgSVGVariant3 from './assets/button-variant-3.svg';
import BgSVGVariant4 from './assets/button-variant-4.svg';
import BgSVGVariant5 from './assets/button-variant-5.svg';
import useLottiePlayOnHover from '@/hooks/use-lottie-play-on-hover';
interface IButtonSlimeWithIcon {
  href: string;
  icon: any;
  size?: 'small' | 'large';
  color: 'goshawk-grey' | 'tropical-trail' | 'furious-tiger';
  animationVariant?: 1 | 2 | 3 | 4 | 5;
  fallbackVariant?: 1 | 2 | 3 | 4 | 5;
  simple?: boolean;
  className?: string;
}
export default function ButtonSlimeWithIcon({
  href,
  icon: Icon,
  color,
  animationVariant,
  fallbackVariant,
  size = 'small',
  simple = false,
  className,
}: IButtonSlimeWithIcon) {
  const { isDesktop } = useMediaQuery();
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  let colorClass: string;
  let animationData;
  let BgSVG;
  switch (color) {
    case 'tropical-trail':
      colorClass = styles['color-tropical-trail'];
      break;
    case 'furious-tiger':
      colorClass = styles['color-furious-tiger'];
      break;
    case 'goshawk-grey':
    default:
      colorClass = styles['color-goshawk-grey'];
  }

  switch (animationVariant) {
    case 1:
      animationData = animationDataVariant1;
      break;
    case 2:
      animationData = animationDataVariant2;
      break;
    case 3:
      animationData = animationDataVariant3;
      break;
    case 4:
      animationData = animationDataVariant4;
      break;
    case 5:
      animationData = animationDataVariant5;
      break;
    default:
      animationData = animationDataVariant1;
  }
  switch (fallbackVariant) {
    case 1:
      BgSVG = BgSVGVariant1;
      break;
    case 2:
      BgSVG = BgSVGVariant2;
      break;
    case 3:
      BgSVG = BgSVGVariant3;
      break;
    case 4:
      BgSVG = BgSVGVariant4;
      break;
    case 5:
      BgSVG = BgSVGVariant5;
      break;
    default:
      BgSVG = BgSVGVariant1;
  }

  useLottiePlayOnHover({ elRef: buttonRef, lottieRef });

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={clsx(styles.button, colorClass, className)}
      ref={buttonRef}
    >
      <Icon className={styles.icon} />
      {!simple && (
        <div className={styles.bg}>
          {(!isDesktop || !animationVariant) && <BgSVG />}
          {isDesktop && animationVariant && (
            <Lottie
              animationData={animationData}
              loop={false}
              autoplay={false}
              lottieRef={lottieRef}
              className={styles['bg-lottie']}
            />
          )}
        </div>
      )}
    </a>
  );
}
