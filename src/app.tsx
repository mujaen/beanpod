import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'

import axios from 'axios'

import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'

import { QueryClientProvider, QueryClient, QueryFunctionContext } from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { CustomThemeProvider } from '#styles/themeProvider'

import Frame from '#components/Layout/Frame'
import Spinner from '#components/Spinner'

const Dashboard = lazy(() => import('#pages/Dashboard'))
const User = lazy(() => import('#pages/User'))
const UserView = lazy(() => import('#pages/User/View'))
const Payment = lazy(() => import('#pages/Payment'))
const History = lazy(() => import('#pages/History'))
const Member = lazy(() => import('#pages/Member'))
const Support = lazy(() => import('#pages/Support'))
const Message = lazy(() => import('#pages/Message'))
const Self = lazy(() => import('#pages/Self'))
const Administrator = lazy(() => import('#pages/Administrator'))
const Join = lazy(() => import('#pages/Join'))
const Login = lazy(() => import('#pages/Login'))

export const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  if (queryKey[1] && typeof queryKey[1] !== 'object') throw Error('query second key must be object')
  const key = queryKey[0]
  const params = Object.entries(queryKey[1] || {})
    .filter(param => param[1])
    .reduce((acc: { [key: string]: any }, cur) => {
      acc[cur[0]] = cur[1]
      return acc
    }, {})

  try {
    const { data } = await axios.get(`${key}`, {
      params,
    })

    return data
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
    }
  }
}
const rootNode = document.getElementById('app')!

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      retry: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(rootNode).render(
  <QueryClientProvider client={queryClient}>
    {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    <CustomThemeProvider>
      <BrowserRouter>
        <Frame>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/user/list" component={User} />
              <Route path="/user/:id" component={UserView} />
              <Route path="/payment/list" component={Payment} />
              <Route path="/self/list" component={Self} />
              <Route path="/history/list" component={History} />
              <Route path="/acount/list" component={Administrator} />
              <Route path="/support/list" component={Support} />
              <Route path="/member/list" component={Member} />
              <Route path="/message/list" component={Message} />
              <Route path="/join" component={Join} />
              <Route path="/login" component={Login} />
              <Redirect from="*" to="/" />
            </Switch>
          </Suspense>
        </Frame>
      </BrowserRouter>
    </CustomThemeProvider>
  </QueryClientProvider>,
)
