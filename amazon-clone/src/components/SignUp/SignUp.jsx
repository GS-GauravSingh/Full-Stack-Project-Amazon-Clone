import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import amazonLogo from '../../assets/AmazonLogoBlack_1024x576.png'
import '../../../public/countries.json'


function SignUp() {

    // Fetching Countre Codes from Local `json` file.
    const [countryCode, setCountryCode] = useState([]);
    useEffect(() => {
        fetch('../../../public/countries.json')
            .then(response => response.json())
            .then(response => setCountryCode(response))
            .catch(error => console.log(error))
    }, [])

    const [selectedCode, setSelectedCode] = useState("IN")

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
                <div className='flex justify-center' >

                    <form className='pt-2 px-5 rounded-md' style={{ width: "min(400px, 90vw)", border: "1px solid #A6A6A6" }}>
                        <h2 className='text-3xl font-medium mb-[1.5rem]'>Create Account</h2>

                        {/* User Name */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="userName" className='font-medium text-sm'>Your Name</label>
                            <input
                                type="text"
                                name="UserName"
                                id="userName"
                                className='rounded-sm pl-2 text-sm py-1 outline-none border-[1px] border-[#A6A6A6] focus:border-[1.5px] focus:border-[#007185] focus:shadow-signUpInputBoxShadow'
                                style={{}}
                                placeholder='First and last name'
                                autoFocus
                                required />
                        </div>

                        {/* Mobile Number */}
                        <div className='flex flex-col gap-1 mt-[1rem]'>
                            <label htmlFor="userMobileNumber" className='font-medium text-sm'>Mobile number</label>
                            <div className='flex flex-col gap-4'>

                                {/* Country Code */}
                                <select
                                    className='text-sm cursor-pointer rounded-md outline-none'
                                    style={{ border: "1px solid #A6A6A6", padding: "0.21rem 0", boxShadow: "0px 0px 5px rgb(191, 189, 189)" }}
                                    value={selectedCode}
                                    onChange={(event) => {
                                        setSelectedCode(event.target.value)
                                    }}
                                >

                                    {
                                        countryCode.map((item, idx) => {
                                            return (
                                                <option key={idx} value={item.short_name}>
                                                    {`${item.country_name} ${item.country_code}`}
                                                </option>
                                            )
                                        })
                                    }
                                </select>

                                {/* Input */}
                                <input
                                    type="text"
                                    name="UserMobileNumber"
                                    id="userMobileNumber"
                                    className='rounded-sm pl-2 text-sm py-1 outline-none border-[1px] border-[#A6A6A6] focus:border-[1.5px] focus:border-[#007185] focus:shadow-signUpInputBoxShadow'
                                    style={{}}
                                    placeholder='Mobile number'
                                    required />
                            </div>
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-1 mt-[1rem]'>
                            <label htmlFor="userPassword" className='font-medium text-sm'>Password</label>
                            <input 
                            type="password" 
                            name="Password" 
                            id="userPassword" 
                            className='rounded-sm pl-2 text-sm py-1 outline-none border-[1px] border-[#A6A6A6] focus:border-[1.5px] focus:border-[#007185] focus:shadow-signUpInputBoxShadow'
                            required />
                        </div>

                        {/* Text */}
                        <div className='mt-[1rem]'>
                            <p className='text-sm'>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
                        </div>

                        {/* Button */}
                        <div className='flex justify-center mt-[1rem] pb-[1.5rem]' style={{ borderBottom: "1px solid #E7E7E7" }}>
                            <button type='submit' className='bg-yellow-400 hover:bg-yellow-500 text-black py-1.5 w-full text-sm rounded-md font-medium'>Verify mobile number</button>
                        </div>

                        {/* Text */}
                        <div className='text-sm mt-[1rem]'>
                            <p className='font-semibold'>Buying for work?</p>
                            <p className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Create a free business account</p>
                        </div>

                        {/* Sign In */}
                        <div className='mt-[1rem] text-sm pt-[1rem] pb-[1rem]' style={{ borderTop: "1px solid #E7E7E7", backgroundImage: "radial-gradient(circle, #F3F3F3, white)" }}>
                            <p>Already have an account? &nbsp;
                                <Link to="/signin">
                                    <span className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Sign in</span>
                                </Link>
                            </p>

                            <p className='mt-[1rem] text-xs'>
                                By creating an account or logging in, you agree to Amazon’s <span className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Conditions of Use</span> and <span className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Privacy Policy.</span>
                            </p>
                        </div>
                    </form>
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

export default SignUp