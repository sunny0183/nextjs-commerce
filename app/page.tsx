import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import PromoWithImage from 'components/promo-with-image';
import PromoWithImageTiles from 'components/promo-with-image-tiles';
import { EdgeOrNode } from 'lib/utils';
import { Suspense } from 'react';

export const runtime = EdgeOrNode();

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <PromoWithImageTiles />
      <PromoWithImage />
      <ThreeItemGrid />
      <Suspense>
        <Carousel />
        <Suspense>
          <Footer />
        </Suspense>
      </Suspense>
    </>
  );
}
