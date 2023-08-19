import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.productDetail || initialState;

export const selectProductDetail = createSelector(
  [selectDomain],
  productDetailState => productDetailState,
);
