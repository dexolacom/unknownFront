import Image from 'next/image';
import clsx from 'clsx';

import Mbr from '@/components/elements/media-br/mediad-br';
import styles from './home-web3-revolution.module.scss';
import IconCross from '@/assets/icons/cross.svg';
import bgImg from './assets/bg-desk.jpg';
import bgMobileImg from './assets/bg-mobile.jpg';
import bgTabletImg from './assets/bg-tab.jpg';
import bgContentDesktopImg from './assets/bg-content-desk.jpg';
import bgContentTabletImg from './assets/bg-content-tab.jpg';
import bgContentMobileImg from './assets/bg-content-mob.jpg';
export default function HomeWeb3Revolution() {
  return (
    <section className={styles.section}>
      <div className={clsx(styles.container, 'container')}>
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p className={styles.subtitle}>The Unkwn Bones Community</p>
            <h2 className={styles.title}>
              Unkwn Bones <br />
              comes <br />
              at the <Mbr min="xl" />
              forefront
              <Mbr max="xl" />{' '}
              <span className={styles['title--accent']}>
                of <Mbr min="xl" />
                the web3 <br />
                revolution.
              </span>
            </h2>
          </div>
          <div className={styles.content}>
            <IconCross className={styles['icon-cross']} />
            <div>
              <p className={styles['paragraph']}>
                We emerged as an ecosystem where the community comes together
                for growth and self-discovery, to unearth our inner meanings.
              </p>
              <p className={styles['paragraph']}>
                We’re all about creating a space for meaningful interactions and
                providing benefits for our NFT holders. With a clear and bold
                vision of improving web3 space, where every single faceless Bone
                matters.
              </p>
              <p className={styles['paragraph']}>
                Through our collective efforts and non-conformist approach, we
                will be challenging
                <br />
                the way things
                <br />
                are in web3.
              </p>
            </div>
            <picture className={styles['bg-content']}>
              <source
                media="(max-width: 767px)"
                srcSet={bgContentMobileImg.src}
              />
              <source
                media="(max-width: 1199px)"
                srcSet={bgContentTabletImg.src}
              />
              <Image src={bgContentDesktopImg} alt="" fill quality={100} />
            </picture>
          </div>
        </div>
      </div>
      <picture className={styles['bg']}>
        <source media="(max-width: 767px)" srcSet={bgMobileImg.src} />
        <source media="(max-width: 1199px)" srcSet={bgTabletImg.src} />
        <Image src={bgImg} alt="" fill quality={100} />
      </picture>
    </section>
  );
}
