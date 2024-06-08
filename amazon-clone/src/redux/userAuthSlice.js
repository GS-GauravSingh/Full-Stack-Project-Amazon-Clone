/*
Naming Convention: 

Using the "Slice" suffix in the file name, such as "todoSlice.js", is a common convention in Redux Toolkit projects. This naming convention helps developers quickly identify that Redux Toolkit is being used in the project, and specifically, that the file defines a Redux slice.
*/

// `createSlice` function is used to create a new slice.
import { createSlice } from '@reduxjs/toolkit'

// See, every slice has an initial state that represents how the slice looks like initially. You can define the initial state of a Redux slice as an object. 
const initialState = {
    status: false, // status - represenst whether user is logged in (true) or not (false).
    userData: null,
};

// Creating Slice - `createSlice()` function is used to create slice and it also accepts arguments.
export const userAuthSlice = createSlice({

    // `name`: Specifies the name of the slice. This is used to identify the slice within the Redux store.
    name: "userAuth",

    initialState,

    reducers: {

        // Log in
        logIn: function(state, action){
            state.status = true;
            state.userData = action.payload;
        },

        // Log Out
        logOut: function(state){
            state.status = false;
            state.userData = null;
        }
    }
});

export const { logIn, logOut } = userAuthSlice.actions;
export default userAuthSlice.reducer;