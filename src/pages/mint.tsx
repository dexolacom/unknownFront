import DefaultPageLayout from '@/components/layouts/default-page-layout';
import MintCinema from '@/components/blocks/mint-cinema/mint-cinema';

export default function MintPage() {
  return (
    <DefaultPageLayout title="MINT" showFooter={false} showHeader={false}>
      <MintCinema />
    </DefaultPageLayout>
  );
}
