/**
 *
 * ProductDetail
 *
 */

import React, { memo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";

import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import {
  product_detailActions,
  product_detailReducer,
  sliceKey,
} from "./slice";

import { productDetailSaga } from "./saga";
import { useParams } from "react-router-dom";
import { productDetailSelectors } from "./selectors";
import { globalActions, useGlobalSlice } from "store/slice";

interface Props {}

export const ProductDetail = memo((props: Props) => {
  useGlobalSlice();
  useInjectReducer({ key: sliceKey, reducer: product_detailReducer });
  useInjectSaga({ key: sliceKey, saga: productDetailSaga });
  const isLoading = useSelector(productDetailSelectors.isProductDetailLoading);
  const product = useSelector(productDetailSelectors.productDetail);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(product_detailActions.getProductDetail({ id }));
    }
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <>
      <Helmet>
        <title>ProductDetail</title>
        <meta name="description" content="Description of ProductDetail" />
      </Helmet>
      {isLoading
        ? "loading"
        : product && (
            <>
              <div>{product?.name}</div>
              <button
                onClick={() => {
                  dispatch(globalActions.addToCart(product));
                }}
              >
                Add to cart
              </button>
            </>
          )}
    </>
  );
});
