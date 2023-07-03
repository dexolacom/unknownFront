import Image from 'next/image';
import styles from './home-rules.module.scss';
import TextWrap from '@/utils/TextWrap';
import bgContentDesktop from './assets/bg-content-desk.jpg';
import bgContentTablet from './assets/bg-content-tab.jpg';
import bgContentMobile from './assets/bg-content-mob.jpg';
import ButtonUnearth from '@/components/elements/button-unearth/button-unearth';
export default function HomeRules() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>
            <span>In</span> <span>the</span> <span>Unkwn</span>
            <span>World</span>
          </h2>
          <p className={styles['right-text']}>
            where you can <br />
            be yourself <br />
            & foster <br />
            self-realization <br />
            within The <br />
            Circle
          </p>
          <p className={styles['left-text']}>
            alongside <br />
            established <br />
            players <br />
            in the Web3 space.
          </p>
          <picture className={styles['bg-content']}>
            <source srcSet={bgContentMobile.src} media="(max-width: 767px)" />
            <source srcSet={bgContentTablet.src} media="(max-width: 1199px)" />
            <Image
              src={bgContentDesktop}
              alt=""
              fill
              sizes="34vw"
              quality={100}
            />
          </picture>
        </div>
        <p className={styles['text-bg']}>
          <TextWrap parentTag="span" parentClass="line">
            In the Unkwn World,
          </TextWrap>
          <TextWrap parentTag="span" parentClass="line">
            genuine self-
          </TextWrap>
          <TextWrap parentTag="span" parentClass="line">
            expression dictates
          </TextWrap>
          <TextWrap parentTag="span" parentClass="line">
            the rules In the
          </TextWrap>
          <TextWrap parentTag="span" parentClass="line">
            Unkwn World,
          </TextWrap>
          <TextWrap parentTag="span" parentClass="line">
            genuine self-
          </TextWrap>
          <TextWrap parentTag="span" parentClass="line">
            expression dictates
          </TextWrap>
          <TextWrap parentTag="span" parentClass="line">
            the rules In the
          </TextWrap>
          <TextWrap parentTag="span" parentClass="line">
            Unkwn World,
          </TextWrap>
          <TextWrap parentTag="span" parentClass="line">
            genuine
          </TextWrap>
        </p>
        <div className={styles['bloody-button']}>
          <ButtonUnearth />
        </div>
      </div>
      <div className={styles.bg}></div>
    </section>
  );
}
