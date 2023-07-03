import Link from 'next/link';
import clsx from 'clsx';
import Lottie, { LottieRefCurrentProps, useLottie } from 'lottie-react';
import { RefObject, Suspense, use, useEffect, useRef } from 'react';
import useMediaQuery from '@/hooks/use-media-query';
import { gsap } from '@/libs/gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { MorphSVGPlugin } from 'gsap/all';

import styles from './button-bloody.module.scss';
import ButtonDesktopSVG from './assets/button-desktop.svg';
import ButtonTabletSVG from './assets/button-tablet.svg';
import ButtonMobileSVG from './assets/button-mobile.svg';

import buttonLottieData from './assets/button-lottie.json';
import React from 'react';
import useLottiePlayOnHover from '@/hooks/use-lottie-play-on-hover';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { type } from 'os';
gsap.registerPlugin(TextPlugin, MorphSVGPlugin);
interface IButtonBloodyProps {
  onClick?: () => void;
  href?: string;
  textLines: string[];
  className?: string;
  textAlignment?: 'left-bottom' | 'left-center' | 'center';
  size?: 3 | 4 | 5;
}
export default function ButtonBloody({
  href,
  textLines,
  className,
  size = 3,
  textAlignment = 'left-bottom',
  onClick,
}: IButtonBloodyProps): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const lottieAnimationRef = useRef<LottieRefCurrentProps | null>(null);
  const { isDesktop, isTablet, isMobile } = useMediaQuery();

  // Lottie animation on button hover
  useLottiePlayOnHover({ elRef: ref, lottieRef: lottieAnimationRef });

  // Text animation on button hover
  useIsomorphicLayoutEffect(() => {
    const containerRef = ref.current;
    if (!containerRef || !isDesktop) return;
    const ctx = gsap.context(self => {
      if (!self.selector) return;
      const lines = self.selector('[data-text] > div').reverse();
      const linesText = lines.map((line: Element) => line.textContent || '');

      const mouseEnter = () => {
        const tl = gsap.timeline();
        lines.forEach((line: Element) => {
          tl.reverseShuffle(
            line,
            {
              textValue: line.textContent || '',
            },
            '0',
          );
        });
      };
      const mouseLeave = () => {
        lines.forEach((line: Element, index: number) => {
          gsap.set(line, { text: linesText[index] });
        });
      };
      containerRef.addEventListener('mouseenter', mouseEnter);
      containerRef.addEventListener('mouseleave', mouseLeave);
      return () => {
        containerRef.removeEventListener('mouseenter', mouseEnter);
        containerRef.removeEventListener('mouseleave', mouseLeave);
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [isDesktop]);
  const classNamesButton = clsx(styles['bloody-button'], className, {
    [styles['size-3']]: size === 3,
    [styles['size-4']]: size === 4,
    [styles['size-5']]: size === 5,
    [styles['text-align-left-bottom']]: textAlignment === 'left-bottom',
    [styles['text-align-left-center']]: textAlignment === 'left-center',
    [styles['text-align-center']]: textAlignment === 'center',
  });
  const Inner = (
    <>
      <div className={clsx(styles.text, 'text')} data-text>
        {textLines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
        {/* <div>Unearth</div>
        <div>Your True</div>
        <div>Self</div> */}
      </div>
      {isMobile && (
        <div className={styles.bg}>
          <ButtonMobileSVG />
        </div>
      )}
      {isTablet && (
        <div className={styles.bg}>
          <ButtonTabletSVG />
        </div>
      )}
      {isDesktop && (
        <Lottie
          animationData={buttonLottieData}
          loop={false}
          autoplay={false}
          lottieRef={lottieAnimationRef}
          className={clsx(styles.bg, styles['bg-lottie'])}
        />
      )}
    </>
  );
  if (href) {
    return (
      <Link
        href={href}
        className={classNamesButton}
        ref={ref as RefObject<HTMLAnchorElement>}
      >
        {Inner}
      </Link>
    );
  }
  return (
    <button
      className={classNamesButton}
      ref={ref as RefObject<HTMLButtonElement>}
      onClick={onClick}
    >
      {Inner}
    </button>
  );
}
