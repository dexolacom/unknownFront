import clsx from 'clsx';
import Image from 'next/image';

import styles from './button-connect-text.module.scss';
import buttonPrimaryImg from './assets/button-primary.png';
import buttonWarningImg from './assets/button-warning.png';
interface IButtonConnectTextProps {
  onClick?: () => void;
  className?: string;
  style?: 'primary' | 'warning';
  children: React.ReactNode;
}
export default function ButtonConnectText({
  children,
  style = 'primary',
  className,
  onClick,
}: IButtonConnectTextProps) {
  const buttonImg = style === 'primary' ? buttonPrimaryImg : buttonWarningImg;
  return (
    <button
      className={clsx(
        styles.button,
        {
          [styles.primary]: style === 'primary',
          [styles.warning]: style === 'warning',
        },
        className,
      )}
      onClick={onClick}
    >
      <div className={styles.wrap}>
        <span className={styles.text}>{children}</span>
        <Image
          src={buttonImg}
          alt=""
          className={styles.img}
          width={360}
          height={170}
          quality={100}
        />
      </div>
    </button>
  );
}
