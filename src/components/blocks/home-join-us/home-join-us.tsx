import Image from 'next/image';
import clsx from 'clsx';

import ButtonOpenseaSquare from '@/components/elements/button-opensea-square/button-opensea-square';
import ButtonRaribleSquare from '@/components/elements/button-rarible-square/button-rarible-square';
import Mbr from '@/components/elements/media-br/mediad-br';

import styles from './home-join-us.module.scss';
import Cross from './assets/cross.svg';
import bgBoneImg from './assets/bone.png';
import bgBoneMobileImg from './assets/bone-mobile.png';
import bgBoneTabletImg from './assets/bone-tablet.png';
import bgContentImg from './assets/bg-content.jpg';
import bgSectionDesktopImg from './assets/bg-section-desk.jpg';
import bgSectionTabletImg from './assets/bg-section-tab.jpg';
import bgSectionMobileImg from './assets/bg-section-mob.jpg';
export default function HomeJoinUs() {
  return (
    <section className={styles.section}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.wrap}>
          <div className={styles['text-container']}>
            <p className={styles.text}>
              Are you fed up
              <br /> and want to <Mbr max="md" min="xl" />
              cause some <Mbr max="xl" />
              real trouble?
            </p>
            <Image
              src={bgContentImg}
              alt=""
              fill
              quality={100}
              sizes="(max-width: 767px) 75vw, (max-width: 1199px) 67vw, 14vw"
            />
          </div>
          <div className={styles['title-container']}>
            <h2 className={styles.title}>
              Join us, <br />
              and <br />
              let’s <br />
              get this <Mbr max="md" min="xl" />
              party <br />
              started!
            </h2>
            <Cross className={styles['icon-cross']} />
            <Image
              src={bgContentImg}
              alt=""
              fill
              quality={100}
              sizes="(max-width: 767px) 75vw, (max-width: 1199px) 67vw, 40vw"
            />
          </div>
          <ButtonOpenseaSquare className={styles['button-opensea']} />
          <ButtonRaribleSquare className={styles['button-rarible']} />
        </div>
      </div>
      <picture className={styles['bg-bone']}>
        <source media="(max-width: 767px)" srcSet={bgBoneMobileImg.src} />
        <source media="(max-width: 1199px)" srcSet={bgBoneTabletImg.src} />
        <Image src={bgBoneImg} alt="" fill quality={100} />
      </picture>
      <picture className={styles.bg}>
        <source media="(max-width: 767px)" srcSet={bgSectionMobileImg.src} />
        <source media="(max-width: 1199px)" srcSet={bgSectionTabletImg.src} />
        <Image
          src={bgSectionDesktopImg}
          alt=""
          fill
          quality={100}
          sizes="100vw"
        />
      </picture>
    </section>
  );
}
