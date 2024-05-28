import React, { useEffect } from "react";
import useProductContext from "./useProductContext";

function saveProductContextSateInBrowserLocalStorage() {

    const { cart, setCart } = useProductContext();

    

    // Using Browser's Local Storage for storing the Context Data from preserving state when browser refresehes.
    useEffect(function () {
        // Convert the array to a string and save it to localStorage
        // It accepts key and value pair in string format.
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
}

export default saveProductContextSateInBrowserLocalStorage;