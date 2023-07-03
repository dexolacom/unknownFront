import { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ShutterContext } from '@/contexts/context-shutter';
import { SmootherContext } from '@/contexts/context-smoother';
import { ScrollSmoother } from 'gsap/all';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';

export default function TransitionPixel({
  children,
}: {
  children: JSX.Element[];
}): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const firstSectionContainerRef = useRef<HTMLDivElement>(null);
  const secondSectionContainerRef = useRef<HTMLDivElement>(null);
  const shutter = useContext(ShutterContext);
  const smoother = useContext(SmootherContext);
  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (!containerRef.current || !shutter?.methods?.refs?.cells) return;

    // console.log(smoother);
    gsap.registerPlugin(ScrollTrigger);
    // console.log(smoother);
    const ctx = gsap.context(self => {
      if (!self) return;
      if (!containerRef.current || !secondSectionContainerRef.current) return;
      const firstSection = containerRef.current.children[0];
      const secondSection = containerRef.current.children[1];

      // Set fixed size for container to hide overflow
      const firstSectionHeight = firstSection.clientHeight;
      const secondSectionHeight = secondSection.clientHeight;
      const screenHeight = window.innerHeight;
      const containerHeight =
        firstSectionHeight + secondSectionHeight - screenHeight;

      const observer = ScrollTrigger.observe({
        target: window,
      });
      observer.disable();
      // Variant fixed
      const shutterObj = shutter.methods;
      gsap.set(firstSection, {
        marginBottom: secondSectionHeight + 'px',
      });
      gsap.set(secondSectionContainerRef.current, {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        zIndex: 22,
        autoAlpha: 0,
      });
      const section = secondSectionContainerRef.current?.querySelector(
        'section',
      ) as HTMLElement;
      const scrollLength =
        section?.clientHeight - secondSectionContainerRef.current?.clientHeight;
      const tlTransition = gsap.timeline({
        scrollTrigger: {
          trigger: firstSection,
          start: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          end: `+=${firstSectionHeight}`,
          toggleActions: 'play none reverse reverse',
          markers: true,
        },
      });
      tlTransition
        .set(shutterObj.refs.shutter, {
          autoAlpha: 1,
          immediateRender: false,
          overwrite: true,
        })
        .set(shutterObj.refs.cells, {
          autoAlpha: 1,
          background: '#437061',
          stagger: {
            amount: 0.5,
            from: 'random',
          },
        })
        .set(firstSection, {
          autoAlpha: 0,
          immediateRender: false,
        })
        .set(secondSectionContainerRef.current, {
          autoAlpha: 1,
          immediateRender: false,
        })
        .set(firstSection, {
          autoAlpha: 0,
          immediateRender: false,
        })
        .set(shutterObj.refs.cells, {
          background: 'transparent',
          stagger: {
            amount: 0.5,
            from: 'random',
          },
        });

      console.log('ctx ~ scrollLength:', scrollLength);
      const offScreenTl = gsap.timeline({ paused: true });
      createTransitionTl(offScreenTl);
      const tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: firstSection,
          start: () => {
            return Number(tlTransition.scrollTrigger?.start);
          },
          end: `+=${scrollLength}`,
          scrub: true,
          markers: {
            startColor: 'blue',
            endColor: 'blue',
          },
          onEnterBack: () => {
            offScreenTl.reverse();
          },
          onLeave: () => {
            offScreenTl.play();
          },
        },
      });

      tlScroll.to(secondSectionContainerRef.current?.querySelector('section'), {
        y: -scrollLength,
      });

      function createTransitionTl(tl: GSAPTimeline) {
        return tl
          .set(shutterObj.refs.cells, {
            background: '#437061',
            stagger: {
              amount: 0.5,
              from: 'random',
            },
            immediateRender: false,
            overwrite: 'auto',
          })
          .set(secondSectionContainerRef.current, {
            autoAlpha: 0,
            immediateRender: false,
            overwrite: 'auto',
          })
          .set(shutterObj.refs.cells, {
            background: 'transparent',
            stagger: {
              amount: 0.5,
              from: 'random',
            },
            immediateRender: false,
            overwrite: 'auto',
          });
      }
      // Variant 1
      // const shutterObj = shutter.methods;
      // gsap.set(containerRef.current, {
      //   overflow: 'hidden',
      // });
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: `top+=${firstSectionHeight} bottom`,
      //     end: '+=25%',
      //     pin: true,
      //     markers: true,
      //     toggleActions: 'play none none reverse',
      //     scrub: true,
      //     snap: {
      //       snapTo: 1 / 2,
      //       delay: 0.001,
      //       duration: 0.75,
      //       ease: 'power1.inOut',
      //       inertia: false,
      //       directional: false,
      //     },
      //   },
      // });
      // tl.set(shutterObj.refs.shutter, {
      //   autoAlpha: 1,
      //   pointerEvents: 'auto',
      //   immediateRender: false,
      //   overwrite: true,
      //   duration: 0,
      // })
      //   .set(shutterObj.refs.cells, {
      //     autoAlpha: 1,
      //     background: '#437061',
      //     stagger: { amount: 1, from: 'random' },
      //     immediateRender: false,
      //   })
      //   .set([firstSection, secondSection], {
      //     y: '-100vh',
      //     immediateRender: false,
      //     duration: 0,
      //   })
      //   .set(shutterObj.refs.cells, {
      //     background: 'transparent',
      //     stagger: { amount: 1, from: 'random' },
      //   })
      //   .set(shutterObj.refs.shutter, {
      //     autoAlpha: 0,
      //     immediateRender: false,
      //     pointerEvents: 'none',
      //   });
      // Variant 1
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: `${firstSectionHeight}px top`,
      //     end: '+=500',
      //     // toggleActions: 'play none none reverse',
      //     pin: true,
      //     // pinSpacing: false,
      //   },
      // });
      // tl.set(shutterObj.refs.cells, {
      //   background: 'red',
      // })
      //   .set(shutterObj.refs.shutter, {
      //     autoAlpha: 1,
      //     pointerEvents: 'auto',
      //   })
      //   .to(shutterObj.refs.cells, {
      //     autoAlpha: 1,
      //     stagger: {
      //       amount: 1,
      //     },
      //   })
      //   .set(firstSection, { autoAlpha: 0 })
      //   .set(
      //     secondSection,
      //     {
      //       autoAlpha: 1,
      //     },
      //     '<',
      //   )
      //   .to(shutterObj.refs.cells, {
      //     autoAlpha: 0,
      //     stagger: {
      //       amount: 1,
      //     },
      //   })
      //   .set(shutterObj.refs.shutter, {
      //     autoAlpha: 0,
      //     pointerEvents: 'none',
      //   });
      ScrollTrigger.refresh();
    }, containerRef.current);

    return () => {
      ctx.revert();
    };
  }, [containerRef.current, shutter?.methods?.refs?.cells]);
  return (
    <div ref={containerRef}>
      <div ref={firstSectionContainerRef}>{children[0]}</div>
      <div ref={secondSectionContainerRef}>{children[1]}</div>
    </div>
  );
}
