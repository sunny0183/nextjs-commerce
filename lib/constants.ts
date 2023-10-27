export const PromoWithImageCollections = [
  {
    name: "Women's",
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg',
    imageAlt: 'Woman wearing an off-white cotton t-shirt.'
  },
  {
    name: "Men's",
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg',
    imageAlt: 'Man wearing a charcoal gray cotton t-shirt.'
  },
  {
    name: 'Desk Accessories',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg',
    imageAlt: 'Person sitting at a wooden desk with paper note organizer, pencil and tablet.'
  }
];

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';
