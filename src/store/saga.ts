// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { actions } from './slice';

import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { globalActions } from "./slice";
import { LocalStorageKeys, storage } from "./storage";
import { PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, Product } from "app/containers/Home/types";

function* getCart() {
  const cart: CartProduct[] | undefined = yield storage.read(
    LocalStorageKeys.CART
  );
  if (cart) {
    yield put(globalActions.setCart(cart));
  }
  if (!cart) {
    storage.write(LocalStorageKeys.CART, []);
    yield put(globalActions.setCart([]));
  }
}
function* addToCart(action: PayloadAction<CartProduct>) {
  const cart: CartProduct[] | undefined = yield storage.read(
    LocalStorageKeys.CART
  );

  let newCart: CartProduct[];

  if (!cart) {
    newCart = [action.payload];
  } else {
    const existingItemIndex = cart.findIndex(
      (item) =>
        item._id === action.payload._id && item.price === action.payload.price
    );

    if (existingItemIndex !== -1) {
      newCart = cart.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    } else {
      newCart = [...cart, action.payload];
    }
  }

  storage.write(LocalStorageKeys.CART, newCart);
  yield put(globalActions.getCart());
}

function* removeFromCart(action: PayloadAction<Product>) {
  const cart: CartProduct[] | undefined = yield storage.read(
    LocalStorageKeys.CART
  );
  if (!cart) {
    storage.write(LocalStorageKeys.CART, [action.payload]);
  } else if (cart) {
    const newCart = cart.filter(
      (item: Product) => item._id !== action.payload._id
    );
    storage.write(LocalStorageKeys.CART, newCart);
  }
}
export function* globalSaga() {
  yield takeEvery(globalActions.getCart.type, getCart);
  yield takeLatest(globalActions.addToCart.type, addToCart);
  yield takeLatest(globalActions.removeFromCart.type, removeFromCart);
}
