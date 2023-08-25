/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from '@reduxjs/toolkit';
import { ContainerState } from './types';
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { loginSaga } from './saga';

// The initial state of the Login container
export const initialState: ContainerState = {};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions:loginActions, reducer:loginReducer, name: sliceKey } = loginSlice;

export const useloginSlice=()=>{
useInjectReducer({ key: sliceKey, reducer: loginReducer });
useInjectSaga({ key: sliceKey, saga: loginSaga });
return { loginActions }
}