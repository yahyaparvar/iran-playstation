export interface Product {
  _id: any;
  name: string;
  description: string;
  image: string;
  country: string;
  slug: string;
  benefits: string[];
  howToUse: string[];
  priceRange: string;
}
export type CartProduct = Product & {
  price: number;
  quantity: number;
};
export interface HomeState {
  products: Product[];
}

export type ContainerState = HomeState;
