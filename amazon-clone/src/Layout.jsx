import React from 'react'
import { DesktopHeader, MobileHeader, Footer, FooterSignIn } from './components'
import { Outlet } from "react-router-dom"
import { useSelector } from 'react-redux'


function Layout() {

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