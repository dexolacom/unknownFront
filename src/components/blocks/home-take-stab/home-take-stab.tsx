import Image from 'next/image';
import styles from './home-take-stab.module.scss';
import Smile from './assets/smile.svg';
import bgHeaderImg from './assets/bg-header.png';
import TakeStabCard from './take-stab-card';

export default function HomeTakeStab() {
  return (
    <section className={styles.section}>
      <div className={styles['container']}>
        <div className={styles.header}>
          <Smile className={styles.icon} />
          <h2 className={styles.title}>
            Take <br /> a stab
          </h2>
          <p className={styles.subtitle}>at the Unkwn</p>
          <Image
            className={styles['bg-header']}
            src={bgHeaderImg}
            alt=""
            fill
            quality={100}
          />
        </div>
        <ul className={styles.list}>
          <li className={styles.card}>
            <TakeStabCard
              title="Gallery"
              text={
                <>
                  Where the Unkwn <br />
                  is transformed into <br />
                  3D artworks
                </>
              }
              link="/gallery"
              bgVariant={1}
            />
          </li>
          <li className={styles.card}>
            <TakeStabCard
              title="MindMap"
              text={
                <>
                  Where the road <br />
                  to the unkwn is <br />
                  charted
                </>
              }
              link="/mindmap"
              bgVariant={2}
            />
          </li>
          <li className={styles.card}>
            <TakeStabCard
              title="Comic"
              text={
                <>
                  Where the secrets of the <br /> unkwn are uncovered through
                  Dasty’s <br />
                  rebellious journey
                </>
              }
              link="/comic"
              bgVariant={3}
            />
          </li>
          <li className={styles.card}>
            <TakeStabCard
              title="Faq"
              text={
                <>
                  Where the unkwn <br />
                  becomes known, and questions <br />
                  get answered
                </>
              }
              link="/faq"
              bgVariant={4}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}
