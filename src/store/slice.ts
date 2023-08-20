import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "store/toolkit";
import { globalSaga } from "./saga";
import { useInjectReducer, useInjectSaga } from "./redux-injectors";
import { Product } from "app/containers/Home/types";
interface ContainerState {
  loggedIn: boolean;
  cart: Product[] | undefined;
}
// The initial state of the LoginPage container
export const initialState: ContainerState = {
  loggedIn: false,
  cart: undefined,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
      if (action.payload === false) {
        localStorage.clear();
      }
    },
    getCart(state) {},
    setCart(state, action: PayloadAction<Product[]>) {
      state.cart = [...action.payload];
    },
    addToCart(state, action: PayloadAction<Product>) {
      if (state.cart) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<Product>) {
      if (state.cart) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const {
  actions: globalActions,
  reducer: globalReducer,
  name: sliceKey,
} = globalSlice;

export const useGlobalSlice = () => {
  useInjectReducer({ key: sliceKey, reducer: globalReducer });
  useInjectSaga({ key: sliceKey, saga: globalSaga });
  return { globalActions };
};
