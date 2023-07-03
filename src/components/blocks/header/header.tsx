import Image from 'next/image';
import styles from './header.module.scss';
import logo from '@/assets/images/logo.png?inline';
import MainNavigation from '@/components/elements/main-navigation/main-navigation';
import Link from 'next/link';
import * as LogoLottieData from '@/assets/lottie/logo-lottie.json';

import useMediaQuery from '@/hooks/use-media-query';
import { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
interface IHeaderProps {
  handleOpenMobileMenu: () => void;
}
export default function Header({
  handleOpenMobileMenu,
}: IHeaderProps): JSX.Element {
  const { isDesktop } = useMediaQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const logoLottieRef = useRef<LottieRefCurrentProps | null>(null);

  // Handle expanding and collapsing header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };
    const handleScrollThrottle = throttle(handleScroll, 100);
    window.addEventListener('scroll', handleScrollThrottle);
    return () => {
      window.removeEventListener('scroll', handleScrollThrottle);
    };
  }, [isDesktop]);

  // Handle logo animation
  useEffect(() => {
    if (!logoLottieRef.current) return;
    if (isExpanded) logoLottieRef.current.setDirection(1);
    if (!isExpanded) logoLottieRef.current.setDirection(-1);
    logoLottieRef.current.play();
  }, [isExpanded]);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles['logo-wrap']}>
          <div className={styles.logo}>
            {/* <Image
              src={logo}
              alt="UNKWN BONES"
              width={73}
              height={73}
              priority
            /> */}
            <Lottie
              animationData={LogoLottieData}
              lottieRef={logoLottieRef}
              loop={false}
              autoplay={false}
            />
          </div>
        </Link>

        <MainNavigation
          isExpanded={isExpanded}
          handleOpenMobileMenu={handleOpenMobileMenu}
        />
      </div>
    </header>
  );
}
