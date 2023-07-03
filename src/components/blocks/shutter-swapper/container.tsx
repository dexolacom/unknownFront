import { useContext, useEffect, useRef } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShutterContext } from '@/contexts/context-shutter';

interface IContainerProps {
  children: JSX.Element[];
}
export default function Container({ children }: IContainerProps) {
  const shutter = useContext(ShutterContext);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !shutter.methods.timeline) return;
    console.log('shutter.methods.timeline:', shutter.methods.timeline);
    const ctx = gsap.context(self => {
      gsap.registerPlugin(ScrollTrigger);
      if (!self.selector) return;
      if (!containerRef.current) return;
      const children = Array.from(containerRef.current.children);
      const sectionCount = children?.length;
      const getGridBottomOffset = () => {
        const vwUnit = document.documentElement.clientWidth / 100;
        const cellSize =
          parseInt(
            getComputedStyle(document.documentElement).getPropertyValue(
              '--bg-grid-size',
            ),
          ) * vwUnit;
        const innerHeight = window.innerHeight;
        const amountOfCells = Math.ceil(innerHeight / cellSize);
        const offset = amountOfCells * cellSize - innerHeight;
        return offset;
      };
      if (!sectionCount) return;
      children.forEach((section, idx) => {
        const isLastSection = idx === sectionCount - 1;
        const isFirstSection = idx === 0;
        // Show shutter on previous section is scrolled to the bottom and hide it when next section is scrolled to the top
        if (!isFirstSection) {
          const st = ScrollTrigger.create({
            trigger: section,
            start: 'top top',
            end: () => `+=${section.clientHeight}`,
            pin: true,
            markers: true,
            onUpdate: self => {
              const progress = 1 - self.progress;
              shutter.methods.timeline?.progress(progress).pause();
            },
          });
        }

        if (!isLastSection) {
          const st = ScrollTrigger.create({
            trigger: section,
            start: 'bottom bottom',
            end: () => `+=${section.clientHeight}`,
            pin: true,
            markers: true,
            onUpdate: self => {
              const progress = self.progress;
              shutter.methods.timeline?.progress(progress).pause();
            },
          });
        }
      });
      ScrollTrigger.refresh();
    }, containerRef.current);

    return () => {
      ctx.revert();
    };
  }, [shutter, shutter.methods]);
  return <div ref={containerRef}>{children}</div>;
}
