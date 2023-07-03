import { ShutterContext } from '@/contexts/context-shutter';
import useMediaQuery from '@/hooks/use-media-query';
import clsx from 'clsx';
import React, { LegacyRef, useContext } from 'react';
import { useRef, useState } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { gsap } from 'gsap';

import styles from './shutter.module.scss';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const CELLS_COUNT_MOBILE = 60;
const CELLS_COUNT_TABLET = 84;
const CELLS_COUNT_DESKTOP = 150;

export interface IShutterMethods {
  timeline: gsap.core.Timeline | null;
  refs: {
    shutter: HTMLDivElement;
    cells: HTMLDivElement[];
  };
}

export default function Shutter() {
  const { setMethods } = useContext(ShutterContext);
  const { isMobile } = useMediaQuery();
  const { isTablet } = useMediaQuery();
  const { isDesktop } = useMediaQuery();
  const shutterRef = useRef<HTMLDivElement>();
  const cellsRef = useRef<HTMLDivElement[]>([]);
  const [cells, setCells] = useState([...Array(CELLS_COUNT_MOBILE)]);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const setCellRef = (el: HTMLDivElement | null, i: number) => {
    if (!el) return;
    cellsRef.current[i] = el;
  };
  // Set count of cells depending on screen size
  useIsomorphicLayoutEffect(() => {
    if (isMobile || cells.length !== CELLS_COUNT_MOBILE) {
      setCells([...Array(CELLS_COUNT_MOBILE)]);
    }
    if (isTablet) {
      setCells([...Array(CELLS_COUNT_TABLET)]);
    }
    if (isDesktop) {
      setCells([...Array(CELLS_COUNT_DESKTOP)]);
    }
  }, [isMobile, isTablet, isDesktop]);

  // Set up animation and expose methods
  useIsomorphicLayoutEffect(() => {
    if (!shutterRef.current) return;
    const ctx = gsap.context(self => {
      if (!self.selector) return;
      const cells = self.selector('.cell');
      timeline.current = gsap
        .timeline({
          paused: true,
        })
        .fromTo(
          shutterRef.current as HTMLElement,
          { autoAlpha: 0, pointerEvents: 'none' },
          { autoAlpha: 1, pointerEvents: 'auto' },
        )
        .fromTo(
          cells,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            stagger: {
              amount: 1,
              each: 0.01,
              from: 'random',
            },
          },
        );
    }, shutterRef.current);

    setMethods({
      timeline: timeline.current,
      refs: {
        shutter: shutterRef.current,
        cells: cellsRef.current,
      },
    });

    return () => {
      ctx.revert();
    };
  }, [cells]);

  //   useImperativeHandle(ref, () => {
  //     return {
  //       show: () => {
  //         timeline.current?.play();
  //       },
  //       hide: () => {
  //         timeline.current?.reverse();
  //       },
  //       transitionPromise: timeline.current?.then,
  //       transitionProgress: timeline.current?.progress,
  //     };
  //   });

  return (
    <div
      ref={shutterRef as LegacyRef<HTMLDivElement> | undefined}
      className={styles.shutter}
    >
      {cells.map((_, idx) => (
        <div
          key={idx}
          className={clsx(styles.cell, 'cell')}
          ref={el => setCellRef(el, idx)}
        ></div>
      ))}
    </div>
  );
}
