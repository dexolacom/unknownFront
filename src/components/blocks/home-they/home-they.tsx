import Image from 'next/image';
import clsx from 'clsx';

import styles from './home-they.module.scss';
import bg from './assets/bg.png';
import bgMobileImg from './assets/bg-mobile.png';
import bgTabletImg from './assets/bg-tablet.png';
import Mbr from '@/components/elements/media-br/mediad-br';

export default function HomeThey() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div
          className={clsx([styles['content-area'], styles['content-area-1']])}
        >
          <p className={clsx([styles.text, styles['text-content-area-1']])}>
            Being tired of all <Mbr max="md" min="xl" />
            the <Mbr min="md" max="xl" />
            craziness <Mbr max="md" min="xl" />
            and hypocrisy, our{` `}
            <Mbr min="md" />
            community just {` `}
            <Mbr max="md" min="xl" />
            couldn’t <Mbr min="md" max="xl" />
            take that{` `}
            <Mbr max="md" min="xl" />
            anymore.
          </p>
        </div>
        <div
          className={clsx([styles['content-area'], styles['content-area-2']])}
        >
          <div className={styles.wrapper}>
            <h2 className={styles.title}>
              They <Mbr min="md" />
              ripped <br />
              the <br />
              skin <br />
              off their <br />
              faces
            </h2>
            <p className={clsx([styles.text, styles['text-content-area-2']])}>
              and stepped into a <br /> new world - The <br />
              Unkwn World, the <br />
              one with true web3 <br />
              ideology
            </p>
          </div>
        </div>
      </div>
      <picture className={styles.bg}>
        <source srcSet={bgMobileImg.src} media="(max-width: 767px)" />
        <source srcSet={bgTabletImg.src} media="(max-width: 1199px)" />
        <Image src={bg} fill alt="" quality={100} />
      </picture>
      <div className={styles['bg-paper']}></div>
    </section>
  );
}
