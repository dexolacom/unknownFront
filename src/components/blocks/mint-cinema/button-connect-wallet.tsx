import clsx from 'clsx';
import Image from 'next/image';
import { forwardRef } from 'react';

import styles from './button-connect-wallet.module.scss';
import LogoSVG from '@/assets/svg/logo-small.svg';
import buttonImg from './assets/button.png';
interface IButtonConnectWalletProps {
  className?: string;
  onClick?: () => void;
}
const ButtonConnectWallet = forwardRef(function ButtonConnectWallet(
  { className, onClick }: IButtonConnectWalletProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <button
      className={clsx(styles.button, className)}
      onClick={onClick}
      ref={ref}
    >
      <div className={styles.wrap}>
        <LogoSVG className={styles.logo} />
        <div className={styles.text}>
          Connect
          <br />
          Wallet
        </div>
        <LogoSVG className={styles.logo} />
      </div>
      <div className={styles.bg}>
        <Image
          src={buttonImg}
          alt=""
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1199vw) 53vw, 20vw"
          priority
        />
      </div>
    </button>
  );
});

export default ButtonConnectWallet;
