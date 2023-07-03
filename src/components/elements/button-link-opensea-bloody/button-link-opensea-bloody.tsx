import useMediaQuery from '@/hooks/use-media-query';

import styles from './button-link-opensea-bloody.module.scss';
import ButtonDesktopSVG from './assets/button-desk.svg';
import ButtonTabletSVG from './assets/button-tab.svg';
import ButtonMobileSVG from './assets/button-mob.svg';
interface IButtonLinkOpenseaBloodyProps {
  href: string;
  className?: string;
}
export default function ButtonLinkOpenseaBloody({
  href,
  className,
}: IButtonLinkOpenseaBloodyProps): JSX.Element {
  const { isDesktop, isTablet, isMobile } = useMediaQuery();
  return (
    <a href={href} target="_blank" className={styles.button}>
      <span className={styles.text}>Opensea</span>
      <div className={styles.bg}>
        {isDesktop && <ButtonDesktopSVG />}
        {isTablet && <ButtonTabletSVG />}
        {isMobile && <ButtonMobileSVG />}
      </div>
    </a>
  );
}
