import React, { useEffect, useId } from 'react'
import DisplayStarRating from '../StarRating/DisplayStarRating';
import useProductContext from '../../context/ProductContext/useProductContext'

function Product({ title, price, image, rating }) {

    // Each product has its own unique ID.
    const id = useId();

    // Using ProductContext to store data when user click on `add to cart` button.
    const { addToCart } = useProductContext();

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
                    <button className='w-full p-2 border-none outline-none' onClick={() => {
                        const newProductDetails = {
                            productID: id,
                            productTitle: title,
                            productPrice: price,
                            productImage: image,
                            productRating: rating

                        };
                        addToCart(newProductDetails);
                    }}> Add to Cart </button>
                </div>


            </div>

        </div>
    )
}

export default Product;