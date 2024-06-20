import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, ProductCheckout } from './components'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Verification from './components/SignUp/Verification'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

// The "createBrowserRouter" function, allows you to define the paths and specify which component to render when the application is at a particular path.
const router = createBrowserRouter(

  createRoutesFromElements(
    <>
      <Route path="/" element={
        <Provider store={store}>
          {/* You need to wrap the components inside react-redux "Provider" who wants access to the store data. */}
          {/* The store object (exported from a file named store.js) is passed to the store prop of the Provider. This connects the Redux store to your React application. */}
          <Layout />
        </Provider>
      }>

        {/* Nesting or Children Components Rendering */}
        {/* All these children routes (componets) are render inside the <Outlet>, we placed in Layout.jsx. */}

        {/* Home Page */}
        <Route index element={<Home />}></Route>

        {/* Products Checkout Page */}
        <Route path="checkout" element={<ProductCheckout />}></Route>
      </Route >,

      {/* Sign In Page */}
      <Route path='/signin' element={
        <Provider store={store}>
          <SignIn />
        </Provider>
      }></Route>

      {/* Sign Up Page */}
      <Route path='/signup' element={
        <Provider store={store}>
          <SignUp />
        </Provider>
      }></Route>

      {/* Sign Up - Verification Page */}
      <Route path='/verification' element={
        <Provider store={store}>
          <Verification />
        </Provider>
      }></Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* The Router Provider is responsible for providing routing-related information and functionalities to all components within your React application. It accepts a 'router' property, that specifying the routes or paths of different components. */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
