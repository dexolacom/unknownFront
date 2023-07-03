import { useWizard } from 'react-use-wizard';

import styles from './connect-step-confirm.module.scss';
import ButtonConnectDiscord from '@/components/elements/button-connect-discord/button-connect-discord';
import ButtonConnectText from '@/components/elements/button-connect-text/button-connect-text';
import ButtonConnectWallet from '@/components/elements/button-connect-wallet/button-coonect-wallet';
import HeaderConnect from '@/components/elements/header-connect/header-connect';

export default function ConnectStepConfirm(): JSX.Element {
  const { goToStep } = useWizard();
  return (
    <div className={styles.container}>
      <HeaderConnect walletAddress="0x493c4afb73b490e988650b9758e7736c72af748f" />
      <div className={styles.title}>
        Please, make sure you’ve got the right details in there!
      </div>
      <div className={styles.description}>
        I’m aware that after clicking the “Confirm” button, there is no going
        back
      </div>
      <div className={styles['buttons-container']}>
        <ButtonConnectDiscord state="connected" className={styles.button} />
        <ButtonConnectWallet state="connected" className={styles.button} />
      </div>
      <ButtonConnectText
        style="warning"
        className={styles['button-confirm']}
        onClick={() => goToStep(5)}
      >
        accept all info
      </ButtonConnectText>
    </div>
  );
}
