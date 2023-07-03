import Link from 'next/link';
import Image from 'next/image';

import styles from './header-fixed.module.scss';
import logo from '@/assets/images/logo-big.png';
export default function HeaderFixed() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="UNKWN BONES" width={73} height={73} />
        </Link>
      </div>
      <div className={styles.wrapper}>
        <button className={styles.menuButton}>Menu</button>
      </div>
    </div>
  );
}
