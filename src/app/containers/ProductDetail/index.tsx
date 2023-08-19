/**
 *
 * ProductDetail
 *
 */

import React, { memo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";

import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import { product_detailReducer, sliceKey } from "./slice";
import { selectProductDetail } from "./selectors";
import { productDetailSaga } from "./saga";

interface Props {}

export const ProductDetail = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: product_detailReducer });
  useInjectSaga({ key: sliceKey, saga: productDetailSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const productDetail = useSelector(selectProductDetail);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>ProductDetail</title>
        <meta name="description" content="Description of ProductDetail" />
      </Helmet>
      <div></div>
    </>
  );
});
