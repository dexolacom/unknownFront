import { useRouter } from 'next/router';

import HeaderConnect from '@/components/elements/header-connect/header-connect';
import styles from './connect-step-finish.module.scss';
import ButtonConnectText from '@/components/elements/button-connect-text/button-connect-text';

export default function ConnectStepFinish() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <HeaderConnect walletAddress="0x493c4afb73b490e988650b9758e7736c72af748f" />
      <div className={styles.title}>
        Lfg, your data has been confirmed! Mark your calendar for xx/xx/2023
        <br />
        (Mint Date)
      </div>
      <div className={styles.text}>
        Stay tuned & keep an eye on #announcement in our Discord.
      </div>
      <ButtonConnectText
        style="warning"
        className={styles.button}
        onClick={() => {
          router.push('/');
        }}
      >
        back to home
      </ButtonConnectText>
    </div>
  );
}
