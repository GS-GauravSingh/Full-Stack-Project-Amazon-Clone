// To create a "context provider", you just need to wrap all the components who wants access to shared data inside the context object you have created.
import React, { useEffect } from "react";
import ProductContext from "./ProductContext";
import { useState } from "react";

// We need to wrap components, that's we we have to create function tht returns jsx code.

// Creating Context Provider.
// "children" - "children" is nothing but a react component that needs access to shared data. [Note: don't try to modify the name 'children', it will introduce some unknown bugs.]
function ProductContextProvider({ children }) {

    // Creating state variable to store product details.
    // What I am going to do is, when a user click on `add to cart` button, I am going to store all the data(product image, title, price and rating) in an object and then push that object into this context. So, that I can access this information in the product checkout component. So, `cart` is going to be an array of objects. Initially, it's an empty array.
    const [cart, setCart] = useState([])

    // Function to add product to cart.
    function addToCart(productDetailsObj) {
        setCart(function (prevCart) {
            return [...prevCart, productDetailsObj];
        })
    }

    // Function to remove Product from cart.
    function removeFromCart(productID) {
        setCart((prevCart) => {

            // Finding the first occurence of product havind id equals to productID.
            const firstOccurenceIndex = prevCart.findIndex(function (product) {
                return product.productID === productID;
            });

            // Removing that product from cart.
            const newCart = [...prevCart];
            if (firstOccurenceIndex >= 0) {
                // You can remove the element at any index by using the `splice` method.
                // Below code meaning - remove 'one' element present at index "firstOccurenceIndex".
                newCart.splice(firstOccurenceIndex, 1);
                // To remove an element at any index, you need to give splice two arguments: 
                // 1. the first argument is the index of the element to remove, 
                // 2. the second argument is the number of elements to remove.
            }

            return newCart;
        })
    }

    // Function that return cart length
    function cartLength() {
        return cart?.length;
    }

    // Accessing and Storing Context Data in the Browser's Local Storage.
    // Accessing data from the browser's local storage.
    useEffect(function () {

        // The 'localStorage' object allows you to save key/value pairs in the browser.
        // This actually stored data in the form of the string.
        // So, it returns data in the from of string, so we need to parse in into a JSON format (JSON can be in the form of array's).
        const productsArr = JSON.parse(localStorage.getItem("cart"));
        // 'productsArr' itself is an array of objects.

        if (productsArr.length > 0) {
            setCart(productsArr);
        }
    }, []);
    

    // Using Browser's Local Storage for storing the Context Data from preserving state when browser refresehes.
    useEffect(function(){

        // Convert the array of objects to a string and save it to localStorage
        // It accepts key and value pair in string format.
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [addToCart, removeFromCart])

    return (

        // The Provider component must include a "value" prop to provide the data that other components will access. Without the "value" prop, the context would not have any data to share with its descendant components.

        // "value" prop accepts an object - you can pass an object containing all the values you want to share. 
        <ProductContext.Provider value={{ cart, addToCart, removeFromCart, cartLength }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;