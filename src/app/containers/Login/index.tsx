/**
 *
 * Login
 *
 */

import React from "react";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";

import { useInjectReducer, useInjectSaga } from "store/redux-injectors";
import { loginReducer, sliceKey } from "./slice";
import { selectLogin } from "./selectors";
import { loginSaga } from "./saga";

interface Props {}

export function Login(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: loginReducer });
  useInjectSaga({ key: sliceKey, saga: loginSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const login = useSelector(selectLogin);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <div>
        <h1>Login</h1>
      </div>
    </>
  );
}
