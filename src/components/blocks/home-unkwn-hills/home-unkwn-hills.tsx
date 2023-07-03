import Image from 'next/image';
import clsx from 'clsx';

import styles from './home-unkwn-hills.module.scss';
import CrossEyes from './assets/crossed-eyes.svg';
import Cross from './assets/cross.svg';
import Light from './assets/light.svg';
import bgImg from './assets/bg.png';
import bgTabletImg from './assets/bg-tablet.png';
import bgMobileImg from './assets/bg-mobile.png';
import bgContentImg from './assets/bg-content.png';
import bgContentTabletImg from './assets/bg-content-tablet.png';
import bgContentMobileImg from './assets/bg-content-mobile.png';
import golfstickImg from './assets/golfstick.png';
import golfstickTabletImg from './assets/golfstick-tablet.png';
import golfstickMobileImg from './assets/golfstick-mobile.png';
import Mbr from '@/components/elements/media-br/mediad-br';

export default function HomeUnkwnHills() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.hat}>
            <p className={clsx(styles.text, styles['left-text'])}>
              Living in Unkwn Hills means being part
              <Mbr max="md" /> of a club part of <Mbr max="md" />a story,{' '}
            </p>
            <p className={clsx(styles.text, styles['right-text'])}>
              and part of a crew creating next-level, <Mbr max="md" />
              cool stuff and spreading it around the NFT world.
            </p>
          </div>
          <div className={styles['header']}>
            <h2 className={styles['title']}>Unkwn Hills</h2>
            <p className={styles['subtitle']}>
              Hang out, share crazy ideas, discuss art, harness <Mbr max="md" />
              the power of web3, and create new opportunities.
            </p>
          </div>
          <div className={styles['advantages']}>
            <p className={clsx(styles.text, styles.advantage)}>
              <CrossEyes
                className={clsx(
                  styles['icon-cross-eyed'],
                  styles['advantage-icon'],
                )}
              />
              the Unkwn Hills has <br />
              an interesting story <br />
              behind it… The <br />
              residents of Unkwn <br />
              Hills are the <br />
              lifeblood of the <br />
              community, bustling <br />
              with activity and <br />
              creativity.
            </p>
            <Cross className={styles['icon-cross']} />
            <p className={clsx(styles.text, styles.advantage)}>
              <Light
                className={clsx(styles['icon-light'], styles['advantage-icon'])}
              />
              Discover who U can B. <br />
              Here, U will B accepted. <br />
              Here, U will B heard. <br />U will no longer B watched. <br />U
              won’t B recorded. <br />U can B anything. <br />U can B anyone.{' '}
              <br />U can B free. <br />
              Unkwn Bones.
            </p>
          </div>
          <picture className={styles['bg-content']}>
            <source
              srcSet={bgContentMobileImg.src}
              media="(max-width: 767px)"
            />
            <source
              srcSet={bgContentTabletImg.src}
              media="(max-width: 1199px)"
            />
            <Image src={bgContentImg} alt="" fill />
          </picture>
        </div>
      </div>
      <picture className={styles.golfstick} data-speed={0.8} data-lag={0.8}>
        <source srcSet={golfstickMobileImg.src} media="(max-width: 767px)" />
        <source srcSet={golfstickTabletImg.src} media="(max-width: 1199px)" />
        <Image src={golfstickImg} fill alt="" quality={100} />
      </picture>
      <picture className={styles.bg}>
        <source srcSet={bgMobileImg.src} media="(max-width: 767px)" />
        <source srcSet={bgTabletImg.src} media="(max-width: 1199px)" />
        <Image src={bgImg} alt="" fill />
      </picture>
    </section>
  );
}
