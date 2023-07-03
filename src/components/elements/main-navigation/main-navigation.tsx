import { use, useCallback, useEffect, useRef, useState } from 'react';
import styles from './main-navigation.module.scss';
import NavLink from './nav-link';

import { gsap } from '@/libs/gsap';
import { ScrollTrigger } from 'gsap/all';
import { Flip } from 'gsap/Flip';
import useReverseShuffleOnHover from '@/hooks/use-reverse-shuffle-on-hover';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import useMediaQuery from '@/hooks/use-media-query';
import { debounce, throttle } from 'lodash';
import MenuMobile from '@/components/blocks/menu-mobile/menu-mobile';
interface IMainNavigationProps {
  className?: string;
  isExpandedOnInitialRender?: boolean;
  isExpanded?: boolean;
  handleOpenMobileMenu: () => void;
}
gsap.registerPlugin(Flip, ScrollTrigger);
export default function MainNavigation({
  isExpandedOnInitialRender = true,
  isExpanded: isExpandedProp,
  handleOpenMobileMenu,
}: IMainNavigationProps): JSX.Element {
  const { isDesktop } = useMediaQuery();
  const [isExpanded, setIsExpanded] = useState(isExpandedOnInitialRender);

  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>();

  const listItems = [
    { href: '/', label: 'HOMEPAGE' },
    { href: '/unkwn', label: 'Unkwn bones' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/comic', label: 'Comic' },
    { href: '/mindmap', label: 'Mind map' },
    { href: '/faq', label: 'Faq' },
  ];
  // Update state when isExpanded prop changes
  useEffect(() => {
    if (isExpandedProp === undefined) return;
    setIsExpanded(isExpandedProp);
  }, [isExpandedProp]);

  // Set up hover animation for menu button
  useReverseShuffleOnHover(menuButtonRef);

  // Methods for expanding and collapsing menu
  const handleExpand = useCallback(() => {
    if (!isDesktop) {
      handleOpenMobileMenu();
      return;
    }
    if (isExpanded || !isDesktop) return;

    setIsExpanded(true);

    requestAnimationFrame(() => {
      timeline.current?.play();
    });
  }, [handleOpenMobileMenu, isDesktop, isExpanded]);
  const handleCollapse = useCallback(() => {
    if (!isExpanded || !isDesktop) return;
    timeline.current?.reverse();
    setIsExpanded(false);
  }, [isDesktop, isExpanded]);

  // Set up links animation
  useIsomorphicLayoutEffect(() => {
    if (!isDesktop) return;
    const nav = navRef.current;
    const container = containerRef.current;
    if (!nav || !container) return;
    const ctx = gsap.context(self => {
      if (!self.selector) return;

      const tl = (timeline.current = gsap.timeline({
        paused: true,
      }));

      // Set up animation for container
      tl.fromTo(
        container,
        {
          width: '5.1035vw',
        },
        {
          width: '38.4375vw',
          duration: 0.7,
        },
      )
        .fromTo(
          nav,
          {
            opacity: 0,
            pointerEvents: 'none',
            display: 'none',
          },
          {
            opacity: 1,
            pointerEvents: 'auto',
            duration: 0,
            display: 'flex',
          },
          0,
        )
        .fromTo(
          menuButtonRef.current,
          {
            opacity: 1,
            width: '100%',
            display: 'block',
            position: 'static',
            pointerEvents: 'auto',
          },
          {
            width: '0%',
            opacity: 0,
            display: 'none',
            duration: 0.7,
            position: 'absolute',
            pointerEvents: 'none',
          },
          0,
        );

      // Set up animation for links
      const links = self.selector('a');

      links.forEach((link: HTMLElement, idx: number) => {
        const placeholder = listItems[idx].label.replace(/\S/g, '█');
        tl.fromTo(
          link,
          {
            pointerEvents: 'none',
            opacity: 0,
            text: {
              value: placeholder,
            },
          },
          {
            pointerEvents: 'auto',
            opacity: 1,
            text: {
              value: listItems[idx].label,
              preserveSpaces: true,
              padSpace: true,
            },
            duration: 0.7,
          },
          0.1 * idx,
        );
      });

      if (isExpandedOnInitialRender) {
        tl.progress(1).pause();
      }
    }, nav);
    return () => {
      ctx.revert();
    };
  }, [isDesktop, isExpandedOnInitialRender]);

  // Handle expand/collapse on Scroll
  useIsomorphicLayoutEffect(() => {
    if (!isDesktop) return;
    const handleScroll = () => {
      if (window.scrollY > 800) {
        handleCollapse();
      } else {
        handleExpand();
      }
    };
    const handleScrollThrottle = throttle(handleScroll, 100);
    window.addEventListener('scroll', handleScrollThrottle);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDesktop, handleExpand, handleCollapse]);
  return (
    <div className={styles['main-navigation']} ref={containerRef}>
      <nav className={styles.nav} ref={navRef}>
        {listItems.map((item, index) => (
          <NavLink key={index} href={item.href} className={styles.link}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <button
        className={styles.link}
        ref={menuButtonRef}
        onClick={handleExpand}
      >
        Menu
      </button>
      {/* {!isDesktop && <MenuMobile />} */}
    </div>
  );
}
