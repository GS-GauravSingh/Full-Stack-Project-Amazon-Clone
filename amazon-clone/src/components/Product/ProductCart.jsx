import React from 'react'
import DisplayStarRating from '../StarRating/DisplayStarRating';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/productSlice';

function ProductCart({ id, title, price, image, rating }) {


    // 'useDispatch()' is a hook provided by Redux. This hook gives you access to the `dispatch` function from the Redux store, which you can use to dispatch actions that update the Redux store's state.
    const dispatch = useDispatch();

    // This function takes care of, what to do when the user clicks on the 'Add to Cart' button.
    function handleSubmit() {

        // `dispatch` is function that uses a reducer function (in this case `removeFromCart`) to make changes to the data stored in a redux store. The reducer function can take a payload as part of the action object as input. The payload typically contains the data necessary to perform the state update.
        dispatch(removeFromCart(id));

        /*
        When you call "dispatch(removeFromCart(id));;", the 'removeFromCart' action creator generates an action object that looks like this:
        {
            type: 'products/removeFromCart',
            payload: id
        }

        Here's the breakdown of above code:
        1. type: `products` indicates the slice name, `removeFromCart` indicate the reducer functions used to makes changes to the data.
        2. payload: Contains the additional data necessary to perform the action. In this case, it holds the value of `todoMsg`.
        */
    }

    return (
        <>
            <div className='p-2.5 flex flex-col sm:flex-row gap-2 bg-white max-h-fit min-h-[220px] max-w-[900px]'>

                {/* Container for Product Image */}
                <div className='flex justify-center w-full h-[210px] sm:flex-grow sm:flex-shrink sm:basis-60'>
                    <img src={image} className='object-contain' />
                </div>

                {/* Container for Product Details */}
                <div className='flex flex-col justify-between sm:flex-grow sm:flex-shrink sm:basis-96'>
                    {/* Title, Price and Rating */}
                    <div>
                        <p className='max-h-fit'> {title} </p>
                        <p className='mt-1'> <strong> ₹ {price} </strong> </p>
                        <DisplayStarRating star={rating} />
                    </div>

                    {/* Remove from Cart Button */}
                    <div className='bg-yellow-400 hover:bg-amber-400 text-center text-black font-semibold rounded-md mt-2'>
                        <button className='w-full p-2 border-none outline-none' onClick={() => { handleSubmit() }}> Remove from Cart </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCart