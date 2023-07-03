import clsx from 'clsx';
import styles from './button-social.module.scss';
interface IButtonSocial {
  className?: string;
  href: string;
  icon: any;
}
export default function ButtonSocial({
  href,
  icon: Icon,
  className,
}: IButtonSocial) {
  return (
    <a href={href} className={clsx(styles.button, className)} target="_blank">
      <i className={styles.icon}>
        <Icon />
      </i>
    </a>
  );
}
