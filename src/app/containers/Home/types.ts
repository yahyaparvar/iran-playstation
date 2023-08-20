export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  country: string;
  slug: string;
}

export interface HomeState {
  products: Product[];
}

export type ContainerState = HomeState;
