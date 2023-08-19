import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from "./slice";

export const homeDomains = {
  root: (state: RootState) => state?.home || initialState,
  products: (state: RootState) => state?.home?.products,
};

export const homeSelectors = {
  root: createSelector(homeDomains.root, (root) => root),
  products: createSelector(homeDomains.products, (products) => products),
};
