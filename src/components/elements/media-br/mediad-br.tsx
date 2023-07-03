import styles from './media-br.module.scss';
styles as {
  'd-max-md': string;
  'd-max-xl': string;
  'd-min-md': string;
  'd-min-xl': string;
  'd-min-md-max-xl': string;
};
type MediaBrProps =
  | {
      max: 'md';
    }
  | {
      max: 'xl';
    }
  | { min: 'md' }
  | { min: 'xl' }
  | {
      min: 'md';
      max: 'xl';
    }
  | {
      min: 'xl';
      max: 'md';
    };
export default function MediaBr(props: MediaBrProps) {
  const min = 'min' in props ? props.min : undefined;
  const max = 'max' in props ? props.max : undefined;
  if (min && max) return <br className={styles[`d-min-${min}-max-${max}`]} />;
  if (min) {
    return <br className={styles[`d-min-${min}`]} />;
  }
  if (max) {
    return <br className={styles[`d-max-${max}`]} />;
  }
  return null;
}
