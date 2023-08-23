/**
 *
 * Asynchronously loads the component for Checkout
 *
 */
import React from "react";
import { lazyLoad } from "common/loadable";
import { PageLoading } from "app/components/common/pageLoading";

export const Checkout = lazyLoad(
  () => import("./index"),
  (module) => module.Checkout,
  { fallback: <PageLoading /> }
);
