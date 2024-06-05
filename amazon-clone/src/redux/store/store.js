// Creating Redux Store
// `configureStore()` function is used to create a global store. So, we need to import it from redux toolkit.
import { configureStore } from '@reduxjs/toolkit'
import productReducers from '../productSlice';

// Global Store - Where we store all the data.
// Create a global store using `configureStore()` function and also export it so that we can use this store in other part of application.

// The `configureStore()` function in Redux Toolkit can accept an argument, which is an object containing various configuration options for your Redux store.
export const store = configureStore({

    // The `reducer` property is set to `productReducers`, which tells the store to use this reducer function is used update the store data.
    reducer: productReducers
});
