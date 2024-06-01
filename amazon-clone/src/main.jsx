import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, ProductCheckout } from './components'
import ProductContextProvider from './context/ProductContext/ProductContextProvider'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'

// The "createBrowserRouter" function, allows you to define the paths and specify which component to render when the application is at a particular path.
const router = createBrowserRouter(

  createRoutesFromElements(
    <>
      <Route path="/" element={
        <ProductContextProvider>
          {/* Wrapping the Layout component inside context provider allow the Layout components and all the components that are rendering inside Layout can access the context data. */}
          <Layout />
        </ProductContextProvider>
      }>

        {/* Nesting or Children Components Rendering */}
        {/* All these children routes (componets) are render inside the <Outlet>, we placed in Layout.jsx. */}

        {/* Home Page */}
        <Route index element={<Home />}></Route>

        {/* Products Checkout Page */}
        <Route path="checkout" element={<ProductCheckout />}></Route>
      </Route >,

      {/* Sign In Page */}
      <Route path='/signin' element={<SignIn />}></Route>
      
      {/* Sign Up Page */}
      <Route path='/signup' element={<SignUp />}></Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* The Router Provider is responsible for providing routing-related information and functionalities to all components within your React application. It accepts a 'router' property, that specifying the routes or paths of different components. */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)


// {/* You need to wrap the `RouterProvider` inside the `ProductContextProvider` to ensure that all components within the router can access the context. If you only want specific routes (like Product and Home) to access the context, you can wrap only those routes with the ProductContextProvider. */ }

// {/* Inside this Home and Product Checkout component can access the context data. */ }
