import { ProductDetailState } from "app/containers/ProductDetail/types";
import { CheckoutState } from "app/containers/Checkout/types";
import { SignupState } from 'app/containers/Signup/types';
import { LoginState } from 'app/containers/Login/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { HomeState } from "app/containers/Home/types";

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  global?: any;
  home?: HomeState;
  checkout: CheckoutState;
  productDetail: ProductDetailState;
  signup:SignupState
  login:LoginState
}
