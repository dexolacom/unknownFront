// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import clsx from 'clsx';

import styles from './team-swiper.module.scss';
import TeamCard from './team-card';
import ArrowLeft from '@/assets/icons/arrow-left.svg';
import ArrowRight from '@/assets/icons/arrow-right.svg';
export default function TeamSwiper() {
  const teamData = [
    {
      name: 'SIRIUS',
      position: 'CEO',
      avatar: '/img/team/sirius.jpg',
    },
    {
      name: 'riiix',
      position: 'COO',
      avatar: '/img/team/riiix.jpg',
    },
    {
      name: 'darlin ',
      position: 'HRD',
      avatar: '/img/team/darlin.jpg',
    },
    {
      name: 'instamarko ',
      position: 'CMO',
      avatar: '/img/team/instamarko.jpg',
    },
    {
      name: 'denof',
      position: 'Art Director',
      avatar: '/img/team/denof.jpg',
    },
    {
      name: 'mike',
      position: 'Managing Partner',
      avatar: '/img/team/mike.jpg',
    },

    {
      name: 'paul green',
      position: 'Artist',
      avatar: '/img/team/paul-green.jpg',
    },
    {
      name: 'kocatka',
      position: 'Artist',
      avatar: '/img/team/kocatka.jpg',
    },
    {
      name: 'manager',
      position: 'Community',
      avatar: '/img/team/manager-community.jpg',
    },
    {
      name: 'moderator',
      position: 'community 1',
      avatar: '/img/team/moderator-community-1.jpg',
    },
    {
      name: 'moderator',
      position: 'community 2',
      avatar: '/img/team/moderator-community-2.jpg',
    },
    {
      name: 'project',
      position: 'manager',
      avatar: '/img/team/project-manager.jpg',
    },
  ];
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation]}
      slidesPerView="auto"
      navigation={{
        prevEl: '#swiper-button-prev',
        nextEl: '#swiper-button-next',
      }}
    >
      {teamData.map((item, index) => (
        <SwiperSlide key={index} className={styles['swiper-slide']}>
          <TeamCard
            name={item.name}
            position={item.position}
            avatar={item.avatar}
          />
        </SwiperSlide>
      ))}

      <div slot="container-end" className={styles.controls}>
        <button
          id="swiper-button-next"
          className={clsx(styles['button-nav'], styles['button-next'])}
        >
          <ArrowRight />
        </button>
        <button
          id="swiper-button-prev"
          className={clsx(styles['button-nav'], styles['button-prev'])}
        >
          <ArrowLeft />
        </button>
      </div>
    </Swiper>
  );
}
