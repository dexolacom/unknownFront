import Image from 'next/image';
import { useCallback, useRef } from 'react';

import styles from './home-team.module.scss';
import boneImg from './assets/bone.png';
import boneTabletImg from './assets/bone-tablet.png';
import boneMobileImg from './assets/bone-mobile.png';
import bgImg from './assets/bg.png';
import bgTabletImg from './assets/bg-tablet.png';
import bgMobileImg from './assets/bg-mobile.png';

import clsx from 'clsx';
import TeamSwiper from './team-swiper';

export default function HomeTeam() {
  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.container)}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Unkwn Team <sup>®</sup>
          </h2>
          <p className={styles.subtitle}>
            The international team that&apos;s pushing the boundaries of
            what&apos;s possible in web3. 
          </p>
        </div>
        <div className={styles['swiper-wrap']}>
          <TeamSwiper />
        </div>
      </div>
      <div className={styles['bg']}>
        <picture>
          <source srcSet={bgMobileImg.src} media="(max-width: 767px)" />
          <source srcSet={bgTabletImg.src} media="(max-width: 1199px)" />
          <Image
            src={bgImg}
            fill
            alt=""
            className={styles.paper}
            quality={100}
          />
        </picture>
        <picture className={styles.bone}>
          <source srcSet={boneMobileImg.src} media="(max-width: 767px)" />
          <source srcSet={boneTabletImg.src} media="(max-width: 1199px)" />
          <Image src={boneImg} fill alt="" quality={100} />
        </picture>
      </div>
    </section>
  );
}
