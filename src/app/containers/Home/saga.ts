import { call, put, takeLatest } from "redux-saga/effects";
// import { actions } from './slice';

import { homeActions } from "./slice";
import { axiosNoAuth } from "services/API";
import { AxiosResponse } from "axios";

export function* getProducts() {
  const { data }: AxiosResponse = yield call(axiosNoAuth.get, "/products");
  yield put(homeActions.setProducts(data));
}

export function* homeSaga() {
  yield takeLatest(homeActions.getProducts.type, getProducts);
}
