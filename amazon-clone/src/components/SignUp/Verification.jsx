import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import amazonLogo from '../../assets/AmazonLogoBlack_1024x576.png'
import userAuthService from '../../firebase/UserAuthentication';
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from '../../redux/userAuthSlice';

function Verification() {

    // `useNavigate()` is a hook provided by React-Router-Dom and it is used to programatically redirect the user.
    const navigate = useNavigate();

    // Storing user information and status in Redux Store.
    const dispatch = useDispatch();

    const [OTP, setOTP] = useState();

    const userData = useSelector(state => state.userAuth.userData);
    const mobileNumber = userData?.phoneNumber;
    const userName = userData?.name;

    // Create user account - when user click on 'create your amazon account' button.
    async function handleSubmit(event) {

        event.preventDefault();

        try {
            // Step 1: Verify reCaptch.
            userAuthService.reCaptchaVerifier("createAmazonAccountBtnId");

            // Step 2: send the verification code to the user's mobile number.
            await userAuthService.createAccountWithPhoneNumber(mobileNumber);

            // Step 3: Verify the One-Time-Password sent to the user's mobile number.
            const userCredentials = await userAuthService.verifyOTP(OTP);

            if (userCredentials) {
                // Account created successfully.
                await userAuthService.updateUserProfile(userName);

                const userData = {
                    name: userCredentials.user.displayName,
                    email: userCredentials.user.email,
                    phoneNumber: userCredentials.user.phoneNumber,
                };

                dispatch(logIn(userData));
                navigate("/");
            }
            else {
                dispatch(logOut());
                console.log("Error :: handleSubmit() ::  Verification.jsx");
            }
        } catch (error) {
            throw error;
        }
    }

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

                    <form
                        onSubmit={handleSubmit}
                        className='pt-2 px-5 rounded-md'
                        style={{ width: "min(400px, 90vw)", border: "1px solid #A6A6A6" }}>
                        <h2 className='text-3xl font-medium mb-[1.5rem]'>Verify phone number</h2>

                        <div className='text-sm'>
                            <p>To verify your phone number, we've sent a One TIme Password (OTP) to your number.</p>
                        </div>


                        {/* Verification Code */}
                        <div className='flex flex-col gap-1 mt-[1rem]'>
                            <label htmlFor="userEmailOrNumber" className='font-medium text-sm'>Enter One Time Password (OTP)</label>
                            <input
                                type="text"
                                name="UserEmailOrNumber"
                                id="userEmailOrNumber"
                                className='rounded-sm pl-2 text-sm py-1 outline-none border-[1px] border-[#A6A6A6] focus:border-[1.5px] focus:border-[#007185] focus:shadow-signUpInputBoxShadow'
                                style={{}}
                                placeholder='OTP'
                                autoFocus
                                required
                                onChange={(event) => setOTP(event.target.value)}
                            />
                        </div>


                        {/* Button */}
                        <div className='flex justify-center mt-[1rem] pb-[1.5rem]' style={{ borderBottom: "1px solid #E7E7E7" }}>
                            <button id='createAmazonAccountBtnId' type='submit' className='bg-yellow-400 hover:bg-yellow-500 text-black py-1.5 w-full text-sm rounded-md font-medium'>Create your Amazon Account</button>
                        </div>

                        {/* Text */}
                        <div className='text-sm mt-[1rem]'>
                            <p className=''>
                                By creating an account or logging in, you agree to Amazon’s <span className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Conditions of Use</span> and <span className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Privacy Policy.</span>
                            </p>
                        </div>

                        {/* Resend OTP */}
                        <div className='mt-[1rem] flex items-center mb-2'>
                            <button className='w-full rounded-md text-sm py-1.5 hover:scale-105' style={{ border: "2px solid #F3F3F3", boxShadow: "0px 0px 2px gray" }}>Resend OTP</button>
                        </div>

                        {/* Sign In */}
                        <div className='mt-[2rem] text-sm pt-[1rem] pb-[1rem]' style={{ borderTop: "1px solid #E7E7E7", backgroundImage: "radial-gradient(circle, #F3F3F3, white)" }}>
                            <p>Already have an account? &nbsp;
                                <Link to="/signin">
                                    <span className='text-blue-500 hover:text-orange-600 hover:underline cursor-pointer'>Sign in</span>
                                </Link>
                            </p>

                            <div className='mt-[0.5rem]'>
                                <p>
                                    <span className='font-medium'>Note:</span> If you didn't receive our verification email

                                </p>
                                <ul className='list-disc list-inside'>
                                    <li>Confirm that your phone number was entered correctly.</li>
                                    <li>Check your spam or junk folder.</li>
                                </ul>
                            </div>
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

export default Verification