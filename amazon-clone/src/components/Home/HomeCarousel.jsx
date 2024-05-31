import React, { useState } from 'react'


import bannerImage1 from '../../assets/Clothing_3000x1200.jpg'
import bannerImage2 from '../../assets/GroceryItems_3000x1200.jpg'
import bannerImage3 from '../../assets/HomeShoppingItems_3000x1200.jpg'
import bannerImage4 from '../../assets/Shoes_3000x1200.jpg'
import bannerImage5 from '../../assets/TopDeals_3000x1200.jpg'


function HomeCarousel() {

    const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4, bannerImage5]
    const [activeImageIdx, setActiveImageIdx] = useState(0);

    return (
        <>
            <div className='flex overflow-hidden relative' style={{ marginBottom: "-15vw" }}>

                {/* Banner Image Container */}
                <div className='w-full relative z-[-1]'>
                    <img src={bannerImages[activeImageIdx]} style={{ width: "100%", maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)" }} />
                </div>

                {/* Left Button */}
                <button className='absolute text-[0.8rem] sm:text-xl md:text-3xl rounded-md flex items-center justify-center hover:outline-2 hover:outline hover:outline-white hover:border-2 hover:border-[#008296]' style={{top: "2px", left:"0.2rem", height: "calc(100% - 15.3vw)", width: "5rem"}}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                {/* Right Button */}
                <button className='absolute z-10 text-[0.8rem] sm:text-xl md:text-3xl rounded-md flex items-center justify-center hover:outline-2 hover:outline hover:outline-white hover:border-2 hover:border-[#008296]' style={{top: "2px", right:"0.2rem", height: "calc(100% - 15.3vw)", width: "5rem"}}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>


            </div>

        </>
    )
}

export default HomeCarousel;