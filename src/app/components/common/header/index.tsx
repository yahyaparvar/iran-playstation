import React, { useEffect } from "react";
import { Wrapper } from "./styles";
import { globalActions, useGlobalSlice } from "store/slice";
import { useDispatch, useSelector } from "react-redux";
import { globalSelectors } from "store/selectors";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import history from "router/history";
import { AppPages } from "app/types";
import { CartProduct } from "app/containers/Home/types";
export const Header = () => {
  useGlobalSlice();
  const dispatch = useDispatch();
  const cart = useSelector(globalSelectors.cart);
  const cartSummary = useSelector(globalSelectors.cartSummary);
  useEffect(() => {
    dispatch(globalActions.getCart());
    console.log({ cartSummary });
  }, []);
  const handleOnClick = () => {
    history.push(AppPages.Checkout);
  };
  return (
    <Wrapper>
      Header
      <IconButton onClick={handleOnClick}>
        <AddShoppingCartIcon></AddShoppingCartIcon>
        {cartSummary?.totalItems}
      </IconButton>
    </Wrapper>
  );
};
