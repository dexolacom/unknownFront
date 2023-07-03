import Link from 'next/link';
import Image from 'next/image';
import styles from './menu-mobile.module.scss';
import LogoSvg from '@/assets/svg/logo.svg';
import bgMobileImg from './assets/menu-mobile-bg.jpg';
import { useCallback, useEffect, useState } from 'react';
import clsx from 'clsx';

interface IMenuMobileProps {
  isExpanded?: boolean;
  toggleMenu?: () => void;
}
export default function MenuMobile({
  isExpanded: isExpandedProp = false,
  toggleMenu,
}: IMenuMobileProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(isExpandedProp);
  useEffect(() => {
    if (isExpandedProp === undefined) return;
    if (isExpandedProp) document.body.style.overflow = 'hidden';
    if (!isExpandedProp) document.body.style.overflow = 'auto';
  }, [isExpandedProp]);

  const handleClose = useCallback(() => {
    if (!toggleMenu) return;
    toggleMenu();
  }, [toggleMenu]);

  return (
    <div
      className={clsx(styles['menu-mobile'], {
        [styles.hidden]: !isExpandedProp,
        [styles.visible]: isExpandedProp,
      })}
    >
      <div className={styles.header}>
        <Link className={styles.logo} href="/">
          <LogoSvg />
        </Link>
        <div className={styles.close}>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
      <nav className={styles.body}>
        <Link href="/" className={styles.link}>
          HOMEPAGE
        </Link>
        <Link href="/unkwn" className={styles.link}>
          Unkwn Bones
        </Link>
        <Link href="/gallery" className={styles.link}>
          Gallery
        </Link>
        <Link href="/comic" className={styles.link}>
          Comic
        </Link>
        <Link href="/mindmap" className={styles.link}>
          Mind map
        </Link>
        <Link href="/faq" className={styles.link}>
          Faq
        </Link>
      </nav>
      <Image
        src={bgMobileImg}
        alt=""
        fill
        quality={100}
        className={styles.bg}
        sizes="100vw"
      ></Image>
    </div>
  );
}
