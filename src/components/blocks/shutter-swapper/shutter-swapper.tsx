import { useRef } from 'react';

import ShutterProvider from '@/contexts/context-shutter';
import Container from './container';
interface IShutterSwapper {
  children: JSX.Element[];
}
export default function ShutterSwapper({ children }: IShutterSwapper) {
  return <Container>{children}</Container>;
}
