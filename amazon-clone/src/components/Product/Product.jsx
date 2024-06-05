import React from 'react'
import DisplayStarRating from '../StarRating/DisplayStarRating';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/productSlice';


function Product({id, title, price, image, rating }) {

    // 'useDispatch()' is a hook provided by Redux. This hook gives you access to the `dispatch` function from the Redux store, which you can use to dispatch actions that update the Redux store's state.
    const dispatch = useDispatch();

    // This function takes care of, what to do when the user clicks on the 'Add to Cart' button.
    function handleSubmit() {

        const newProductDetails = {
            productID: id,
            productTitle: title,
            productPrice: price,
            productImage: image,
            productRating: rating
        };

        // `dispatch` is function that uses a reducer function (in this case `addToCart`) to make changes to the data stored in a redux store. The reducer function can take a payload as part of the action object as input. The payload typically contains the data necessary to perform the state update.
        dispatch(addToCart(newProductDetails));

        /*
        When you call "dispatch(addToCart(newProductDetails));", the 'addToCart' action creator generates an action object that looks like this:
        {
            type: 'products/addToCart',
            payload: newProductDetails
        }

        Here's the breakdown of above code:
        1. type: `products` indicates the slice name, `addToCart` indicate the reducer functions used to makes changes to the data.
        2. payload: Contains the additional data necessary to perform the action. In this case, it holds the value of `todoMsg`.
        */
    }

    return (
        <div className='flex-grow flex-shrink basis-72' >

            {/* Product Card */}
            <div className='z-10 bg-white p-2 max-h-fit min-h-[400px] flex flex-col justify-between'>

                {/* Product Image, Title and Price Container. */}
                <div className=''>

                    {/* Title, Price and Rating */}
                    <div>
                        <p className='max-h-fit'> {title} </p>
                        <p className='mt-1'> <strong> ₹ {price} </strong> </p>
                        <DisplayStarRating star={rating} />
                    </div>

                    {/* Product Image */}
                    <div className='my-4'>
                        <div className='flex justify-center h-48'>
                            <img src={image} className='object-contain' />
                        </div>
                    </div>
                </div>

                {/* Add to Cart Button */}
                <div className='bg-yellow-400 hover:bg-amber-400 text-center text-black font-semibold rounded-md mt-2'>
                    <button className='w-full p-2 border-none outline-none' onClick={() => { handleSubmit(); }}> Add to Cart </button>
                </div>


            </div>

        </div>
    )
}

export default Product;