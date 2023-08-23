import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from "./slice";

export const globalDomains = {
  root: (state: RootState) => state?.global || initialState,
  cart: (state: RootState) => state?.global?.cart,
};

export const globalSelectors = {
  root: createSelector(globalDomains.root, (root) => root),
  cart: createSelector(globalDomains.cart, (cart) => cart),
  cartSummary: createSelector(globalDomains.cart, (cart) => {
    if (cart && cart.length > 0) {
      const totalItems = cart.reduce((acc: any, item: any) => {
        return acc + item.quantity;
      }, 0);
      const totalAmount = cart.reduce((acc: any, item: any) => {
        return acc + item.price * item.quantity;
      }, 0);
      return {
        totalItems,
        totalAmount,
      };
    } else {
      return {
        totalItems: 0,
        totalAmount: 0,
      };
    }
  }),
};
