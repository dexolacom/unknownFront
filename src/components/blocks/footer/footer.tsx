import Image from 'next/image';

import styles from './footer.module.scss';
import boneImg from './assets/bone.png';
import boneTabImg from './assets/bone-tab.png';
import boneMobImg from './assets/bone-mobile.png';
import ButtonOpenseaSquare from '@/components/elements/button-opensea-square/button-opensea-square';
import IconBook from '@/assets/icons/book.svg';
import IconLaw from '@/assets/icons/law.svg';
import IconDiscord from '@/assets/icons/discord.svg';
import IconTwitter from '@/assets/icons/twitter.svg';
import youniqLogoImg from '@/assets/images/logo-youniq.png';
import clsx from 'clsx';
import ButtonYouniq from './button-youniq';
import ButtonSlimeWithIcon from '@/components/elements/button-slime-with-icon/button-slime-with-icon';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['text-container']}>
          <p className={styles['text']}>
            We&apos;re all about creating a provoking space for meaningful
            interactions and providing benefits for our NFT holders. With a
            clear and bold vision of improving web3 space, where every single
            faceless Bone matters.We’re all about creating a provoking space for
            meaningful interactions and providing benefits for our NFT holders.
            With a clear and bold vision of improving web3 space, where every
            single faceless Bone matters.
          </p>
          <picture className={styles.bone}>
            <source srcSet={boneMobImg.src} media="(max-width: 767px)" />
            <source srcSet={boneTabImg.src} media="(max-width: 1199px)" />
            <Image src={boneImg} fill alt="" quality={100} />
          </picture>
        </div>
        <div className={styles['links-container']}>
          <ButtonOpenseaSquare className={styles['button-opensea']} />
          <ButtonSlimeWithIcon
            href="#"
            icon={IconBook}
            className={clsx(styles.button, styles['button-book'])}
            fallbackVariant={2}
            color="goshawk-grey"
            animationVariant={1}
          />
          <ButtonSlimeWithIcon
            href="https://discord.gg/unkwnbones"
            icon={IconDiscord}
            className={clsx(styles.button, styles['button-discord'])}
            fallbackVariant={1}
            color="tropical-trail"
            animationVariant={3}
          />

          <ButtonSlimeWithIcon
            href="#"
            icon={IconLaw}
            className={clsx(styles.button, styles['button-law'])}
            color="goshawk-grey"
            animationVariant={4}
          />
          <ButtonSlimeWithIcon
            href="https://twitter.com/unkwnbones"
            icon={IconTwitter}
            color="goshawk-grey"
            className={clsx(styles.button, styles['button-twitter'])}
            fallbackVariant={5}
            animationVariant={2}
          />

          <ButtonYouniq
            className={clsx(
              styles.button,
              styles['button--size-2'],
              styles['button-youniq'],
            )}
          />
          <a
            href="https://youniqlabs.io/policy"
            target="_blank"
            rel="noreferrer"
            className={clsx('link', styles['link-privacy'], styles.link)}
          >
            <span>Privacy Policy</span>
          </a>
          <a
            href="https://youniqlabs.io/terms"
            target="_blank"
            rel="noreferrer"
            className={clsx('link', styles['link-terms'], styles.link)}
          >
            <span>Terms of USE</span>
          </a>
          <div className={styles.copyrights}>
            <p>ⓒ Unkwn BONES 2023</p>
            <p>
              <span>
                website by:&nbsp;
                <a href="#" target="_blank" className={clsx('link')}>
                  svitlo.production
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles['bg']}></div>
    </footer>
  );
}
