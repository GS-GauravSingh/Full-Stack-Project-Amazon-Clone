import React from 'react'
import SubTotal from '../SubTotal/SubTotal'
import { Link } from 'react-router-dom'
import Product from '../Product/Product'

function ProductCheckout() {
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
                    <div className='bg-gray-200 flex flex-col gap-4 pt-4 md:flex-row md:flex-wrap'>

                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" addOrRemoveToCart="Remove From Cart" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductCheckout