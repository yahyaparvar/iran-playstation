/**
 *
 * Home
 *
 */

import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";

import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import { homeActions, homeReducer, sliceKey } from "./slice";
import { homeSaga } from "./saga";
import { homeSelectors } from "./selectors";
import PSNCard from "./components/card";
import { Wrapper } from "./styles";

interface Props {}

export function Home(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: homeReducer });
  useInjectSaga({ key: sliceKey, saga: homeSaga });
  const products = useSelector(homeSelectors.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeActions.getProducts());
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  return (
    <Wrapper>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      {products &&
        products.map((product) => (
          <PSNCard
            country={product.country}
            action="خرید"
            title={product.country}
            description={product.description}
            image={product.image}
            key={product.id}
          />
        ))}
    </Wrapper>
  );
}
