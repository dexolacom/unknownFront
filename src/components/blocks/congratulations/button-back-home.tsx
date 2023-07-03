import Link from 'next/link';
import clsx from 'clsx';

import styles from './button-back-home.module.scss';
import ArrowIcon from '@/assets/icons/arrow-top-right.svg';
import useReverseShuffleOnHover from '@/hooks/use-reverse-shuffle-on-hover';
interface IButtonBackHomeProps {
  className?: string;
}
export default function ButtonBackHome({
  className,
}: IButtonBackHomeProps): JSX.Element {
  return (
    <Link href="/" className={clsx(styles.link, className)}>
      <span className={styles.text}>Back to home</span>
      <i className={styles['icon-arrow']}>
        <ArrowIcon />
      </i>
    </Link>
  );
}
