// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { actions } from './slice';

import { put, takeLatest } from "redux-saga/effects";
import { signupActions } from "./slice";
import { axiosNoAuth } from "services/API";
import { AxiosResponse } from "axios";
import { LocalStorageKeys, storage } from "store/storage";

export function* signUp(action: ReturnType<typeof signupActions.signUp>) {
  const data = action.payload;
  try {
    yield put(signupActions.signUpLoading(true));
    const response: AxiosResponse = yield axiosNoAuth.post(
      "/users/signup",
      data
    );
    const userData = response.data.result;
    storage.write(LocalStorageKeys.AUTH, response.data.token);
    storage.write(LocalStorageKeys.USER, {
      id: userData._id,
      name: userData.name,
      email: userData.email,
      memberSince: userData.createdAt,
    });
  } catch (error: any) {
    if (error.response.status === 401) {
      yield put(signupActions.setSignUpFailMessage("User already signed up"));
    } else if (error.response.status === 400) {
      yield put(signupActions.setSignUpFailMessage("Passwords don't match."));
    }
    yield put(signupActions.setSignUpFailMessage(error.response.data.message));
    console.log({ error: error.response.data.message });
  } finally {
    yield put(signupActions.signUpLoading(false));
  }
}

export function* signupSaga() {
  yield takeLatest(signupActions.signUp, signUp);
}
