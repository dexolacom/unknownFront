import Link from 'next/link';
import Image from 'next/image';
import { BREAKPOINTS } from '@/constants';

import styles from './take-stab-card.module.scss';
import Arrow from '@/assets/icons/arrow-top-right.svg';
import Plus from './assets/plus.svg';
import bgVariant1Img from './assets/bg-card-variant-1.png';
import bgVariant2Img from './assets/bg-card-variant-2.png';
import bgVariant3Img from './assets/bg-card-variant-3.png';
import bgVariant4Img from './assets/bg-card-variant-4.png';
interface ITakeStabCardProps {
  title: string | JSX.Element;
  text: string | JSX.Element;
  link: string;
  bgVariant?: 1 | 2 | 3 | 4;
}
export default function TakeStabCard({
  title,
  text,
  link,
  bgVariant = 1,
}: ITakeStabCardProps) {
  const bgImg =
    bgVariant === 1
      ? bgVariant1Img
      : bgVariant === 2
      ? bgVariant2Img
      : bgVariant === 3
      ? bgVariant3Img
      : bgVariant4Img;
  return (
    <Link href={link} className={styles.card}>
      <h3 className={styles.title}>
        <span>{title}</span>
      </h3>
      <Plus className={styles.icon} />
      <p className={styles.text}>
        <span>{text}</span>
      </p>
      <Arrow className={styles.arrow} />
      <Image src={bgImg} alt="" className={styles['bg']} fill quality={100} />
    </Link>
  );
}
