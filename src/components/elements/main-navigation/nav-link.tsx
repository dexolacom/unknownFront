import Link from 'next/link';
import { useRef } from 'react';
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect';
import { gsap } from '@/libs/gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import useMediaQuery from '@/hooks/use-media-query';
import useReverseShuffleOnHover from '@/hooks/use-reverse-shuffle-on-hover';
gsap.registerPlugin(TextPlugin);

interface INavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}
export default function NavLink({
  href,
  className,
  children,
}: INavLinkProps): JSX.Element {
  const ref = useRef<HTMLAnchorElement>(null);
  useReverseShuffleOnHover(ref);
  return (
    <Link href={href} className={className} ref={ref} data-link>
      {children}
    </Link>
  );
}
