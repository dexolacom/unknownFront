import { useRef } from 'react';

import clsx from 'clsx';
import styles from './button-disconnect-wallet.module.scss';
import useReverseShuffleOnHover from '@/hooks/use-reverse-shuffle-on-hover';

interface IButtonDisconnectWalletProps {
  className?: string;
  onClick?: () => void;
}
export default function ButtonDisconnectWallet({
  className,
  onClick,
}: IButtonDisconnectWalletProps) {
  const ref = useRef<HTMLButtonElement>(null);
  useReverseShuffleOnHover(ref);
  return (
    <button
      className={clsx(styles.button, className)}
      onClick={onClick}
      ref={ref}
    >
      disconnect wallet
    </button>
  );
}
