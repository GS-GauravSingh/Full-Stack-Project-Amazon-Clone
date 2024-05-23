// Short trick to import all components from one file: 
// Create an "index.js" file in the directory where your components are located, "index.js" file is called automatically when you import a particular folder.


// Import all the components.
import DesktopHeader from "./DesktopHeader/DesktopHeader"
import MobileHeader from "./MobileHeader/MobileHeader"
import Footer from "./Footer/Footer"
import Home from "./Home/Home"
import Product from "./Product/Product"
import DisplayStarRating from "./StarRating/DisplayStarRating"
import ProductCheckout from "./ProductCheckoutPage/ProductCheckout"
import FooterSignIn from "./FooterSignIn/FooterSignIn"
import SubTotal from "./SubTotal/SubTotal"


// Export all the components like this.
export {DesktopHeader, MobileHeader, Footer, Home, Product, DisplayStarRating, ProductCheckout, FooterSignIn, SubTotal};


// After that you can import all these components like this: 
// import { DesktopHeader, MobileHeader } from './components'
// No need to write index.js while writing the path while importing components, because the "index.js" file is called automatically.