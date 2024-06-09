import React, { useEffect, useState } from 'react'
import { DesktopHeader, MobileHeader, Footer, FooterSignIn } from './components'
import { Outlet } from "react-router-dom"
import userAuthService from './firebase/UserAuthentication'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from './redux/userAuthSlice'

function Layout() {

    const dispatch = useDispatch();
    const [authStatus, setAuthStatus] = useState(false);

    // Checking whether user is authenticated or not.
    async function isUserAuthenticated() {
        try {
            const userCredentials = await userAuthService.getCurrentUser();
            if (userCredentials) {
                // User is logged in.
                const userData = {
                    name: userCredentials.displayName,
                };

                dispatch(logIn(userData));
                setAuthStatus(true);

            }
            else{
                // User is logged out.
                dispatch(logOut());
                setAuthStatus(false);
            }

        } catch (error) {
            throw error;
        }
    }

    // We have to update the state in redux store when app initially rednders - to check whether the current user is authenticated or not.
    useEffect(() => {
        isUserAuthenticated();
    }, [])

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