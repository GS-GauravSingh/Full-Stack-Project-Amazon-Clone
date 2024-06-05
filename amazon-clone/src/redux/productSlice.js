/*
Naming Convention: 

Using the "Slice" suffix in the file name, such as "todoSlice.js", is a common convention in Redux Toolkit projects. This naming convention helps developers quickly identify that Redux Toolkit is being used in the project, and specifically, that the file defines a Redux slice.
*/

// `createSlice` function is used to create a new slice.
import { createSlice } from '@reduxjs/toolkit'

// See, every slice has an initial state that represents how the slice looks like initially. You can define the initial state of a Redux slice as an object. 
const initialState = {

    cart: [

        // Temporary Object to understand the structure of object in which we are going to store the product details of an individual product. So, this cart, is going to be an array of objects.
        // {
        //     productID: 1,
        //     productTitle: "Title",
        //     productPrice: "1,29,999",
        //     productImage: "Contains URL of image",
        //     productRating: 4.5,
        // }
    ]
};

// Creating Slice - `createSlice()` function is used to create slice and it also accepts arguments.
export const productSlice = createSlice({

    // `name`: Specifies the name of the slice. This is used to identify the slice within the Redux store.
    name: "products",

    /*
    // See, every slice has an initial state and we have created this "initialState" above. 
    // We need to pass it here,  or if you want you can define initial state here also like this,
    initialState: {
        cart:[

            // Temporary Object to understand the structure of object in which we are going to store the product details of an individual product. So, this cart, is going to be an array of objects.
            {
                productID: 1,
                productTitle: "Title",
                productPrice: "1,29,999",
                productImage: "Contains URL of image", 
                productRating: 4.5, 
            }
        ]
    }
    */
    initialState,

    /*
        `reducers` are actually used to handle actions. Like: add product to cart or remove product from cart etc. These are simple javascript functions, we have to use if we want to make changes in the redux store.

        These `reducer functions` are also called as `actions`.
    */
    reducers: {

        /*
            In Redux, each reducer function has access to two arguments: `state` and `action`. 
            
            Where, `state` represents current state or condition of slice and `action` is an object that represent what changes need to be made in the current state of your application.
        */

        // Reducer Function or Action to add a product to the cart
        addToCart: function (state, action) {
            const newProductDetails = action.payload;
            state.cart.push(newProductDetails);
        },

        // Reducer Function or Action to remove a product from the cart
        removeFromCart: function (state, action) {

            const productID = action.payload;

            // Use `findIndex()` to get the index of the first product that matches the given productID.
            const productObjIdx = state.cart.findIndex((obj) => (obj.productID === productID));
            if (productObjIdx >= 0) {
                // Remove the product from cart.
                state.cart.splice(productObjIdx, 1);
            }
        }

    }
});

// Now you need to export the reducer function. By exporting the reducer functions using `productSlice.actions`, you make these functions available for use in other parts of your application.
export const { addToCart, removeFromCart } = productSlice.actions;

// Now, the Redux store does not update its slice data with any random function, you need to tell the store that these are the reducers functions that I am going to use to update or modify the data and after that the Redux store will allow these reducer function to make changes to slice data. 
// So, you need to import these reducers function in redux store file and make the necessary configuartions.
export default productSlice.reducer;