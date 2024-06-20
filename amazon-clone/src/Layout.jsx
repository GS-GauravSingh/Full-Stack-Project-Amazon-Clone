import React, { useEffect } from 'react'
import { DesktopHeader, MobileHeader, Footer, FooterSignIn } from './components'
import { Outlet } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { logIn, logOut } from './redux/userAuthSlice'
import userAuthService from './firebase/UserAuthentication'


function Layout() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        // Maintaining redux state when browser refreshes.
        async function getCurrentUser() {
            try {
                const userCredentials = await userAuthService.getCurrentUser();
                if (userCredentials) {
                    const userData = {
                        name: userCredentials.displayName,
                        email: userCredentials.email,
                        phoneNumber: ""
                    };
                    dispatch(logIn(userData));
                }
                else{
                    dispatch(logOut());
                }
            } catch (error) {
                throw error;
            }
        }

        getCurrentUser();

    }, [])

    const authStatus = useSelector((state) => state.userAuth.status);

    return (

        <>
            {/* Desktop Header */}
            <DesktopHeader />

            {/* Mobile Header */}
            <MobileHeader />

            {/* The Outlet component in React Router is specifically designed to render child routes within a parent route. */}
            <Outlet />

            {/* Footer Sign In */}
            {/* <FooterSignIn /> */}

            {/* We only show FooterSignIn components when user is logged out. */}
            {
                authStatus ?
                    (
                        <div className='py-2'></div>
                    )
                    :
                    (
                        <FooterSignIn />
                    )
            }

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Layout