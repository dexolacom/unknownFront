import Image from 'next/image';

import styles from './header-connect.module.scss';
import logoImg from '@/assets/images/logo.png';
import clsx from 'clsx';
interface IHeaderConnectProps {
  className?: string;
  walletAddress: string;
}
export default function HeaderConnect({
  className,
  walletAddress,
}: IHeaderConnectProps): JSX.Element {
  return (
    <div className={clsx(styles.header, className)}>
      <div className={styles.logo}>
        <Image src={logoImg} alt="UNKWN BONES FUCK" width={73} height={73} />
      </div>
      <div className={styles.wallet}>
        <span>{walletAddress}</span>
      </div>
    </div>
  );
}
