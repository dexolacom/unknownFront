import clsx from 'clsx';
import useMediaQuery from '@/hooks/use-media-query';

import styles from './button-mint.module.scss';
import ButtonDesktopSVG from './assets/button-desk.svg';
import ButtonTabletSVG from './assets/button-tab.svg';
import ButtonMobileSVG from './assets/button-mob.svg';
interface IButtonMintProps {
  className?: string;
}
export default function ButtonMint({ className }: IButtonMintProps) {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();
  return (
    <button className={clsx(styles.button, className)}>
      <span className={styles.text}>mint nft</span>
      <div className={styles.bg}>
        {isMobile && <ButtonMobileSVG />}
        {isTablet && <ButtonTabletSVG />}
        {isDesktop && <ButtonDesktopSVG />}
      </div>
    </button>
  );
}
