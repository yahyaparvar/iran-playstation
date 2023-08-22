import React, { useEffect } from "react";
import { Wrapper } from "./styles";
import { globalActions, useGlobalSlice } from "store/slice";
import { useDispatch, useSelector } from "react-redux";
import { globalSelectors } from "store/selectors";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
export const Header = () => {
  useGlobalSlice();
  const dispatch = useDispatch();
  const cart = useSelector(globalSelectors.cart);
  useEffect(() => {
    dispatch(globalActions.getCart());
    console.log("Header");
  }, []);
  return (
    <Wrapper>
      Header{" "}
      <IconButton>
        <AddShoppingCartIcon></AddShoppingCartIcon>
        {cart?.length}
      </IconButton>
    </Wrapper>
  );
};
