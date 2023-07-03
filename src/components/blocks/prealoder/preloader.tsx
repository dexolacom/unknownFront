import Lottie from 'lottie-react';
import * as animationData from './assets/lottie-logo.json';
import useLoading from '@/hooks/use-loading';
import Image from 'next/image';

import styles from './preloader.module.scss';
import ProgressBar from './progress-bar';
import LogoAnimated from './assets/logo-animated.gif';
import clsx from 'clsx';
import { use, useCallback, useContext, useEffect, useState } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { ShutterContext } from '@/contexts/context-shutter';
import { IShutterMethods } from '../shutter/shutter';
export default function Preloader() {
  const { loadedEls, totalEls, loadedCanGo, animationsCanRun } = useLoading();
  const [isUnmounted, setIsUnmounted] = useState(false);
  const shutter = useContext(ShutterContext);

  const progress = totalEls ? loadedEls / totalEls : 0;

  const resetWindowScrollPosition = useCallback(() => {
    window.scrollTo(0, 0);
    console.log('resetWindowScrollPosition');
  }, []);

  useEffect(() => {
    if (!isUnmounted) return;
    resetWindowScrollPosition();
  }, [isUnmounted, resetWindowScrollPosition]);
  
  useIsomorphicLayoutEffect(() => {
    if (
      !shutter.methods.timeline ||
      !loadedCanGo ||
      !animationsCanRun ||
      isUnmounted
    )
      return;
    shutter.methods.timeline.play().then(self => {
      setIsUnmounted(true);
      self.reverse();
    });
  }, [shutter.methods.timeline, loadedCanGo, animationsCanRun]);
  if (isUnmounted) return null;
  return (
    <div className={styles.preloader}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <Image
            src={LogoAnimated}
            alt="Unkwn Bones"
            width={200}
            quality={1}
            priority={true}
          />
        </div>
      </div>
      <ProgressBar progress={progress} className={styles['progress-bar']} />
      <div className={clsx(styles.bg, styles['bg-vertical'])}></div>
      <div className={clsx(styles.bg, styles['bg-horizontal'])}></div>
    </div>
  );
}
