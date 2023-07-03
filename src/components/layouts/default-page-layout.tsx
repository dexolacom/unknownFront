import Head from 'next/head';

import Header from '../blocks/header/header';
import Footer from '../blocks/footer/footer';
import BgGrid from '../elements/bg-grid/bg-grid';
import { gsap } from '@/libs/gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/all';
import ButtonScrollTop from '../elements/button-scroll-top/button-scroll-top';
import Preloader from '../blocks/prealoder/preloader';
import MenuMobile from '../blocks/menu-mobile/menu-mobile';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
interface DefaultPageLayoutProps {
  title: string;
  children: React.ReactNode;
  showFooter?: boolean;
  showHeader?: boolean;
  showButtonScrollTop?: boolean;
}
export default function DefaultPageLayout({
  title,
  children,
  showFooter = true,
  showHeader = true,
  showButtonScrollTop = true,
}: DefaultPageLayoutProps): JSX.Element {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const smoother = useRef<ScrollSmoother>();
  // // Setup scrollSmoother
  // useIsomorphicLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // create the smooth scroller FIRST!
  //     smoother.current = ScrollSmoother.create({
  //       smooth: 2, // seconds it takes to "catch up" to native scroll position
  //       smoothTouch: false,
  //       normalizeScroll: true, // if you resize the browser while scrolling, it will adjust its progress to reflect the distance scrolled.
  //       effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
  //     });
  //   });
  //   return () => ctx.revert();
  // });
  const handleOpenMobileMenu = () => setIsMobileMenuOpen(true);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {showHeader && <Header handleOpenMobileMenu={handleOpenMobileMenu} />}
      <Preloader />
      <MenuMobile isExpanded={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      <div id="smooth-wrapper" style={{ overflow: 'hidden' }}>
        <div id="smooth-content">
          <main>{children}</main>
          {showFooter && <Footer />}
          <BgGrid />
        </div>
      </div>
      {showButtonScrollTop && <ButtonScrollTop />}
    </>
  );
}
