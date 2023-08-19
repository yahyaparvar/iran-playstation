/**
*
* Asynchronously loads the component for ProductDetail
*
*/
import React from 'react';
import { lazyLoad } from 'common/loadable';
import { PageLoading } from 'app/components/common/pageLoading';

export const ProductDetail = lazyLoad(() => import('./index'), module => module.ProductDetail, {fallback: <PageLoading />,},);