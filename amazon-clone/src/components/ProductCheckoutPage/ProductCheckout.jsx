import React from 'react'
import SubTotal from '../SubTotal/SubTotal'
import { Link } from 'react-router-dom'
import ProductCart from '../Product/ProductCart'
import { useSelector } from 'react-redux'

function ProductCheckout() {

    // `useSelector()` is a hook provided by the React-Redux library that allows functional components to extract data from the Redux store. `useSelector()` has access to the state - the current state of redux store. 
    const cart = useSelector((state) => state.products.cart);

    return (
        <>
            {/* Parent Container */}
            <div className='flex justify-center ml-auto mr-auto max-w-screen-2xl'>

                {/* This 'div' containes - Banner Images and Shopping Basket Container. */}
                <div className=''>

                    {/* Banner Image */}
                    <div className='w-full object-cover'>
                        <img src="https://m.media-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/4gpro-1500x300_New._CB557616501_.jpg" className='w-full' />
                    </div>

                    {/* Titla and Subtotal */}
                    <div className='bg-white pb-4'>

                        {/* Title */}
                        <div className='pl-4 border-b p-2 font-medium ' style={{ backgroundColor: "#F7F7F7" }}>
                            <span className='cursor-default'>Shopping Cart</span>
                            <Link to="/" className='ml-4'>
                                Buy Again
                            </Link>
                        </div>

                        {/* Subtotal */}
                        <div className='mt-4 px-2'>
                            <SubTotal />
                        </div>
                    </div>

                    {/* Parent Container for Cart Items. */}
                    <div className='bg-gray-200 flex flex-col gap-4 pt-4'>

                        {/* <ProductCart title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" /> */}

                        {/* Rendering Products added to cart. */}
                        {
                            cart.map(function (cartItem) {
                                
                                // 'cartItem' is a Object.
                                return (
                                    <div key={cartItem.productID}>
                                        <ProductCart id={cartItem.productID} title={cartItem.productTitle} price={cartItem.productPrice} image={cartItem.productImage} rating={cartItem.productRating} />
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductCheckout