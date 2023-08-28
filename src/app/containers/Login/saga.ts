// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { actions } from './slice';

import { put, takeLatest } from "redux-saga/effects";
import { loginActions } from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";
import { axiosNoAuth } from "services/API";
import { LocalStorageKeys, storage } from "store/storage";
import { AxiosError, AxiosResponse } from "axios";

export function* login(
  action: PayloadAction<{ email: string; password: string }>
) {
  const { email, password } = action.payload;
  yield put(loginActions.setLoginLoading(true));
  try {
    const loginResponse: AxiosResponse = yield axiosNoAuth.post(
      "/users/login",
      {
        email,
        password,
      }
    );
    const userData = loginResponse.data.result;
    storage.write(LocalStorageKeys.AUTH, loginResponse.data.token);
    storage.write(LocalStorageKeys.USER, {
      id: userData._id,
      name: userData.name,
      email: userData.email,
      memberSince: userData.createdAt,
    });
  } catch (error: any) {
    if (error.response.status === 403) {
      yield put(loginActions.setLoginFailedMessage("No user found!"));
      
    } else if (error.response.status === 400) {
      yield put(loginActions.setLoginFailedMessage("Incorrect Password"));
    }
    yield put(loginActions.setLoginFailedMessage(error.response.data.message));
    console.log({ error: error.response.data.message });
  } finally {
    yield put(loginActions.setLoginLoading(false));
  }
}

export function* loginSaga() {
  yield takeLatest(loginActions.login.type, login);
}
