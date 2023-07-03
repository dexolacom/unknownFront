import clsx from 'clsx';
import Logo from './assets/logo-progress-bar.svg';
import styles from './progress-bar.module.scss';

interface IProbressBarProps {
  progress: number;
  className?: string;
}
export default function ProgressBar({
  progress = 0,
  className,
}: IProbressBarProps): JSX.Element {
  const percent = Math.round(progress * 100);

  return (
    <div className={clsx(styles['progress-bar'], className)}>
      <div
        className={styles.progress}
        style={{ transform: `scaleX(${progress})` }}
      ></div>
      <Logo className={styles.logo} />
      <div className={styles.percent}>{percent}%</div>
    </div>
  );
}
