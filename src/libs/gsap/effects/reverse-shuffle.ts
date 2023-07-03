import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
interface IReverseShuffleEffectConfig {
  textValue: string;
  duration?: number;
  delay?: number;
  ease?: string;
}
gsap.registerEffect({
  name: 'reverseShuffle',
  effect: (target: HTMLElement, config: IReverseShuffleEffectConfig) => {
    const reversedText = config.textValue.split('').reverse().join('');
    // create config without textValue
    const { textValue, ...configWithoutTextValue } = config;
    return gsap
      .timeline()
      .set(target, { text: reversedText })
      .to(target, {
        text: {
          value: textValue,
          delimiter: '',
          speed: 0.5,
        },
        duration: config.duration,
        delay: config.delay,
        ease: config.ease,
        ...configWithoutTextValue,
      });
  },
  extendTimeline: true,
  plugins: 'TextPlugin',
  defaults: {
    textValue: '',
    duration: 0.2,
    delay: 0.15,
    ease: 'power1.inOut',
  },
});
