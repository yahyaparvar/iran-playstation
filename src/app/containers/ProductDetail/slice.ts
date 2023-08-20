/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from "@reduxjs/toolkit";
import { ContainerState } from "./types";
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { productDetailSaga } from "./saga";
import { Product } from "../Home/types";

// The initial state of the ProductDetail container
export const initialState: ContainerState = {
  product: { details: undefined, loading: false },
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetail(state, action: PayloadAction<{ id: string }>) {},
    setProductDetail(state, action: PayloadAction<Product>) {
      state.product.details = action.payload;
    },
    setProductLoading(state, action: PayloadAction<boolean>) {
      state.product.loading = action.payload;
    },
  },
});

export const {
  actions: product_detailActions,
  reducer: product_detailReducer,
  name: sliceKey,
} = productDetailSlice;

export const useproduct_detailSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: product_detailReducer });
  useInjectSaga({ key: sliceKey, saga: productDetailSaga });
  return { product_detailActions };
};
