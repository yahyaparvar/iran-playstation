interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  country: string;
}

export interface HomeState {
  products: Product[];
}

export type ContainerState = HomeState;
