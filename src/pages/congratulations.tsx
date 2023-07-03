import Congratulations from '@/components/blocks/congratulations/congratulations';
import DefaultPageLayout from '@/components/layouts/default-page-layout';

export default function CongratulationsPage() {
  return (
    <DefaultPageLayout title="Congratulations!" showFooter={false}>
      <Congratulations />
    </DefaultPageLayout>
  );
}
