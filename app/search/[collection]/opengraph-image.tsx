import OpengraphImage from 'components/opengraph-image';
import { getCollection } from 'lib/shopify';
import { EdgeOrNode } from 'lib/utils';

export const runtime = EdgeOrNode();

export default async function Image({ params }: { params: { collection: string } }) {
  const collection = await getCollection(params.collection);
  const title = collection?.seo?.title || collection?.title;

  return await OpengraphImage({ title });
}
