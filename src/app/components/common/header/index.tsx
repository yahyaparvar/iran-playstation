import React, { useEffect } from "react";
import { Wrapper } from "./styles";
import { globalActions, useGlobalSlice } from "store/slice";
import { useDispatch } from "react-redux";

export const Header = () => {
  useGlobalSlice();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(globalActions.getCart());
    console.log("Header");
  }, []);
  return <Wrapper>Header</Wrapper>;
};
