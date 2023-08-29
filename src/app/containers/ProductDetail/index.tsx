/**
 *
 * ProductDetail
 *
 */

import React, { memo, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
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
import { Button, MenuItem, Select } from "@mui/material";

interface Props {}

export const ProductDetail = memo((props: Props) => {
  useGlobalSlice();
  useInjectReducer({ key: sliceKey, reducer: product_detailReducer });
  useInjectSaga({ key: sliceKey, saga: productDetailSaga });
  const isLoading = useSelector(productDetailSelectors.isProductDetailLoading);
  const product = useSelector(productDetailSelectors.productDetail);
  const dispatch = useDispatch();
  const [selectedPrice, setPrice] = useState(0);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(product_detailActions.getProductDetail({ id }));
    }
  }, []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const prices = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
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
              <Button
                sx={{ color: "white" }}
                onClick={() => {
                  dispatch(
                    globalActions.addToCart({
                      _id: product._id,
                      name: product.name,
                      quantity: 1,
                      country: product.country,
                      description: product.description,
                      image: product.image,
                      price: selectedPrice,
                      slug: product.slug,
                    })
                  );
                }}
              >
                Add to cart
              </Button>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedPrice.toString()}
                label="price"
                defaultValue="10"
                onChange={(e) => {
                  setPrice(parseFloat(e.target.value.toString()));
                }}
              >
                {prices.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </>
          )}
    </>
  );
});
