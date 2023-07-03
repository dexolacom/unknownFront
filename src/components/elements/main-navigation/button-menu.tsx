import clsx from 'clsx';
import styles from './button-menu.module.scss';
interface IButtonMenuProps {
  className?: string;
}
export default function ButtonMenu({ className }: IButtonMenuProps) {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <button className={styles.button}>Menu</button>
    </div>
  );
}
