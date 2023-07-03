// import gsap from 'gsap';
// import LogoSVG from '@/assets/svg/logo.svg';
// import { useEffect, useRef } from 'react';
// import { DrawSVGPlugin } from 'gsap/all';
// export default function LogoAnimated() {
//   const ref = useRef();
//   useEffect(() => {
//     gsap.registerPlugin(DrawSVGPlugin);
//     if (!ref.current) return;
//     const ctx = gsap.context(self => {
//       if (!self.selector) return;
//       const svgViewBox = ref.current
//         .querySelector('svg')
//         .getAttribute('viewBox')
//         .split(' ');
//       const svgWidth = svgViewBox[2];
//       const svgHeight = svgViewBox[3];
//       const lettersUnkwn = self.selector('.logo_svg__unkwn path');

//       // Make the letters appear one by one
//       gsap.to(lettersUnkwn[2], {
//         rotateZ: -360,
//         svgOrigin: `${svgWidth / 2} ${svgHeight / 2}`,
//         repeat: -1,
//         duration: 5.5,
//       });
//     }, ref.current);
//   });
//   return (
//     <div
//       style={{
//         margin: '10vw',
//         width: '300px',
//         height: '300px',
//       }}
//       ref={ref}
//     >
//       <LogoSVG style={{ overflow: 'visible' }} />
//     </div>
//   );
// }
