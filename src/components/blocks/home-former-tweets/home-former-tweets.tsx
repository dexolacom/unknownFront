import Image from 'next/image';
import useMediaQuery from '@/hooks/use-media-query';

import styles from './home-former-tweets.module.scss';

import bgContentImg from './assets/bg-content.png';
import bgContentTabletImg from './assets/bg-content-tablet.jpg';
import bgContentMobileImg from './assets/bg-content-mobile.jpg';
import bgSectionImg from './assets/bg-section.png';
import FormerTweetsSwiper from './former-tweets-swiper';

export default function HomeFormerTweets() {
  const { isDesktop } = useMediaQuery();
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <span>
              <span>Former</span> <span>Tweets</span>
            </span>{' '}
            <span>
              <span>&</span> <span>news</span>
            </span>
          </h2>
          <FormerTweetsSwiper />
          <picture className={styles['bg-content']}>
            <source
              srcSet={bgContentMobileImg.src}
              media="(max-width: 767px)"
            />
            <source
              srcSet={bgContentTabletImg.src}
              media="(max-width: 1199px)"
            />
            <Image
              src={bgContentImg}
              alt=""
              // className={styles['bg-content']}
              fill
              quality={100}
            />
          </picture>
        </div>
      </div>
      {isDesktop && (
        <Image
          src={bgSectionImg}
          alt=""
          className={styles['bg-section']}
          fill
          quality={100}
        />
      )}
    </section>
  );
}
