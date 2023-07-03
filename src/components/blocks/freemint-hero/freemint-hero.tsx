import Image from 'next/image';
import { useRouter } from 'next/router';

import DiscordIcon from '@/assets/icons/discord.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import OpenSeaIcon from '@/assets/icons/opensea.svg';
import ButtonSocial from '../../elements/list-socials/button-social';
import styles from './freemint-hero.module.scss';
import boneImg from './assets/bone.png';
import bgDesktopImg from './assets/bg-desk.png';
import bgTabletImg from './assets/bg-tab.png';
import bgMobileImg from './assets/bg-mob.png';

import WindowMintProcess from './window-mint-process';
import ButtonDisconnectWallet from './button-disconnect-wallet';
import ListSocials from '@/components/elements/list-socials/list-socials';
import useMediaQuery from '@/hooks/use-media-query';

export default function FreeMintHero() {
  const router = useRouter();
  const { isMobile } = useMediaQuery();
  return (
    <section className={styles.freemint}>
      <div className={styles['button-disconnect']}>
        <ButtonDisconnectWallet onClick={() => router.push('/mint')} />
      </div>

      <div className={styles.socials}>
        <ListSocials direction={isMobile ? 'row' : 'column'} />
      </div>
      <div className={styles.bone}>
        <Image
          src={boneImg}
          fill
          alt=""
          quality={100}
          sizes="(max-width: 1199px) 75vw, 41vw"
          priority
        />
      </div>
      <div className={styles['window-mint-process']}>
        <WindowMintProcess />
      </div>
      <picture className={styles.bg}>
        <source srcSet={bgMobileImg.src} media="(max-width: 767px)" />
        <source srcSet={bgTabletImg.src} media="(max-width: 1199px)" />
        <Image src={bgDesktopImg} alt="" fill sizes="100vw" />
      </picture>
    </section>
  );
}
