/**
*
* Signup
*
*/

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
 

import { useInjectReducer, useInjectSaga } from 'store/redux-injectors';
import { signupReducer, sliceKey } from './slice';
import { selectSignup } from './selectors';
import { signupSaga } from './saga';

interface Props {}


export function Signup(props: Props) {
useInjectReducer({ key: sliceKey, reducer: signupReducer });
  useInjectSaga({ key: sliceKey, saga: signupSaga });

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signup = useSelector(selectSignup);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const dispatch = useDispatch();


return (
<>
  <Helmet>
    <title>Signup</title>
    <meta name="description" content="Description of Signup" />
  </Helmet>
     <div>
  </div>
</>
);

};
