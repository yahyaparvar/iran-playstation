// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { actions } from './slice';

import { call, put, takeLatest } from "redux-saga/effects";
import { product_detailActions } from "./slice";
import { axiosNoAuth } from "services/API";

export function* getProductDetail(
  action: ReturnType<typeof product_detailActions.getProductDetail>
) {
  try {
    yield put(product_detailActions.setProductLoading(true));
    const { data } = yield axiosNoAuth.get(`/products/${action.payload.id}`);
    yield put(product_detailActions.setProductDetail(data));
  } catch (error) {
    console.error({ error });
  } finally {
    yield put(product_detailActions.setProductLoading(false));
  }
}

export function* productDetailSaga() {
  yield takeLatest(
    product_detailActions.getProductDetail.type,
    getProductDetail
  );
}
