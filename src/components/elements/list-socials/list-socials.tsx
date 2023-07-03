import styles from './list-socials.module.scss';
import ButtonSocial from './button-social';
import DiscordIcon from '@/assets/icons/discord.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import OpenSeaIcon from '@/assets/icons/opensea.svg';
import clsx from 'clsx';

interface IListSocials {
  className?: string;
  direction?: 'row' | 'column';
}
export default function ListSocials({
  className,
  direction = 'row',
}: IListSocials): JSX.Element {
  return (
    <ul
      className={clsx(styles.socials, {
        [styles['row']]: direction === 'row',
        [styles['column']]: direction === 'column',
      })}
    >
      <li className={styles.button}>
        <ButtonSocial href="https://discord.gg/unkwnbones" icon={DiscordIcon} />
      </li>
      <li className={styles.button}>
        <ButtonSocial href="https://twitter.com/unkwnbones" icon={TwitterIcon} />
      </li>
      <li className={styles.button}>
        <ButtonSocial href="https://opensea.io/collection/unkwn-angels" icon={OpenSeaIcon} />
      </li>
    </ul>
  );
}
