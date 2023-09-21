import './index.css'

import isPropValid from '@emotion/is-prop-valid'
import React from 'react'
import ReactDOM from 'react-dom'
import { SkeletonTheme } from 'react-loading-skeleton'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StyleSheetManager } from 'styled-components'

import App from './App'
import { CartProvider } from './contexts/CartProvider'
import Checkout from './Pages/Checkout'
import ErrorPage from './Pages/ErrorPage'
import StoreMainFeed from './Pages/StoreMainFeed'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: '/',
        element: <StoreMainFeed />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
])

ReactDOM.render(
  <React.StrictMode>
    <SkeletonTheme>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </StyleSheetManager>
    </SkeletonTheme>
  </React.StrictMode>,
  document.getElementById('root'),
)
