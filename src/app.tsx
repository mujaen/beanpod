import React from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";

import { BrowserRouter, Redirect, Switch, Route } from "react-router-dom";

import {
  QueryClientProvider,
  QueryClient,
  QueryFunctionContext,
} from "@tanstack/react-query";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Dashboard from "#pages/Dashboard";
import Login from "#pages/Login";

export const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  if (queryKey[1] && typeof queryKey[1] !== "object")
    throw Error("query second key must be object");
  const key = queryKey[0];
  const params = Object.entries(queryKey[1] || {})
    .filter((param) => param[1])
    .reduce((acc: { [key: string]: any }, cur) => {
      acc[cur[0]] = cur[1];
      return acc;
    }, {});

  try {
    const { data } = await axios.get(`${key}`, {
      params,
    });

    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};
const rootNode = document.getElementById("app")!;

const queryClient = new QueryClient({
  defalutOptions: {
    queries: {
      queryFn: defaultQueryFn,
      retry: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(rootNode).render(
  <QueryClientProvider client={queryClient}>
    {process.env.NODE_ENV === "development" && (
      <ReactQueryDevtools initialIsOpen={false} />
    )}
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </QueryClientProvider>
);
