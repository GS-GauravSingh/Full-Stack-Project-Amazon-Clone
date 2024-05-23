import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, ProductCheckout } from './components'

// The "createBrowserRouter" function, allows you to define the paths and specify which component to render when the application is at a particular path.
const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      {/* Nesting or Children Components Rendering */}
      {/* All these children routes (componets) are render inside the <Outlet>, we placed in Layout.jsx. */}

      {/* Home Page */}
      <Route path="" element={<Home />}></Route>

      {/* Products Checkout Page */}
      <Route path="checkout" element={<ProductCheckout />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* The Router Provider is responsible for providing routing-related information and functionalities to all components within your React application. It accepts a 'router' property, that specifying the routes or paths of different components. */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
