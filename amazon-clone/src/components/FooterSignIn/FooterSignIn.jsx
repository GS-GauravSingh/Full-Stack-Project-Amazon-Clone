import React from 'react'

function FooterSignIn() {
    return (
        <>
            {/* Sign In Section */}
            <div className='bg-white mt-4 pt-8 pb-8'>
                <div className='flex flex-col items-center border-t border-b border-gray-300 pt-4 pb-4'>
                    <p className='text-black font-medium'>See personalized recommendations</p>
                    <button className='min-w-72 py-1 my-1.5 rounded-md border-2 border-orange-300 font-bold text-sm' style={{ backgroundImage: "linear-gradient(to top, orange 50%, yellow)" }}>Sign in</button>
                    <p className='text-xs'>New customer? <span className='text-cyan-600 cursor-pointer hover:text-orange-700'>Start here.</span></p>
                </div>
            </div>
        </>
    )
}

export default FooterSignIn