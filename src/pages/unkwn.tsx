import ComingSoon from '@/components/blocks/coming-soon/coming-soon';
import DefaultPageLayout from '@/components/layouts/default-page-layout';

export default function UnkwnPage() {
  return (
    <DefaultPageLayout title="UNKWN WORLD" showFooter={false}>
      <ComingSoon />
    </DefaultPageLayout>
  );
}
