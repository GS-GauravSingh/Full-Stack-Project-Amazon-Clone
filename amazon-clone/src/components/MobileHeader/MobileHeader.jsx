import React, { useState, useEffect } from 'react'
import amazonlogo from "../../assets/AmazonLogo_2000x604.png"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import userAuthService from '../../firebase/UserAuthentication'
import { logOut } from '../../redux/userAuthSlice'

function MobileHeader() {

    // `useSelector()` is a hook provided by the React-Redux library that allows functional components to extract data from the Redux store. `useSelector()` has access to the state - the current state of redux store. 
    const cart = useSelector((state) => state.products.cart);

    // User Authentication Status
    const authStatus = useSelector((state) => state.userAuth.status);
    const userName = useSelector((state) => state.userAuth.userData?.name);

    const [localUserName, setLocalUserName] = useState("");

    // For Updating state when user logged out.
    const dispatch = useDispatch();

    useEffect(() => {
        if (authStatus) {
            // User is Logged In.
            setLocalUserName(userName.split(" ")[0]);
        }
        else {
            setLocalUserName("");
        }
    }, [authStatus])

    // Function to handle when user click on signout button.
    async function handleSignOut() {
        try {
            await userAuthService.signOut();
            dispatch(logOut());

        } catch (error) {
            throw error;
        }
    }

    return (
        <header className='customBreakpointForMobileHeader:hidden'>

            {/* Primary Header */}
            <div className='bg-header-primary-bgcolor text-white px-2.5 py-2'>

                {/* Top Section of Header Contains - Amazon Logo, Hamburger Menu Icon, Sign In and Add to cart. */}
                <div className='flex justify-between'>

                    <div className='flex items-center justify-center gap-4'>
                        {/* Hamburger menu */}
                        <span className='pb-2 cursor-pointer'>
                            <i className="fa-solid fa-bars text-white text-xl"></i>
                        </span>

                        <Link to="/">
                            {/* Amazon Logo */}
                            <div className=''>
                                <img src={amazonlogo} className='h-6 w-20' />
                            </div>
                        </Link>
                    </div>

                    <div className='flex justify-center items-center gap-5'>

                        {/* Sign In */}
                        <div className='flex items-center gap-1 cursor-pointer'>

                            <div className='flex items-center text-xs'>

                                {/* JavaScript */}
                                {
                                    authStatus ?
                                        (
                                            <div className='flex flex-col' >
                                                <span className='font-medium'> {localUserName} </span>
                                                <button 
                                                className='text-blue-500 hover:opacity-80'
                                                onClick={handleSignOut}
                                                > Sign out </button>
                                            </div>
                                        )
                                        :
                                        (
                                            <Link to="/signin">
                                                <span className='text-blue-500'>Sign in</span>
                                            </Link>
                                        )
                                }


                                <span style={{ marginLeft: "4px", fontSize: "10px" }} className=''> <i class="fa-solid fa-angle-right"></i> </span>
                            </div>

                            {/* User Icon */}
                            <div className='ml-1 text-xl'>
                                <i class="fa-regular fa-user"></i>
                            </div>
                        </div>

                        {/* Add to cart */}
                        <div>
                            <Link to="/checkout">
                                <span>
                                    <i className="fa-solid fa-cart-shopping text-xl"></i>
                                </span>
                                <span className='font-bold ml-2 text-xl text-orange-400 cursor-default'> {cart?.length} </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Center - Contains Search Bar */}
                <div className='flex-grow flex py-1'>
                    <input type="text" className='w-full border-none outline-none pl-2 rounded-s-md text-sm text-black' placeholder='Search Amazon' />
                    <i className="fa-solid fa-magnifying-glass bg-yellow-500 text-slate-700 text-xl px-2 py-1 rounded-e-md"></i>
                </div>


                {/* Bottom Section - Navigation */}
                <div className='flex overflow-x-scroll no-scrollbar text-sm'>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Deals</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Amazon Basics</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Best Seller</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Live Streams</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Music</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Video</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Books</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>New Releases</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Amazon miniTV</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Sell</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Today's Deals</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Mobiles</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Electronics</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Customer Services</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Home & Kitchen</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Fashion</p>
                    <p className='border border-transparent pr-2 py-1 whitespace-nowrap hover:text-slate-300'>Amazon Pay</p>
                </div>
            </div>

            {/* Secondary Header */}
            <div className='bg-header-secondary-bgcolor text-white px-2.5 py-2 flex items-center'>
                <i className="fa-solid fa-location-dot text-sm"></i>
                <span className='text-slate-200 whitespace-nowrap ml-2 text-xs'>Deliver to India</span>
            </div>
        </header>
    )
}

export default MobileHeader;