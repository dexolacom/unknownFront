import { useMediaQuery as useMediaQueryResponsive } from 'react-responsive';
import { BREAKPOINTS } from '@/constants';
import { useState, useEffect } from 'react';

interface IUseMediaQuery {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export default function useMediaQuery(): IUseMediaQuery {
  const isMobileResp = useMediaQueryResponsive({
    maxWidth: BREAKPOINTS.MD - 1,
  });
  const isTabletResp = useMediaQueryResponsive({
    minWidth: BREAKPOINTS.MD,
    maxWidth: BREAKPOINTS.XL - 1,
  });
  const isDesktopResp = useMediaQueryResponsive({ minWidth: BREAKPOINTS.XL });

  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileResp);
    setIsTablet(isTabletResp);
    setIsDesktop(isDesktopResp);
  }, [isMobileResp, isTabletResp, isDesktopResp]);

  return { isMobile, isTablet, isDesktop };
}
