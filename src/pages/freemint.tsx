import FaqList from '@/components/blocks/faq-list/faq-list';
import FaqTitle from '@/components/blocks/faq-title/faq-title';
import FreeMintHero from '@/components/blocks/freemint-hero/freemint-hero';
import DefaultPageLayout from '@/components/layouts/default-page-layout';

export default function FreemintPage() {
  return (
    <DefaultPageLayout title="UNKWN BONES">
      <FreeMintHero />
      <FaqTitle />
      <FaqList />
    </DefaultPageLayout>
  );
}
