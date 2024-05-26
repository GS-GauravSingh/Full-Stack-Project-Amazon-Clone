import React from "react";

// Creating Context Object using `createContext()` - This context object will hold the data that you want to share across your application. Note: `createContext()` function also accepts a default value as an argument. 

const ProductContext = React.createContext();

// Now, export the context object so that we can use it in other parts of our application.
export default ProductContext;


