import { useContext } from "react";
import ProductContext from "./ProductContext";

// Creating a custom hook -  This custom hook, `useProductContext`, makes it easier to access the `ProductDetailsContext`.
// Instead of importing the context manually and using `useContext()` in each component to access the context data, `useProductContext` does it for you. You just call `useProductContext()` hook in your component, and it gives you access to the context data from context provider.
export default function useProductContext(){
    return useContext(ProductContext);
}