import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import useMediaQuery from './use-media-query';
import { gsap } from '@/libs/gsap';
import { TextPlugin } from 'gsap/all';
import { useEffect } from 'react';

export default function useReverseShuffleOnHover(
  ref: React.MutableRefObject<HTMLElement | null>,
) {
  const { isDesktop } = useMediaQuery();
  useEffect(() => {
    if (!ref.current || !isDesktop) return;
    gsap.registerPlugin(TextPlugin);

    const el = ref.current;
    const ctx = gsap.context(self => {
      const text = el.textContent || '';
      if (typeof text !== 'string') return;
      const mouseEnter = () => {
        const tl = gsap.effects.reverseShuffle(el, {
          textValue: text,
        });
      };
      const mouseLeave = () => {
        gsap.set(el, { text: text, overwrite: true });
      };
      el.addEventListener('mouseenter', mouseEnter);
      el.addEventListener('mouseleave', mouseLeave);
      return () => {
        el.removeEventListener('mouseenter', mouseEnter);
        el.removeEventListener('mouseleave', mouseLeave);
      };
    });
    return () => {
      ctx.revert();
    };
  }, [isDesktop, ref]);
}
