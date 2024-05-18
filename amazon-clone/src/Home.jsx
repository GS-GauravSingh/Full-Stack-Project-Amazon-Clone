import React from 'react'
import bannerImage1 from './assets/Clothing_3000x1200.jpg'
import bannerImage2 from './assets/GroceryItems_3000x1200.jpg'
import bannerImage3 from './assets/HomeShoppingItems_3000x1200.jpg'
import bannerImage4 from './assets/Shoes_3000x1200.jpg'
import bannerImage5 from './assets/TopDeals_3000x1200.jpg'
import Product from './Product'
import bookImage1 from './assets/BookImage1.jpg'
import bookImage2 from './assets/BookImage2.jpg'
import bookImage3 from './assets/BookImage3.jpg'
import bookImage4 from './assets/BookImage4.jpg'
import bookImage5 from './assets/BookImage5.jpg'
import bookImage6 from './assets/BookImage6.jpg'
import samsungMonitor1 from './assets/SamsungMonitor1.jpg'

function Home() {
    return (
        <main className='flex justify-center ml-auto mr-auto max-w-screen-2xl'>

            {/* Wrapper Container */}
            <div>

                {/* Banner Image Container */}
                <div className=''>

                    <div className=' flex overflow-hidden' style={{ marginBottom: "-15vw" }}>
                        <img src={bannerImage2} style={{ width: "100%", zIndex: "-1", maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))" }} />
                        <img src={bannerImage3} style={{ width: "100%", zIndex: "-1", maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))" }} />
                        <img src={bannerImage5} style={{ width: "100%", zIndex: "-1", maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)" }} />
                        <img src={bannerImage1} style={{ width: "100%", zIndex: "-1", maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))" }} />
                        <img src={bannerImage4} style={{ width: "100%", zIndex: "-1", maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))" }} />
                    </div>

                </div>

                {/* Products Listing */}
                <div className='px-5 flex flex-col gap-4'>

                    {/* Products */}
                    <div className='flex flex-wrap gap-4'>

                        {/* Product */}
                        <Product title="World's Greatest Books For Personal Growth & Wealth (Set of 4 Books)" price="349" image={bookImage1} rating="4.5" />

                        {/* Product */}
                        <Product title="The Psychology of Money – Deluxe Edition" price="399" image={bookImage2} rating="4.5" />

                        {/* Product */}
                        <Product title="Don't Believe Everything You Think (English)" price="180" image={bookImage5} rating="4.5" />

                        {/* Product */}
                        <Product title="The Mountain Is You: Transforming Self-Sabotage Into Self-Mastery" price="287" image={bookImage6} rating="4.5" />

                        {/* Product */}
                        <Product title="Values of Money + The Psychology of Money (Combo pack of 2 books)" price="695" image={bookImage3} rating="4" />

                        {/* Product */}
                        <Product title="The Wealth Money Can't Buy: The 8 Hidden Habits to Live Your Richest Life" price="344" image={bookImage4} rating="4.5" />

                    </div>

                    {/* Products */}
                    <div>
                        
                        <Product title="Samsung 49-inch(124.4cm) Odyssey OLED G9 Dual QHD, 240Hz, 0.03ms Curved Gaming Monitor, USB Hub, HAS, Neo Quantum Processor, Smart TV, AMD FreeSync Premium Pro (LS49CG950SWXXL, Black)" price="1,79,999.00" image={samsungMonitor1} rating="3.5" />
                        
                    </div>

                    {/* Products */}
                    <div className='flex flex-wrap gap-4'>
                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" />

                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Cream, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/71rMdsTWkmL._SX679_.jpg" rating="4" />

                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Graphite, 8GB RAM, 512GB Storage)" price="1,09,999" image="https://m.media-amazon.com/images/I/71U+YdsvMPL._SX679_.jpg" rating="4" />


                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Mint, 8GB RAM, 256GB Storage)" price="99,999" image="https://m.media-amazon.com/images/I/61Tl1z+Hn0L._SX679_.jpg" rating="4" />

                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Cream, 8GB RAM, 256GB Storage)" price="99,999" image="https://m.media-amazon.com/images/I/71rMdsTWkmL._SL1500_.jpg" rating="4" />

                        <Product title="Samsung Galaxy Z Flip5 5G AI Smartphone (Graphite, 8GB RAM, 256GB Storage)" price="99,999" image="https://m.media-amazon.com/images/I/71U+YdsvMPL._SX679_.jpg" rating="4" />

                    </div>

                    {/* Products */}
                    <div>
                        <Product title="Samsung 34-inches 86.42cm LED Odyssey G5 Ultra WQHD, 165 Hz, 1ms, 1000R Curved Gaming Monitor, HDR10, AMD FreeSync Premium -LC34G55TWWWXXL, Black, 3440 X 1440 (WQHD) Pixels" price="36,999" image="https://m.media-amazon.com/images/I/71IYBPoc8pL._SL1500_.jpg" rating="4" />
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Home;
