import ComingSoon from '@/components/blocks/coming-soon/coming-soon';
import DefaultPageLayout from '@/components/layouts/default-page-layout';

export default function MindmapPage() {
  return (
    <DefaultPageLayout title="UNKWN WORLD" showFooter={false}>
      <ComingSoon />
    </DefaultPageLayout>
  );
}
