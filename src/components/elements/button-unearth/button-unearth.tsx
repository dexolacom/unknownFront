import useMediaQuery from '@/hooks/use-media-query';
import ButtonBloody from '../button-bloody/button-bloody';
interface IButtonUnearth {
  className?: string;
}
export default function ButtonUnearth({
  className,
}: IButtonUnearth): JSX.Element {
  const { isMobile, isTablet } = useMediaQuery();

  const textLines = isMobile
    ? ['Unearth Your', 'True Self']
    : ['Unearth', 'Your True', 'Self'];
  return (
    <ButtonBloody
      href="#"
      textLines={textLines}
      className={className}
      size={isMobile ? 3 : isTablet ? 4 : 3}
    ></ButtonBloody>
  );
}
