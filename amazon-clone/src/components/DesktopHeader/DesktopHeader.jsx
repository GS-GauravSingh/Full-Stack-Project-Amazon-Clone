import React, { useEffect, useState } from 'react'
import amazonlogo from "../../assets/AmazonLogo_2000x604.png"
import indiaFlag from "../../assets/india-flag-icon.svg"
import { Link } from 'react-router-dom'
import useProductContext from '../../context/ProductContext/useProductContext'

function DesktopHeader() {

    // Accessing the Product Context. Used to access the total number of items present in the cart. So, that we can display the product count (total items in the cart) in the header.
    const { cart } = useProductContext();

    return (
        <header className='hidden customBreakpointForMobileHeader:block'>

            {/* Primary Header */}
            <div className='bg-header-primary-bgcolor text-white flex items-center fixed left-0 right-0 top-0 z-50'>

                {/* Left - Header - Amazon Logo and Location */}
                <div className='flex items-center'>
                    <Link to="/">
                        <div className='flex items-center border border-transparent hover:border-slate-300 rounded-sm mx-1 my-1 min-w-28 object-contain cursor-pointer' style={{ padding: "0.6rem" }}>
                            <img src={amazonlogo} className='w-26 h-7' />
                            <span className='pb-2'>.in</span>
                        </div>
                    </Link>

                    <div className='flex items-end border border-transparent hover:border-slate-300 rounded-sm my-1 px-2 py-1 gap-1'>
                        <div className=''>
                            <i className="fa-solid fa-location-dot"></i>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-sm text-slate-400 whitespace-nowrap'>Delivering to</span>
                            <span className='font-bold whitespace-nowrap'>Update Location</span>
                        </div>
                    </div>
                </div>

                {/* Center - Header - Search Bar */}
                <div className='flex-grow px-4 flex'>
                    <select className='rounded-s-md text-slate-800 bg-gray-300 text-sm px-1 border-r-2 border-gray-400'>
                        <option>All</option>
                    </select>
                    <input type="text" className='w-full border-none outline-none pl-2 font-semibold text-black' placeholder='Search Amazon.in' />
                    <i className="fa-solid fa-magnifying-glass bg-yellow-500 text-slate-700 text-xl px-2 py-1 rounded-e-md"></i>
                </div>

                {/* Right - Header Options (Sign In etc.) */}
                <div className='flex gap-1'>

                    {/* Language */}
                    <div className='flex border border-transparent hover:border-slate-300 rounded-sm px-2 '>
                        <img src={indiaFlag} className='w-8' />
                        <select className='bg-transparent font-bold outline-none border-none'>
                            <option>EN</option>
                        </select>
                    </div>

                    {/* Sign In Option */}
                    <div className='flex flex-col border border-transparent hover:border-slate-300 rounded-sm py-1 px-2'>
                        <span className='text-sm ml-1 whitespace-nowrap'>Hello, sign in</span>
                        <select className='bg-transparent border-none outline-none font-bold'>
                            <option>Account & Lists</option>
                        </select>
                    </div>

                    {/* Returns and Orders Option */}
                    <div className='flex flex-col px-2 py-1 border border-transparent hover:border-slate-300 rounded-sm'>
                        <span className='text-sm'>Returns</span>
                        <span className='font-bold whitespace-nowrap'>& Orders</span>
                    </div>

                    {/* Add to Cart Option */}
                    <div className='flex items-center px-2 py-1 border border-transparent hover:border-slate-300 rounded-sm cursor-pointer'>
                        <Link to="/checkout">
                            <span>
                                <i className="fa-solid fa-cart-shopping text-2xl"></i>
                            </span>
                            <span className='font-bold ml-2 text-xl text-orange-400'> {cart?.length} </span>
                            {/* 
                                The question mark (?) in cart?.length is the `optional chaining` operator in JavaScript. Basically, it is used to handle errors.

                                It works like this,
                                if (cart !== null && cart !== undefined) {
                                    console.log(cart.length);
                                } else {
                                    console.log('Cart is undefined or null');
                                } 
                            */}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Secondary Header */}
            <div className='bg-header-secondary-bgcolor text-white flex items-center' style={{ paddingBottom: "1px", marginTop: "3.9rem" }}>

                {/* Hamburger Menu */}
                <div className='ml-2 border border-transparent hover:border-slate-300 p-2 whitespace-nowrap'>
                    <span className=''>
                        <i className="fa-solid fa-bars text-white text-md"></i>
                    </span>

                    <span className='ml-2 font-semibold'>
                        All
                    </span>
                </div>

                {/* Navigation */}
                <div className='flex font-semibold overflow-x-scroll no-scrollbar'>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>Amazon miniTV</p>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>Sell</p>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>Best Seller</p>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>Today's Deals</p>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>Mobiles</p>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>Electronics</p>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>Customer Services</p>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>Home & Kitchen</p>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>Fashion</p>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>New Releases</p>
                    <p className='border border-transparent hover:border-slate-300 px-2 py-2 whitespace-nowrap'>Amazon Pay</p>
                </div>

            </div>
        </header>
    )
}

export default DesktopHeader;
