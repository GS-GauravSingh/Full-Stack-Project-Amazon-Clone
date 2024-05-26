import React from 'react'
import DisplayStarRating from '../StarRating/DisplayStarRating';
import useProductContext from '../../context/ProductContext/useProductContext'

function ProductCart({ id, title, price, image, rating }) {


    // Acessing or Consuming the context to store data of product we have to remove from cart.
    // And after that we simply iterate through the cart and those products whose type is RemoveFromCart, we simply remove those products from cart.
    const { cart, setCart } = useProductContext();

    // Function to remove product from cart.
    function removeFromCart(event) {
        event.preventDefault();

        cart.forEach(function (item, idx) {
            if (item.productID === id) {
                // You can remove the element at any index by using the `splice` method.
                // Below code meaning - remove 'one' element present at index "idx".
                cart.splice(idx, 1);
                // To remove an element at any index, you need to give splice two arguments: 
                // 1. the first argument is the index of the element to remove, 
                // 2. the second argument is the number of elements to remove.

                // Update the Context.
                setCart([...cart]);
                return;
            }
        });
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
                        <button className='w-full p-2 border-none outline-none' onClick={removeFromCart}> Remove from Cart </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ProductCart