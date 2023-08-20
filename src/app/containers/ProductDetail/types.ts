import { Product } from "../Home/types";

/* --- STATE --- */
export interface ProductDetailState {
  product: {
    details: Product | undefined;
    loading: boolean;
  };
}

export type ContainerState = ProductDetailState;
