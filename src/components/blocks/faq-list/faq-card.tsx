import {
  use,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import { gsap } from '@/libs/gsap';
import { Flip } from 'gsap/Flip';
import { TextPlugin } from 'gsap/TextPlugin';
import styles from './faq-card.module.scss';
import IconCross from '@/assets/icons/cross-variant-2.svg';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

import React from 'react';

gsap.registerPlugin(Flip);

interface IFaqCardProps {
  question: string;
  answer: string;
  className?: string;
  onClick?: () => void;
}
export interface IFaqCardRef {
  expand: () => void;
  collapse: () => void;
  isExpanded: boolean;
}
const FLIP_ANIM_PARAMS = {
  duration: 0.5,
  nested: true,
  ease: 'power3.out',
};
const TEXT_ANIM_PARAMS = {
  duration: 0.5,
  opacity: 0,
  ease: 'power3.out',
  text: {
    speed: 5,
  },
};
const FaqCard = React.forwardRef<IFaqCardRef, IFaqCardProps>(function FaqCard(
  { question, answer, className, onClick }: IFaqCardProps,
  ref,
): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLLIElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const textTween = useRef<gsap.core.Tween | null>(null);

  // Expand animation
  // Methods
  const handleExpand = useCallback(() => {
    const card = cardRef.current;
    const body = bodyRef.current;
    const text = textRef.current;
    const tween = textTween.current;

    if (!card || !body || !text || !tween) return;
    const state = Flip.getState([card, body]);
    setIsExpanded(true);
    requestAnimationFrame(() => {
      Flip.from(state, {
        targets: [card, body],
        ...FLIP_ANIM_PARAMS,
      }).add(() => {
        tween.restart();
      });
    });
  }, []);

  const handleCollapse = useCallback(() => {
    const card = cardRef.current;
    const body = bodyRef.current;
    const tween = textTween.current;
    if (!card || !body || !tween) return;
    const state = Flip.getState([card, body]);
    setIsExpanded(false);

    // Start animation after render
    requestAnimationFrame(() => {
      Flip.from(state, {
        targets: [card, body],
        ...FLIP_ANIM_PARAMS,
      }).add(() => {
        tween.progress(0).pause();
      });
    });
  }, []);

  // Set up text animation on mount
  useIsomorphicLayoutEffect(() => {
    const text = textRef.current;
    if (!text) return;
    const placeholder = answer.replace(/\S/g, '█');
    textTween.current = gsap.from(text, {
      ...TEXT_ANIM_PARAMS,
      text: {
        ...TEXT_ANIM_PARAMS.text,
        value: placeholder,
      },
      paused: true,
    });
  }, []);

  // Expose methods
  useImperativeHandle(
    ref,
    () => {
      return {
        expand: handleExpand,
        collapse: handleCollapse,
        isExpanded: isExpanded,
      };
    },
    [handleExpand, handleCollapse, isExpanded],
  );

  return (
    <li
      className={clsx(styles.card, className, { [styles.active]: isExpanded })}
      ref={cardRef}
      onClick={onClick}
    >
      <div className={styles.wrap}>
        <div className={styles.header}>
          <h3 className={styles.question}>{question}</h3>
          <button className={styles.button}>
            <IconCross className={styles.icon} />
          </button>
        </div>
        <div className={styles.body} ref={bodyRef}>
          <p className={styles.answer} ref={textRef}>
            {answer}
          </p>
        </div>
      </div>
    </li>
  );
});
export default FaqCard;
