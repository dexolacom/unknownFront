import DefaultPageTemplate from '@/components/layouts/default-page-layout';
import FaqList from '@/components/blocks/faq-list/faq-list';
import FaqTitle from '@/components/blocks/faq-title/faq-title';
export default function Faq() {
  return (
    <DefaultPageTemplate title="FAQ">
      <FaqTitle />
      <FaqList />
    </DefaultPageTemplate>
  );
}
