/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState } from './types';
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { checkoutSaga } from './saga';

// The initial state of the Checkout container
export const initialState: ContainerState = {};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions:checkoutActions, reducer:checkoutReducer, name: sliceKey } = checkoutSlice;

export const usecheckoutSlice=()=>{
useInjectReducer({ key: sliceKey, reducer: checkoutReducer });
useInjectSaga({ key: sliceKey, saga: checkoutSaga });
return { checkoutActions }
}