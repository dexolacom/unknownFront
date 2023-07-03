import React, { useEffect } from 'react';
import useMediaQuery from './use-media-query';
import { LottieRefCurrentProps } from 'lottie-react';
interface IUseLottiePlayOnHover {
  elRef: React.RefObject<HTMLElement>;
  lottieRef: React.RefObject<LottieRefCurrentProps>;
}
export default function useLottiePlayOnHover({
  elRef,
  lottieRef,
}: IUseLottiePlayOnHover) {
  const { isDesktop } = useMediaQuery();
  useEffect(() => {
    const el = elRef.current;
    const lottie = lottieRef.current;
    if (!isDesktop || !el || !lottie) return;
    const onMouseEnter = () => {
      lottie.setDirection(1);
      lottie.play();
    };
    const onMouseLeave = () => {
      lottie.setDirection(-1);
      lottie.play();
    };
    el.addEventListener('mouseenter', onMouseEnter);
    el.addEventListener('mouseleave', onMouseLeave);
    return () => {
      el.removeEventListener('mouseenter', onMouseEnter);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [elRef, isDesktop, lottieRef]);
}
