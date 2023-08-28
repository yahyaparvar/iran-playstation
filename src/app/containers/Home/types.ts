export interface Product {
  _id: any;
  name: string;
  description: string;
  image: string;
  country: string;
  slug: string;
}
export type CartProduct = Product & {
  price: number;
  quantity: number;
};
export interface HomeState {
  products: Product[];
}

export type ContainerState = HomeState;
