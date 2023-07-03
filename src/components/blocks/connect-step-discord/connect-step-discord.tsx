import ButtonConnectDiscord from '@/components/elements/button-connect-discord/button-connect-discord';
import ButtonConnectWallet from '@/components/elements/button-connect-wallet/button-coonect-wallet';
import styles from './connect-step-discord.module.scss';
import { useWizard } from 'react-use-wizard';

interface IConnectStepDiscordConnectedProps {
  status: 'connected' | 'rejected';
  onDiscordConnect?: () => void;
}
export default function ConnectStepDiscordConnected({
  status,
  onDiscordConnect,
}: IConnectStepDiscordConnectedProps) {
  const { goToStep } = useWizard();
  const title = status === 'connected' ? 'Hell yeah!' : 'Lol, nice attempt!';
  const text =
    status === 'connected'
      ? 'You’ve landed in Unkwn Hills, congrats!'
      : 'Too bad you’re not on the mint list, tho.';
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
      <div className={styles['buttons-container']}>
        <ButtonConnectDiscord
          state={status === 'connected' ? 'connected' : 'rejected'}
          showAction
          onActionClick={() => goToStep(0)}
        />
        <ButtonConnectWallet state="active" onClick={() => goToStep(3)} />
      </div>
    </div>
  );
}
