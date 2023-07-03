import styles from './faq-title.module.scss';
import IconCross from '@/assets/icons/cross.svg';
export default function FaqTitle(): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <IconCross className={styles.icon} />
        <h1 className={styles.title}>faq</h1>
        <IconCross className={styles.icon} />
      </div>
    </section>
  );
}
