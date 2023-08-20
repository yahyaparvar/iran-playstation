// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { actions } from './slice';

import { put, takeLatest } from "redux-saga/effects";
import { globalActions } from "./slice";
import { LocalStorageKeys, storage } from "./storage";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "app/containers/Home/types";

function* getCart() {
  const cart: Product[] | undefined = yield storage.read(LocalStorageKeys.CART);
  if (cart) {
    yield put(globalActions.setCart(cart));
    console.log(cart);
  }
  if (!cart) {
    storage.write(LocalStorageKeys.CART, []);
    yield put(globalActions.setCart([]));
  }
}
function* addToCart(action: PayloadAction<Product>) {
  const cart: Product[] | undefined = yield storage.read(LocalStorageKeys.CART);
  if (!cart) {
    storage.write(LocalStorageKeys.CART, [action.payload]);
  } else if (cart) {
    const newCart = [...cart, action.payload];
    storage.write(LocalStorageKeys.CART, newCart);
  }
}
function* removeFromCart(action: PayloadAction<Product>) {
  const cart: Product[] | undefined = yield storage.read(LocalStorageKeys.CART);
  if (!cart) {
    storage.write(LocalStorageKeys.CART, [action.payload]);
  } else if (cart) {
    const newCart = cart.filter(
      (item: Product) => item.id !== action.payload.id
    );
    storage.write(LocalStorageKeys.CART, newCart);
  }
}
export function* globalSaga() {
  yield takeLatest(globalActions.getCart.type, getCart);
  yield takeLatest(globalActions.addToCart.type, addToCart);
  yield takeLatest(globalActions.removeFromCart.type, removeFromCart);
}
