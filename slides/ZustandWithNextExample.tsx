import { Slide, Flex, CodePane, Heading } from 'spectacle';
import synthwave84 from 'react-syntax-highlighter/dist/esm/styles/prism/synthwave84';

export function ZustandWithNextExample() {
  return (
    <Slide className="full-width-slide overflow-auto">
      <Heading>Zustand i Next przykład CMS</Heading>
      <CodePane language="tsx" theme={synthwave84}>
        {`
          export default async function DraftPage({ params }: { params: { serviceId: string; draftId: string } }) {
            const draft = await draftActions.getDraftById(params.serviceId, params.draftId);

            return (
              <>
                <ArticlesDataSync serverData={draft} initialEditorData={{ serviceId: params.serviceId }} />
                <ArticlesHeader />
                <ArticlesSidebar />
                <ArticlesEditorContainer />
              </>
            );
          }
        `}
      </CodePane>
    </Slide>
  );
}
