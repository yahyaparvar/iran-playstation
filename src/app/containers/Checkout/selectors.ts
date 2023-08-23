import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state?.checkout || initialState;

export const selectCheckout = createSelector(
  [selectDomain],
  checkoutState => checkoutState,
);
