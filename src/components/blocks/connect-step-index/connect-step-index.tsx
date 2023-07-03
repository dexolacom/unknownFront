import ButtonConnectDiscord from '@/components/elements/button-connect-discord/button-connect-discord';
import ButtonConnectWallet from '@/components/elements/button-connect-wallet/button-coonect-wallet';
import styles from './connect-step-index.module.scss';
import { useWizard } from 'react-use-wizard';

export default function ConnectStepIndex(): JSX.Element {
  const { goToStep } = useWizard();
  return (
    <div className={styles.container}>
      <ButtonConnectDiscord state="active" onClick={() => goToStep(1)} />
      <ButtonConnectWallet state="disabled" onClick={() => goToStep(2)} />
    </div>
  );
}
