import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import amazonLogo from '../../assets/AmazonLogoBlack_1024x576.png'
import userAuthService from '../../firebase/UserAuthentication'
import { useDispatch } from 'react-redux'
import { logIn, logOut } from '../../redux/userAuthSlice'


function SignIn() {

    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Funciton to handle when user submit the sign in form.
    async function handleSubmit(event) {
        event.preventDefault();

        // If user wants to log in using email.
        if (email.length) {
            try {
                const userCredentials = await userAuthService.signIn({ email, password });
                if (userCredentials) {

                    const userData = {
                        name: userCredentials.user.displayName,
                        email: userCredentials.user.email,
                        phoneNumber: ""
                    };

                    dispatch(logIn(userData));
                    navigate("/");
                }
                else {
                    dispatch(logOut());
                }
            } catch (error) {
                throw error;
            }
        }

        // If user wants to log in using phone number.
        else if (mobileNumber.length) {
            // Remove all spaces from the phone number
            const cleanedPhoneNumber = mobileNumber.replace(/\s+/g, '');
            const document = await userAuthService.getDataFromFirestore(cleanedPhoneNumber);
            if (document) {

                const userData = {
                    name: document.userName,
                    email: email,
                    phoneNumber: mobileNumber
                };

                // CAPTCHA Verification
                userAuthService.reCaptchaVerifier('signInButton');

                // Send verification code to the user's phone number.
                await userAuthService.sendVerificationCode(cleanedPhoneNumber);

                dispatch(logIn(userData));
                navigate('/verification');
            }
            else {
                dispatch(logOut());
            }
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
                <div className='flex flex-col items-center' >

                    <form
                        className='pt-2 px-5 rounded-md'
                        style={{ width: "min(400px, 90vw)", border: "1px solid #A6A6A6" }}
                        onSubmit={handleSubmit}
                    >
                        <h2 className='text-3xl font-medium mb-[1.5rem]'>Sign in</h2>

                        {/* Email */}
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="signInUserEmail" className='font-medium text-sm'>Email</label>
                            <input
                                type="text"
                                name="SignInUserEmail"
                                id="signInUserEmail"
                                className='rounded-sm pl-2 text-sm py-1 outline-none border-[1px] border-[#A6A6A6] focus:border-[1.5px] focus:border-[#007185] focus:shadow-signUpInputBoxShadow disabled:cursor-no-drop'
                                style={{}}
                                placeholder='Email'
                                autoFocus
                                disabled={mobileNumber.length ? true : false}
                                required
                                onChange={(event) => { setEmail(event.target.value) }}
                            />
                        </div>

                        {/* Password */}
                        <div className='flex flex-col gap-1 mt-[1rem]'>
                            <label htmlFor="signInUserPassword" className='font-medium text-sm'>Password</label>
                            <input
                                type="password"
                                name="SignInPassword"
                                id="signInUserPassword"
                                placeholder='Password'
                                className='rounded-sm pl-2 text-sm py-1 outline-none border-[1px] border-[#A6A6A6] focus:border-[1.5px] focus:border-[#007185] focus:shadow-signUpInputBoxShadow disabled:cursor-no-drop'
                                required={email.length ? true : false}
                                disabled={mobileNumber.length ? true : false}
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                        </div>

                        {/* Separation */}
                        <div className='mt-[1rem] flex items-center'>
                            <span className='flex-grow h-[2px] bg-[#F3F3F3]'></span>
                            <span className='px-2 text-xs' style={{ color: "#767676" }}>or</span>
                            <span className='flex-grow h-[2px] bg-[#F3F3F3]'></span>
                        </div>

                        {/* Mobile Number */}
                        <div className='flex flex-col gap-1 mt-4'>
                            <label htmlFor="signInUserNumber" className='font-medium text-sm'>Mobile phone number</label>
                            <input
                                type="text"
                                name="SignInUserNumber"
                                id="signInUserNumber"
                                className='rounded-sm pl-2 text-sm py-1 outline-none border-[1px] border-[#A6A6A6] focus:border-[1.5px] focus:border-[#007185] focus:shadow-signUpInputBoxShadow disabled:cursor-no-drop'
                                style={{}}
                                placeholder='e.g., +91 9876543210'
                                autoFocus
                                required
                                disabled={email.length ? true : false}
                                onChange={(event) => { setMobileNumber(event.target.value) }}
                            />
                        </div>


                        {/* Button */}
                        <div className='flex justify-center mt-[1.5rem]'>
                            <button id='signInButton' type='submit' className='bg-yellow-400 hover:bg-yellow-500 text-black py-1.5 w-full text-sm rounded-md font-medium'>{mobileNumber.length ? (password.length ? "Continue" : "Verify Mobile Number") : "Continue"}</button>
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