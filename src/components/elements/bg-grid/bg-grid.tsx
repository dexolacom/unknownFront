import clsx from 'clsx';
import styles from './bg-grid.module.scss';
interface IBgGridProps {
  className?: string;
}
export default function BgGrid({ className }: IBgGridProps): JSX.Element {
  return <div className={clsx(styles.bg, className)}></div>;
}
