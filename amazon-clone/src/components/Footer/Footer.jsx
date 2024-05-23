import React from 'react'
import amazonlogo from "../../assets/AmazonLogo_2000x604.png"
import indiaFlag from "../../assets/india-flag-icon.svg"
import { Link } from 'react-router-dom'



function Footer() {

  // Function
  function moveToTop(){
    window.scrollTo({top: "0", left: "0"});
  }

  return (
    <footer>

      {/* Sign In Section */}
      <div className='bg-white mt-4 pt-8 pb-8'>
        <div className='flex flex-col items-center border-t border-b border-gray-300 pt-4 pb-4'>
          <p className='text-black font-medium'>See personalized recommendations</p>
          <button className='min-w-72 py-1 my-1.5 rounded-md border-2 border-orange-300 font-bold text-sm' style={{ backgroundImage: "linear-gradient(to top, orange 50%, yellow)" }}>Sign in</button>
          <p className='text-xs'>New customer? <span className='text-cyan-600 cursor-pointer hover:text-orange-700'>Start here.</span></p>
        </div>
      </div>

      {/* Back to Top */}
      <div className='bg-back-to-top-bgcolor hover:bg-opacity-95'>
        <button className='w-full text-center p-4 text-white font-medium' onClick={moveToTop}>Back to top</button>
      </div>

      {/* Links */}
      <div className='bg-footer-secondary-bgcolor p-10 flex flex-col customBreakpointForFooter:flex-row customBreakpointForFooter:justify-evenly gap-4 border-b border-slate-600'>
        {/*  */}
        <div className=''>
          <h3 className='text-white text-xl mb-2 font-bold whitespace-nowrap'>Get to Know Us</h3>
          <div className='text-gray-300 font-medium flex flex-col gap-1'>
            <p className='whitespace-nowrap'>About Us</p>
            <p className='whitespace-nowrap'>Carrers</p>
            <p className='whitespace-nowrap'>Press Releases</p>
            <p className='whitespace-nowrap'>Amazon Science</p>
          </div>
        </div>

        <div className=''>
          <h3 className='text-white text-xl mb-2 font-bold whitespace-nowrap'>Contact with Us</h3>
          <div className='text-gray-300 font-medium flex flex-col gap-1'>
            <p className='whitespace-nowrap'>Facebook</p>
            <p className='whitespace-nowrap'>Twitter</p>
            <p className='whitespace-nowrap'>Instagram</p>
          </div>
        </div>

        <div className=''>
          <h3 className='text-white text-xl mb-2 font-bold whitespace-nowrap'>Make Money with Us</h3>
          <div className='text-gray-300 font-medium flex flex-col gap-1'>
            <p className='whitespace-nowrap'>Sell on Amazon</p>
            <p className='whitespace-nowrap'>Sell under Amazon Accelerator</p>
            <p className='whitespace-nowrap'>Protect and Build your Brand</p>
            <p className='whitespace-nowrap'>Amazon Global Selling</p>
            <p className='whitespace-nowrap'>Become an Affiliate</p>
            <p className='whitespace-nowrap'>Fulfilment by Amazon</p>
            <p className='whitespace-nowrap'>Advertise Your Product</p>
            <p className='whitespace-nowrap'>Amazon Pay on Merchants</p>
          </div>
        </div>

        <div className=''>
          <h3 className='text-white text-xl mb-2 font-bold whitespace-nowrap'>Let Us Help You</h3>
          <div className='text-gray-300 font-medium flex flex-col gap-1'>
            <p className='whitespace-nowrap'>COVID-19 and Amazon</p>
            <p className='whitespace-nowrap'>Your Account</p>
            <p className='whitespace-nowrap'>Returns Center</p>
            <p className='whitespace-nowrap'>100% Purchase Protection</p>
            <p className='whitespace-nowrap'>Amazon App Download</p>
            <p className='whitespace-nowrap'>Help</p>
          </div>
        </div>
      </div>

      {/* Amazon Logo */}
      <div className='bg-footer-secondary-bgcolor py-10'>
        <div className='flex flex-col items-center gap-4 sm:flex-row sm:justify-around sm:items-center sm:max-w-screen-sm mr-auto ml-auto '>

          {/* Amazon Logo Image */}
          <div className='flex'>
            <img src={amazonlogo} className='h-10' />
          </div>

          <div className='flex'>
            <p className='pb-6 mr-2.5'>
              {/* Globe Icon */}
              <p className='border rounded-sm px-4 py-2 text-slate-200'>
                <span className='mr-2'>
                  <i class="fa-solid fa-globe"></i>
                </span>

                English
              </p>
            </p>

            <p className='pb-6'>
              <p className='flex items-center border rounded-sm  px-4 py-2 text-slate-200'>
                <img src={indiaFlag} className='h-4 mr-2' />
                <span> India </span>
              </p>
            </p>
          </div>
        </div>
      </div>

      {/* Footer - Bottom Section */}
      <div className='bg-footer-primary-bgcolor flex justify-center py-10'>

        <div className='p-2 md:max-w-screen-xl grid grid-cols-1 grid-rows-8 sm:grid-cols-2 sm:grid-rows-4 xl:grid-cols-4 xl:grid-rows-2 gap-3'>

          <div className='flex'>
            <div>
              <h3 className='text-gray-200 font-bold text-sm'>AbeBooks</h3>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>Books, art</p>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>& collectibles</p>
            </div>
          </div>

          <div className=''>
            <div>
              <h3 className='text-gray-200 font-bold text-sm'>Amazon Web Services</h3>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>Scalable Cloud</p>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>Computing Services</p>
            </div>
          </div>

          <div className=''>
            <div><h3 className='text-gray-200 font-bold text-sm'>Audible</h3>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>Download</p>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>Audio Books</p></div>
          </div>

          <div className=''>
            <div>
              <h3 className='text-gray-200 font-bold text-sm'>IMDb</h3>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>Movies, TV</p>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>& Celebrities</p>
            </div>
          </div>

          <div className=''>
            <div>
              <h3 className='text-gray-200 font-bold text-sm'>Shopbop</h3>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>Designer</p>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>Fashion Brands</p>
            </div>
          </div>

          <div className=''>

            <div>
              <h3 className='text-gray-200 font-bold text-sm'>Amazon Business</h3>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>Everything For</p>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>YOur Business</p>
            </div>
          </div>

          <div className=''>
            <div>
              <h3 className='text-gray-200 font-bold text-sm'>Prime Now</h3>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>2-Hours Delivery</p>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>on Everyday Item</p>
            </div>
          </div>

          <div className=''>
            <div>
              <h3 className='text-gray-200 font-bold text-sm'>Amazon Prime Music</h3>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>100 million songs, ad-free</p>
              <p className='font-medium text-gray-400 whitespace-nowrap text-sm'>Over 15 million podcast episodes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='bg-footer-primary-bgcolor text-gray-300 flex flex-col items-center pb-5'>
        <p className='text-sm mt-1'>
          Amazon Clone | Made by <span className='font-medium'>Gaurav Singh</span>
        </p>
      </div>

    </footer>
  )
}

export default Footer