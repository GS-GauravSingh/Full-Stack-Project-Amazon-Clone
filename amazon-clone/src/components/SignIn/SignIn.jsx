import React from 'react'
import { Link } from 'react-router-dom'
import amazonLogo from '../../assets/AmazonLogoBlack_1024x576.png'



function SignIn() {
    return (
        <>
            <div className='bg-white flex flex-col justify-between' style={{ minHeight: "100vh" }}>

                {/* Amazon Logo */}
                <div className='flex items-center justify-center'>
                    <Link to='/'>
                        <div className='flex items-center justify-center'>
                            <img src={amazonLogo} className='w-28' />
                            <span className='pb-2 pl-[2px] font-medium'>.in</span>
                        </div>
                    </Link>
                </div>

                {/* User Details */}
                <div className='flex flex-col items-center' >

                    <form className='pt-2 px-5 rounded-md' style={{ width: "min(400px, 90vw)", border: "1px solid #A6A6A6" }}>
                        <h2 className='text-3xl font-medium mb-[1.5rem]'>Sign in</h2>

                        {/* Email */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="userEmailOrNumber" className='font-medium text-sm'>Email or mobile phone number</label>
                            <input
                                type="text"
                                name="UserEmailOrNumber"
                                id="userEmailOrNumber"
                                className='rounded-sm pl-2 text-sm py-1 outline-none border-[1px] border-[#A6A6A6] focus:border-[1.5px] focus:border-[#007185] focus:shadow-signUpInputBoxShadow'
                                style={{}}
                                placeholder='Email or mobile phone number'
                                autoFocus
                                required />
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-1 mt-[1rem]'>
                            <label htmlFor="userPassword" className='font-medium text-sm'>Password</label>
                            <input
                                type="password"
                                name="Password"
                                id="userPassword"
                                placeholder='Password'
                                className='rounded-sm pl-2 text-sm py-1 outline-none border-[1px] border-[#A6A6A6] focus:border-[1.5px] focus:border-[#007185] focus:shadow-signUpInputBoxShadow'
                                required />
                        </div>

                        {/* Separation */}
                        <div className='mt-[1rem] flex items-center'>
                            <span className='flex-grow' style={{ height: "2px", backgroundColor: "#F3F3F3", width: "10px" }}></span>
                            <span className='px-2 text-xs' style={{ color: "#767676" }}>or</span>
                            <span className='flex-grow' style={{ height: "2px", backgroundColor: "#F3F3F3", width: "10px" }}></span>
                        </div>

                        {/* OTP */}
                        <div className='mt-[1rem] flex items-center mb-2'>
                            <button className='w-full rounded-md text-sm py-1.5 ' style={{ border: "2px solid #F3F3F3", boxShadow: "0px 0px 2px gray" }}>Get an OTP on your phone</button>
                        </div>


                        {/* Button */}
                        <div className='flex justify-center mt-[1.5rem]'>
                            <button type='submit' className='bg-yellow-400 hover:bg-yellow-500 text-black py-1.5 w-full text-sm rounded-md font-medium'>Continue</button>
                        </div>

                        {/* Text */}
                        <div className='mt-[1rem]'>
                            <p className='text-sm'>By continuing, you agree to Amazon's <span className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Conditions of Use</span> and <span className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Privacy Policy.</span></p>
                        </div>

                        {/* Text */}
                        <div className='mt-[1rem] pb-[1.5rem]' style={{ borderBottom: "1px solid #E7E7E7" }}>
                            <details className='text-xs cursor-pointer marker:text-black marker:text-[0.7rem]'>
                                <summary className='text-blue-500 hover:text-orange-600 hover:underline'>Need Help?</summary>
                                <p className='text-blue-500 hover:text-orange-600 hover:underline pt-2 pl-3'>Forgot password</p>
                                <p className='text-blue-500 hover:text-orange-600 hover:underline pt-2 pl-3'>Other issues with Sign-In</p>
                            </details>
                        </div>

                        {/* Text */}
                        <div className='text-sm my-[1rem]'>
                            <p className='font-semibold'>Buying for work?</p>
                            <p className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Shop on Amazon Business</p>
                        </div>
                    </form>

                    {/* Separation */}
                    <div className='mt-[1.5rem] flex items-center' style={{ width: "min(400px, 90vw)" }}>
                        <span className='flex-grow' style={{ height: "2px", backgroundColor: "#F3F3F3", width: "10px" }}></span>
                        <span className='px-2 text-xs' style={{ color: "#767676" }}>New to Amazon?</span>
                        <span className='flex-grow' style={{ height: "2px", backgroundColor: "#F3F3F3", width: "10px" }}></span>
                    </div>

                    {/* Create Account Button */}
                    <Link to="/signup">
                        <div className='mt-[1.5rem] flex items-center mb-2' style={{ width: "min(400px, 90vw)" }}>
                            <button className='w-full rounded-md text-sm py-1.5' style={{ border: "2px solid #F3F3F3", boxShadow: "0px 4px 5px gray" }}>Create your Amazon account</button>
                        </div>
                    </Link>
                </div >


                {/* Footer */}
                <div className='bg-white pt-[2rem] text-sm' >
                    <div className='py-[2rem]' style={{ backgroundImage: "radial-gradient(circle, #F6F6F6, white)" }}>

                        <div className='flex justify-center gap-3 sm:gap-8'>
                            <p className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Conditions of Use</p>
                            <p className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Privacy Notice</p>
                            <p className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Help</p>
                        </div>

                        <div className='flex justify-center mt-[0.5rem] text-gray-500 text-xs'>
                            <p>Amazon Clone - Made By <span className='font-semibold'>Gaurav Singh</span></p>
                        </div>
                    </div>
                </div>
            </div >


        </>
    )
}

export default SignIn