import { useWizard } from 'react-use-wizard';
import styles from './connect-step-verification.module.scss';
import ButtonConnectText from '@/components/elements/button-connect-text/button-connect-text';

export default function ConnectStepVerification() {
  const { goToStep } = useWizard();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>verification</h1>
      <p className={styles.text}>Connect your wallet</p>
      <div className={styles.input}>
        <textarea className={styles['input__textarea']}>
          0x493c4afb73b490e988650b9758e7736c72af748f
        </textarea>
        <div className={styles['input__message']}>
          Check your address one more time
        </div>
      </div>
      <div className={styles['buttons-container']}>
        <ButtonConnectText className={styles.button}>
          Connect your wallet
        </ButtonConnectText>
        <ButtonConnectText
          style="warning"
          className={styles.button}
          onClick={() => goToStep(4)}
        >
          verify
        </ButtonConnectText>
      </div>
    </div>
  );
}
