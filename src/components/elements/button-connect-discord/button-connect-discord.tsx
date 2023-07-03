import React from 'react';
import ButtonConnect from '../button-connect/button-connect';
import DiscordIcon from '@/assets/icons/discord.svg';
interface IButtonConnectDiscordProps {
  state: 'connected' | 'rejected' | 'active' | 'disabled';
  onClick?: () => void;
  actionText?: string;
  onActionClick?: () => void;
  showAction?: boolean;
  className?: string;
}

export default function ButtonConnectDiscord({
  state,
  onClick,
  onActionClick,
  showAction,
  className,
}: IButtonConnectDiscordProps) {
  const actionText = 'disconnect discord';
  const buttonText = 'Connect discord';
  const Icon = DiscordIcon;

  if (state === 'connected') {
    return (
      <ButtonConnect
        state="connected"
        text={buttonText}
        actionText={showAction ? actionText : undefined}
        onActionClick={onActionClick}
        className={className}
      />
    );
  }

  if (state === 'rejected') {
    return <ButtonConnect state="rejected" />;
  }

  if (state === 'disabled') {
    return (
      <ButtonConnect
        state="disabled"
        icon={Icon}
        text={buttonText}
        onClick={onClick}
      />
    );
  }
  return (
    <ButtonConnect
      state="active"
      icon={Icon}
      text={buttonText}
      onClick={onClick}
    />
  );
}
