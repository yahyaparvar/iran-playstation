/* eslint-disable react-hooks/rules-of-hooks */
import { PayloadAction } from "@reduxjs/toolkit";
import { ContainerState, SignUpData } from "./types";
import { createSlice } from "store/toolkit";
import { useInjectReducer, useInjectSaga } from "store/redux-injectors";

import { signupSaga } from "./saga";

// The initial state of the Signup container
export const initialState: ContainerState = {
  loading: false,
  errorMessage: undefined,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signUp(state, action: PayloadAction<SignUpData>) {},
    signUpLoading(state, action: PayloadAction<any>) {
      state.loading = true;
    },
    setSignUpFailMessage(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  actions: signupActions,
  reducer: signupReducer,
  name: sliceKey,
} = signupSlice;

export const usesignupSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: signupReducer });
  useInjectSaga({ key: sliceKey, saga: signupSaga });
  return { signupActions };
};
