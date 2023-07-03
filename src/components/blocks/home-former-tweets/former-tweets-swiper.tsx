import { useCallback, useRef } from 'react';
import TweetEmbed from 'react-tweet-embed';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import clsx from 'clsx';

import { BREAKPOINTS } from '@/constants';
import styles from './former-tweets-swiper.module.scss';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';

export default function FormerTweetsSwiper() {
  const tweets = [
    '1651556812871565315',
    '1656320763262033921',
    '1654508826924572677',
    '1653421668314882060',
    '1650927445342560276',
    '1646875970106716162',
  ];
  const renderBullet = useCallback(
    (_: number, className: string) => `<span class=${className}></span>`,
    [],
  );
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      className={styles['swiper']}
      rewind
      spaceBetween={8}
      slidesOffsetAfter={25}
      slidesOffsetBefore={25}
      slidesPerView="auto"
      navigation={{
        prevEl: '#swiper-button-prev',
        nextEl: '#swiper-button-next',
      }}
      pagination={{
        el: '#swiper-bullets',
        bulletClass: styles['swiper-bullet'],
        bulletActiveClass: styles.active,
        clickable: true,
        renderBullet: renderBullet,
      }}
      breakpoints={{
        [BREAKPOINTS.MD]: {
          slidesOffsetAfter: 40,
          slidesOffsetBefore: 40,
          spaceBetween: 20,
        },
      }}
    >
      {tweets.map(tweet => (
        <SwiperSlide key={tweet} className={styles['swiper-slide']}>
          <TweetEmbed
            tweetId={tweet}
            options={{
              theme: 'dark',
              cards: 'hidden',
              conversation: 'none',
            }}
          />
        </SwiperSlide>
      ))}
      <div slot="container-end" className={styles['swiper-controls']}>
        <button
          id="swiper-button-prev"
          className={clsx(
            styles['swiper-button-prev'],
            styles['swiper-button'],
          )}
        >
          <ArrowLeft />
        </button>
        <div id="swiper-bullets" className={styles['swiper-bullets']}></div>
        <button
          id="swiper-button-next"
          className={clsx(
            styles['swiper-button-next'],
            styles['swiper-button'],
          )}
        >
          <ArrowRight />
        </button>
      </div>
    </Swiper>
  );
}
