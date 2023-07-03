import React from 'react';
import { useState } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ScrollSmoother } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const SmootherContext = React.createContext<ScrollSmoother | null>(null);

interface ISmootherProviderProps {
  children: JSX.Element[] | JSX.Element;
}
export default function SmootherProvider({
  children,
}: ISmootherProviderProps): JSX.Element {
  const [smoother, setSmoother] = useState<ScrollSmoother | null>(null);
  // Setup scrollSmoother
  useIsomorphicLayoutEffect(() => {
    if (typeof window === undefined) return;
    // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    // const smoother = ScrollSmoother.create({
    //   smooth: 0.5, // seconds it takes to "catch up" to native scroll position
    //   smoothTouch: false,
    //   normalizeScroll: true, // if you resize the browser while scrolling, it will adjust its progress to reflect the distance scrolled.
    //   effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
    // });

    // setSmoother(smoother);
    ScrollTrigger.refresh();
  }, []);
  return (
    <SmootherContext.Provider value={smoother}>
      {children}
    </SmootherContext.Provider>
  );
}
