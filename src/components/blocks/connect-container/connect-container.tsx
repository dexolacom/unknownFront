import Image from 'next/image';

import styles from './connect-container.module.scss';
import bgImg from './assets/bg.jpg';
import bgTabImg from './assets/bg-tab.jpg';
import bgMobImg from './assets/bg-mob.jpg';
import frameDesktopImg from './assets/frame-desk.png';
import frameTabImg from './assets/frame-tab.png';
import frameMobImg from './assets/frame-mob.png';
import BgGrid from '@/components/elements/bg-grid/bg-grid';
export default function ConnectContainer({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}): JSX.Element {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>{children}</div>
      <picture className={styles.frame}>
        <source srcSet={frameMobImg.src} media="(max-width: 767px)" />
        <source srcSet={frameTabImg.src} media="(max-width: 1199px)" />
        <Image
          src={frameDesktopImg}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={100}
        />
      </picture>
      <picture className={styles.bg}>
        <source srcSet={bgMobImg.src} media="(max-width: 767px)" />
        <source srcSet={bgTabImg.src} media="(max-width: 1199px)" />
        <Image src={bgImg} alt="" fill priority sizes="100vw" quality={100} />
      </picture>
      <BgGrid className={styles.grid} />
    </div>
  );
}
