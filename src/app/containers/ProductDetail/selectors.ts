import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";

const productDetailDoimains = {
  root: (state: RootState) => state?.productDetail,
  productDetail: (state: RootState) => state?.productDetail?.product?.details,
  isProductDetailLoading: (state: RootState) =>
    state?.productDetail?.product?.loading,
};
export const productDetailSelectors = {
  root: createSelector(productDetailDoimains.root, (root) => root),
  productDetail: createSelector(
    productDetailDoimains.productDetail,
    (productDetail) => productDetail
  ),
  isProductDetailLoading: createSelector(
    productDetailDoimains.isProductDetailLoading,
    (isProductDetailLoading) => isProductDetailLoading
  ),
};
