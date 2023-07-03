import Image from 'next/image';

import Mbr from '@/components/elements/media-br/mediad-br';
import styles from './home-community.module.scss';
import boneImg from './assets/bone.png';
import boneTabImg from './assets/bone-tablet.png';
import boneMobImg from './assets/bone-mobile.png';
import bgTextImg from './assets/bg-text.png';
import bgGradientImg from './assets/bg-gradient.png';
import bgBlockImg from '@/assets/images/bg-block.png';
export default function HomeCommunity() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.description}>
          / Limit-shattering web3 community /
        </p>
        <h2 className={styles.title}>
          A community
          <br />
          to become <br />
          whoever{' '}
          <span className={styles['title--accent']}>
            the
            <Mbr max="xl" /> f#ck <Mbr min="xl" />
            you want !
          </span>
        </h2>
      </div>
      <picture className={styles['bg-bones']}>
        <source srcSet={boneMobImg.src} media="(max-width: 767px)" />
        <source srcSet={boneTabImg.src} media="(max-width: 1199px)" />
        <Image src={boneImg} fill alt="" quality={100} sizes="100vw" />
      </picture>
    </section>
  );
}
