import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import useMediaQuery from '@/hooks/use-media-query';

import styles from './home-hero.module.scss';
import bgBoneImg from './assets/bg-bone.png';
import bgBoneMobileImg from './assets/bg-bone-mobile.png';
import bgBoneTabletImg from './assets/bg-bone-tablet.png';
import bgImg from './assets/bg.png';
import bgMobileImg from './assets/bg-mobile.png';
import bgTabletImg from './assets/bg-tablet.png';
import Mbr from '@/components/elements/media-br/mediad-br';
import ListSocials from '@/components/elements/list-socials/list-socials';
import ButtonUnearth from '@/components/elements/button-unearth/button-unearth';

gsap.registerPlugin(SplitText);
export default function HomeHero(): JSX.Element {
  const { isMobile } = useMediaQuery();
  const sectionRef = useRef<HTMLElement>(null);

  // Titlte animation
  useIsomorphicLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(self => {
      if (!self.selector) return;
      const title = self.selector('[data-title]');
      const titleSplit = new SplitText(title, {
        type: 'chars',
        charsClass: styles.placeholder,
      });
      const shuffledChars = titleSplit.chars.sort(() => Math.random() - 0.5);
      shuffledChars.forEach((char: Element, index: number) => {
        setTimeout(() => {
          char.classList.remove(styles.placeholder);
          if (index === shuffledChars.length - 1) {
            // @ts-ignore
            titleSplit.revert();
          }
        }, index * 35);
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <section ref={sectionRef}>
      <div className={styles.container}>
        <h1 className={styles.title} data-title>
          Community <br />
          Beyond <br />
          the <br />
          Conventional <br />
          Web.
        </h1>
        <div className={styles['container-description']}>
          <p className={styles.description}>
            Unkwn Bones is a <Mbr max="md" />
            3D collection <br />
            of 888 NFTs on Ethereum <br />
            that provides pre-mint utility via visually <br />
            stunning storytelling.
          </p>

          <picture className={styles['bg-bone']}>
            <source media="(max-width: 767px)" srcSet={bgBoneMobileImg.src} />
            <source media="(max-width: 1199px)" srcSet={bgBoneTabletImg.src} />
            <Image
              src={bgBoneImg}
              alt=""
              fill
              priority
              sizes="75vw"
              quality={100}
            />
          </picture>
        </div>
        <div className={styles['bloody-button']}>
          <ButtonUnearth />
        </div>
        <div className={styles.socials}>
          <ListSocials direction="column" />
        </div>

        <picture className={styles.bg}>
          <source media="(max-width: 767px)" srcSet={bgMobileImg.src} />
          <source media="(max-width: 1199px)" srcSet={bgTabletImg.src} />
          <Image src={bgImg} alt="" fill priority sizes="100vw" quality={100} />
        </picture>
      </div>
    </section>
  );
}
