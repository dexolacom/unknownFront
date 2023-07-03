import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React, { use } from 'react';

import CloseIcon from '@/assets/icons/close.svg';
import CheckMarkIcon from '@/assets/icons/check-mark.svg';

import styles from './button-connect.module.scss';
import buttonLightGrayImg from './assets/button-lightgray.png';
import buttonDarkGrayImg from './assets/button-darkgray.png';
import buttonGreenImg from './assets/button-green.png';
import buttonRedImg from './assets/button-red.png';
import useReverseShuffleOnHover from '@/hooks/use-reverse-shuffle-on-hover';

interface IButtonConnectProps {
  onClick?: () => void;
  className?: string;
}
interface IButtonConnectActiveProps extends IButtonConnectProps {
  state: 'active';
  icon: typeof React.Component;
  text: string;

  actionText?: undefined;
  onActionClick?: undefined;
}
interface IButtonConnectDisabledProps extends IButtonConnectProps {
  state: 'disabled';
  icon: typeof React.Component;
  text: string;

  actionText?: undefined;
  onActionClick?: undefined;
}
interface IButtonConnectRejectedProps extends IButtonConnectProps {
  state: 'rejected';

  icon?: undefined;
  text?: undefined;
  actionText?: undefined;
  onActionClick?: undefined;
}
interface IButtonConnectConnectedProps extends IButtonConnectProps {
  state: 'connected';
  text: string;
  actionText?: string;
  onActionClick?: () => void;

  icon?: undefined;
}
type TButtonConnectProps =
  | IButtonConnectActiveProps
  | IButtonConnectDisabledProps
  | IButtonConnectRejectedProps
  | IButtonConnectConnectedProps;
export default function ButtonConnect({
  state = 'active',
  onClick,
  icon: iconProp,
  text,
  actionText,
  onActionClick,
  className,
}: TButtonConnectProps): JSX.Element {
  const actionRef = React.useRef<HTMLButtonElement>(null);
  const rejectedText = 'Reconnect';
  let buttonImgSrc: StaticImageData;
  let Icon: typeof React.Component;

  // Hower Animation for action button
  useReverseShuffleOnHover(actionRef);
  switch (state) {
    case 'disabled':
      buttonImgSrc = buttonDarkGrayImg;
      Icon = iconProp as typeof React.Component;
      break;
    case 'rejected':
      buttonImgSrc = buttonRedImg;
      Icon = CloseIcon;
      break;
    case 'connected':
      buttonImgSrc = buttonGreenImg;
      Icon = CheckMarkIcon;
      break;
    default:
      buttonImgSrc = buttonLightGrayImg;
      Icon = iconProp as typeof React.Component;
  }
  return (
    <div className={clsx(className, styles.container)}>
      <button
        onClick={onClick}
        className={clsx(
          styles.button,
          {
            [styles.active]: state === 'active',
            [styles.disabled]: state === 'disabled',
            [styles.rejected]: state === 'rejected',
            [styles.connected]: state === 'connected',
          },
          'button',
        )}
      >
        <div className={clsx('wrap', styles.wrap)}>
          <i className={clsx('icon', styles.icon)}>
            <Icon />
          </i>
          <div className={clsx('text', styles.text)}>
            {(state === 'rejected' && rejectedText) || text}
          </div>
        </div>
        <Image
          src={buttonImgSrc}
          alt=""
          width={358}
          height={358}
          quality={100}
          sizes="(max-width: 767px) 58vw, 358px"
        />
      </button>
      {actionText && (
        <button
          className={clsx('action', styles.action)}
          onClick={onActionClick}
          ref={actionRef}
        >
          {actionText}
        </button>
      )}
    </div>
  );
}
