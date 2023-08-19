/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState } from './types';
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { productDetailSaga } from './saga';

// The initial state of the ProductDetail container
export const initialState: ContainerState = {};

const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions:product_detailActions, reducer:product_detailReducer, name: sliceKey } = productDetailSlice;

export const useproduct_detailSlice=()=>{
useInjectReducer({ key: sliceKey, reducer: product_detailReducer });
useInjectSaga({ key: sliceKey, saga: productDetailSaga });
return { product_detailActions }
}