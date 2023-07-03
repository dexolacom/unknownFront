import useMediaQuery from '@/hooks/use-media-query';
import Image from 'next/image';
import styles from './coming-soon.module.scss';
import TitleMobSVG from './assets/coming-soon-mob.svg';
import TitleTabSVG from './assets/coming-soon-tab.svg';
import TitleDeskSVG from './assets/coming-soon-desk.svg';
import bgMobImg from './assets/bg-mob.jpg';
import bgTabImg from './assets/bg-tab.jpg';
import bgDeskImg from './assets/bg-desk.jpg';
import boneMobImg from './assets/bones-mob.png';
import boneTabImg from './assets/bones-tab.png';
import boneDeskImg from './assets/bones-desk.png';
import ButtonBloody from '@/components/elements/button-bloody/button-bloody';
export default function ComingSoon() {
  const { isMobile, isTablet, isDesktop } = useMediaQuery();

  return (
    <div className={styles['coming-soon']}>
      <div className={styles.title}>
        {isMobile && <TitleMobSVG />}
        {isTablet && <TitleTabSVG />}
        {isDesktop && <TitleDeskSVG />}
      </div>
      <div className={styles.bone}>
        <Image
          src={isMobile ? boneMobImg : isTablet ? boneTabImg : boneDeskImg}
          alt="Coming Soon"
          fill
        />
      </div>
      <div className={styles['button-back']}>
        <ButtonBloody
          href="/"
          textLines={['BACK TO HOME']}
          size={isTablet ? 4 : 3}
        />
      </div>
      <Image
        src={isMobile ? bgMobImg : isTablet ? bgTabImg : bgDeskImg}
        alt=""
        className={styles.bg}
        sizes="100vw"
        fill
      />
    </div>
  );
}
