import React from 'react'
import DisplayStarRating from './DisplayStarRating';

function Product(props) {

    const productTitle = props.title;
    const productPrice = props.price;
    const productImage = props.image;
    const productRating = props.rating;


    return (
        <div className='flex-grow flex-shrink basis-72'>
            {/* Product Card */}
            <div className='z-10 bg-white p-2'>

                {/* Product Title */}
                <div className='flex flex-col'>

                    {/* Title, Price and Rating */}
                    <div>
                        <p className='max-h-fit min-h-16'> {productTitle} </p>
                        <p className='mt-1'> <strong> ₹{productPrice} </strong> </p>
                        <DisplayStarRating star={productRating} />
                    </div>

                    {/* Product Image */}
                    <div className='flex justify-center my-4'>
                        <div className='flex h-72'>
                            <img src={productImage} className='w-full object-contain' />
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className='bg-orange-500 text-center text-white font-semibold rounded-md mt-2'>
                        <button className='w-full p-2 border-none outline-none'>Add to Cart</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Product;