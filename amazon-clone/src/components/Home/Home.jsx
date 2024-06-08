import React from 'react'
import HomeCarousel from './HomeCarousel'
import Product from '../Product/Product'
import { useSelector } from 'react-redux'

function Home() {

    // `useSelector()` is a hook provided by the React-Redux library that allows functional components to extract data from the Redux store. `useSelector()` has access to the state - the current state of redux store. 
    const cart = useSelector((state) => state.products.cart);

    // Function to generate unique id from product.
    function generateUniqueID(){
        return cart?.length;
    }

    return (
        <main className='flex justify-center ml-auto mr-auto max-w-screen-2xl'>

            {/* Wrapper Container */}
            <div>

                {/* Banner Image Container */}
                <div className=''>
                    <HomeCarousel />
                </div>

                {/* Products Listing */}
                <div className='px-5 flex flex-col gap-4'>

                    {/* Products */}
                    <div className='flex flex-wrap gap-4'>

                        {/* Product */}
                        <Product id={generateUniqueID()} title="World's Greatest Books For Personal Growth & Wealth (Set of 4 Books)" price="349" image="https://m.media-amazon.com/images/I/71TqdH9wTmL._SL1500_.jpg" rating="4.5" />

                        {/* Product */}
                        <Product id={generateUniqueID()} title="The Psychology of Money – Deluxe Edition by Morgan Housel" price="399" image="https://m.media-amazon.com/images/I/71XEsXS5RlL._SL1500_.jpg" rating="4.5" />

                        {/* Product */}
                        <Product id={generateUniqueID()} title="Don't Believe Everything You Think (English) by Joseph Nguyen" price="180" image="https://m.media-amazon.com/images/I/715qi-cIbML._SL1500_.jpg" rating="4.5" />

                        {/* Product */}
                        <Product id={generateUniqueID()} title="The Mountain Is You: Transforming Self-Sabotage Into Self-Mastery" price="287" image="https://m.media-amazon.com/images/I/61xivWmExiL._SL1500_.jpg" rating="4.5" addOrRemoveToCart="Add to Cart" />

                        {/* Product */}
                        <Product id={generateUniqueID()} title="Values of Money + The Psychology of Money (Combo pack of 2 books)" price="695" image="https://m.media-amazon.com/images/I/61G2tocPrfL._SL1500_.jpg" rating="4" />

                        {/* Product */}
                        <Product id={generateUniqueID()} title="The Wealth Money Can't Buy: The 8 Hidden Habits to Live Your Richest Life" price="344" image="https://m.media-amazon.com/images/I/81M54bFUstL._SL1500_.jpg" rating="4.5" />

                    </div>

                    {/* Products */}
                    <div>

                        <Product id={generateUniqueID()} title="Samsung 49-inch(124.4cm) Odyssey OLED G9 Dual QHD, 240Hz, 0.03ms Curved Gaming Monitor, USB Hub, HAS, Neo Quantum Processor, Smart TV, AMD FreeSync Premium Pro (LS49CG950SWXXL, Black)" price="1,79,999" image="https://m.media-amazon.com/images/I/81nH13XWRHL._SX522_.jpg" rating="3.5" />

                    </div>

                    {/* Products */}
                    <div className='flex flex-wrap gap-4'>
                        <Product id={generateUniqueID()} title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" />

                        <Product id={generateUniqueID()} title="Samsung Galaxy Z Flip5 5G AI Smartphone (Cream, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/71rMdsTWkmL._SX679_.jpg" rating="4" />

                        <Product id={generateUniqueID()} title="Samsung Galaxy Z Flip5 5G AI Smartphone (Graphite, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/71U+YdsvMPL._SX679_.jpg" rating="4" />


                        <Product id={generateUniqueID()} title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 256GB Storage)" price="99,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" />

                        <Product id={generateUniqueID()} title="Samsung Galaxy Z Flip5 5G AI Smartphone (Cream, 8GB RAM, 256GB Storage)" price="99,999" image="https://m.media-amazon.com/images/I/71rMdsTWkmL._SL1500_.jpg" rating="4" />

                        <Product id={generateUniqueID()} title="Samsung Galaxy Z Flip5 5G AI Smartphone (Graphite, 8GB RAM, 256GB Storage)" price="99,999" image="https://m.media-amazon.com/images/I/71U+YdsvMPL._SX679_.jpg" rating="4" />

                    </div>

                    {/* Products */}
                    <div>
                        <Product id={generateUniqueID()} title="Samsung 57-inch(144.87cm) Odyssey Neo G9 Dual QHD, 240Hz, 1ms Curved Gaming Monitor, USB Hub, HAS, Quantum Mini LED, HDR1000, Smart TV, AMD FreeSync Premium Pro (LS57CG950NWXXL, Black)" price="2,79,999" image="https://m.media-amazon.com/images/I/81nH13XWRHL._SX522_.jpg" rating="4" />
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Home;
