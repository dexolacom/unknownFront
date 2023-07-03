import Image from 'next/image';
import { useCallback, useRef } from 'react';
import FaqCard, { IFaqCardRef } from './faq-card';
import styles from './faq-list.module.scss';
// import bgMobImg from './assets/bg-mobile.png';
export default function FaqList(): JSX.Element {
  const faqList = [
    {
      question: 'What is Unkwn Bones?',
      answer: `Unkwn Bones is a collection of 10,000 unique NFTs on the Ethereum blockchain. Each NFT is randomly generated and has a unique combination of attributes. The collection is inspired by the 90's and early 2000's skateboarding culture.`,
    },
    {
      question: 'What is the Supply and Why?',
      answer:
        'We&apos;re keeping it exclusive with only 10,000 NFTs in total. We want to have a diverse and inclusive community, not just a bunch of whales hoarding them all.',
    },
    {
      question: 'What&apos;s the project all about?',
      answer: `We&apos;re a group of friends that have been skating together for years. We&apos;ve been in the NFT space for a while and wanted to combine our two passions. We&apos;re all about having fun and keeping it real.`,
    },
    {
      question: 'What kind of utility will Unkwn Bones NFTs have?',
      answer: `We&apos;re working on a few things, but we&apos;re not ready to announce anything yet. We&apos;ll be sure to keep you updated as we make progress.`,
    },
    {
      question: 'Which blockchain is Unkwn Bones based on?',
      answer: `Unkwn Bones is based on the Ethereum blockchain.`,
    },
    {
      question: 'Why this art, though?',
      answer: `We&apos;re inspired by the 90&apos;s and early 2000&apos;s skateboarding culture. We&apos;re also inspired by the art of the time. We&apos;re trying to capture the essence of that era.`,
    },
    {
      question: 'Why do you have both a Roadmap and Mindmap?',
      answer: `We have a Roadmap to show you what we&apos;re working on. We have a Mindmap to show you how we&apos;re thinking about the project. We&apos;re trying to be as transparent as possible.`,
    },
    {
      question: 'What&apos;s the best way to get in touch?',
      answer: `The best way to get in touch is to join our Discord. We&apos;re always hanging out there.`,
    },
    {
      question: 'What&apos;s the best way to get in touch?',
      answer: `The best way to get in touch is to join our Discord. We&apos;re always hanging out there.`,
    },
    {
      question: 'What&apos;s the best way to get in touch?',
      answer: `The best way to get in touch is to join our Discord. We&apos;re always hanging out there.`,
    },
  ];
  const cardRefs = useRef<IFaqCardRef[] | null[]>([] as IFaqCardRef[]);

  const setRefs = useCallback((cardRef: IFaqCardRef | null, idx: number) => {
    cardRefs.current[idx] = cardRef;
  }, []);

  const handleExpand = useCallback((idxCurrent: number) => {
    cardRefs.current.forEach((cardRef, i) => {
      const card = cardRef;
      if (!card) return;
      if (i === idxCurrent) {
        if (card.isExpanded) {
          card.collapse();
          return;
        }

        card.expand();
        return;
      }
      if (card.isExpanded) card.collapse();
    });
  }, []);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <span>
            Frequently asked questio
            <span className={styles['char-drop']}>n</span>s
          </span>
        </h2>
        <ul className={styles.list}>
          {faqList.map((faq, idx) => (
            <FaqCard
              key={idx}
              question={faq.question}
              answer={faq.answer}
              className={styles.card}
              ref={cardRef => setRefs(cardRef, idx)}
              onClick={() => handleExpand(idx)}
            />
          ))}
        </ul>
      </div>
      {/* <Image src={bgMobImg} alt="" fill /> */}
    </section>
  );
}
