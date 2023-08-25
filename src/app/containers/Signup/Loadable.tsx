/**
*
* Asynchronously loads the component for Signup
*
*/
import React from 'react';
import { lazyLoad } from 'common/loadable';
import { PageLoading } from 'app/components/common/pageLoading';

export const Signup = lazyLoad(() => import('./index'), module => module.Signup, {fallback: <PageLoading />,},);