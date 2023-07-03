import Image from 'next/image';

import styles from './congratulations.module.scss';
import CongratulationsSVG from './assets/title.svg';
import CrossIcon from '@/assets/icons/cross.svg';
import ButtonLinkOpenseaBloody from '@/components/elements/button-link-opensea-bloody/button-link-opensea-bloody';
import ButtonBackHome from './button-back-home';
import bgDesktopImg from './assets/bg-desk.jpg';
import bgTabletImg from './assets/bg-tab.jpg';
import bgMobileImg from './assets/bg-mob.jpg';
import ButtonBloody from '@/components/elements/button-bloody/button-bloody';
import useMediaQuery from '@/hooks/use-media-query';

export default function Congratulations() {
  const { isTablet } = useMediaQuery();
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <CongratulationsSVG />
      </div>
      <p className={styles.text}>Check your bone on OpenSea!</p>
      <i className={styles['icon-cross']}>
        <CrossIcon />
      </i>
      <div className={styles['buttons-container']}>
        {/* <ButtonLinkOpenseaBloody href="https://opensea.io/collection/unkwn-bones" /> */}
        <ButtonBloody
          href="https://opensea.io/collection/unkwn-bones"
          textLines={['opensea']}
          size={isTablet ? 4 : 3}
        />
        <ButtonBackHome />
      </div>
      <picture>
        <source srcSet={bgMobileImg.src} media="(max-width: 767px)" />
        <source srcSet={bgTabletImg.src} media="(max-width: 1199px)" />
        <Image src={bgDesktopImg} alt="" fill className={styles.bg} />
      </picture>
    </div>
  );
}
