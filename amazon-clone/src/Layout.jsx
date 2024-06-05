import React from 'react'
import { DesktopHeader, MobileHeader, Footer, FooterSignIn } from './components'
import { Outlet } from "react-router-dom"

function Layout() {
    return (

        <>
            {/* Desktop Header */}
            <DesktopHeader />

            {/* Mobile Header */}
            <MobileHeader />

            {/* The Outlet component in React Router is specifically designed to render child routes within a parent route. */}
            <Outlet />

            {/* Footer Sign In */}
            <FooterSignIn />

            {/* Footer */}
            <Footer />
        </>
    )
}

export default Layout