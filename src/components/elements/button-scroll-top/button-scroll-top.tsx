import clsx from 'clsx';
import { useEffect, useState } from 'react';
import viewportSize from 'viewport-size';

import styles from './button-scroll-top.module.scss';
import ArrowTopIcon from '@/assets/icons/arrow-top.svg';

export default function ButtonScrollTop() {
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show button when page is scrolled down for 2.5 viewports
  useEffect(() => {
    let viewportHeight = viewportSize.getHeight();
    const handleScroll = () => {
      if (window.scrollY > viewportHeight * 2.5) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Update viewport height on resize
    const handleResize = () => {
      viewportHeight = viewportSize.getHeight();
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={clsx(styles['button-scrolltop'], {
        [styles.hidden]: !showButton,
        [styles.active]: showButton,
      })}
    >
      <button className={styles.button} onClick={handleClick}>
        <i className={styles.icon}>
          <ArrowTopIcon />
        </i>
        <span className={styles.text}>Top</span>
      </button>
    </div>
  );
}
