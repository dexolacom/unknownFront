import WalletIcon from '@/assets/icons/wallet.svg';

import ButtonConnect from '../button-connect/button-connect';
interface IButtonConnectWalletProps {
  state: 'connected' | 'active' | 'disabled';
  onClick?: () => void;
  className?: string;
}
export default function ButtonConnectWallet({
  state,
  onClick,
  className,
}: IButtonConnectWalletProps) {
  const Icon = WalletIcon;
  const buttonText = 'Connect wallet';

  if (state === 'connected') {
    return (
      <ButtonConnect
        state="connected"
        text={buttonText}
        onClick={onClick}
        className={className}
      />
    );
  }
  if (state === 'disabled') {
    return (
      <ButtonConnect
        state="disabled"
        icon={Icon}
        text={buttonText}
        onClick={onClick}
        className={className}
      />
    );
  }
  return (
    <ButtonConnect
      state="active"
      icon={Icon}
      text={buttonText}
      onClick={onClick}
      className={className}
    />
  );
}
