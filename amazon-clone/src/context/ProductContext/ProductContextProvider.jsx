// To create a "context provider", you just need to wrap all the components who wants access to shared data inside the context object you have created.
import React from "react";
import ProductContext from "./ProductContext";
import { useState } from "react";

// We need to wrap components, that's we we have to create function tht returns jsx code.

// Creating Context Provider.
// "children" - "children" is nothing but a react component that needs access to shared data. [Note: don't try to modify the name 'children', it will introduce some unknown bugs.]
function ProductContextProvider({children}){

    // Creating state variable to store product details.
    // What I am going to do is, when a user click on `add to cart` button, I am going to store all the data(product image, title, price and rating) in an object and then push that object into this context. So, that I can access this information in the product checkout component. So, `cart` is going to be an array of objects. Initially, it's an empty array.
    const [cart, setCart] = useState([])

    return(
        
        // The Provider component must include a "value" prop to provide the data that other components will access. Without the "value" prop, the context would not have any data to share with its descendant components.

        // "value" prop accepts an object - you can pass an object containing all the values you want to share. 
        <ProductContext.Provider value={{ cart, setCart }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;