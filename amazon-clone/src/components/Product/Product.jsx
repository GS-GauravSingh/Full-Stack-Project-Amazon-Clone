import React from 'react'
import DisplayStarRating from '../StarRating/DisplayStarRating';

function Product({ title, price, image, rating, addOrRemoveToCart }) {

    return (
        <div className='flex-grow flex-shrink basis-72' >
            {/* Product Card */}
            <div className='z-10 bg-white p-2'>

                {/* Product Title */}
                <div className='flex flex-col'>

                    {/* Title, Price and Rating */}
                    <div>
                        <p className='max-h-fit min-h-16'> {title} </p>
                        <p className='mt-1'> <strong> ₹ {price} </strong> </p>
                        <DisplayStarRating star={rating} />
                    </div>

                    {/* Product Image */}
                    <div className='flex justify-center my-4'>
                        <div className='flex h-72'>
                            <img src={image} className='w-full object-contain' />
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className='bg-orange-500 text-center text-white font-semibold rounded-md mt-2'>
                        <button className='w-full p-2 border-none outline-none'> {addOrRemoveToCart} </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Product;