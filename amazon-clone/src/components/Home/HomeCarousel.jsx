import React, { useEffect, useState } from 'react'

import bannerImage1 from '../../assets/Clothing_3000x1200.jpg'
import bannerImage2 from '../../assets/GroceryItems_3000x1200.jpg'
import bannerImage3 from '../../assets/HomeShoppingItems_3000x1200.jpg'
import bannerImage4 from '../../assets/Shoes_3000x1200.jpg'
import bannerImage5 from '../../assets/TopDeals_3000x1200.jpg'


function HomeCarousel() {

    const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4, bannerImage5]
    const [activeImageIdx, setActiveImageIdx] = useState(0);

    function moveToNextImage() {
        setActiveImageIdx(function (prevIdx) {
            if (prevIdx === bannerImages.length - 1) {
                return 0;
            }

            return prevIdx + 1;
        })
    }

    function moveToPrevImage() {
        setActiveImageIdx(function (prevIdx) {
            if (prevIdx === 0) {
                return bannerImages.length - 1;
            }
            return prevIdx - 1;
        })
    }

    // Autoplay Functionality
    useEffect(function () {
        setTimeout(() => {
            moveToNextImage();
        }, 5000)
    }, [activeImageIdx])
    return (
        <>
            <div className='flex relative' style={{ marginBottom: "-15vw" }}>

                {/* Banner Image Container */}
                <div className='w-full z-[-1] flex overflow-hidden'>

                    {
                        bannerImages.map((image, idx) => {
                            return (
                                <img key={idx} src={image} className='' style={{ width: "100%", maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)", transform: `translateX(${-100 * activeImageIdx}%)`, transition: "transform 300ms ease-in-out" }} />
                            )
                        })
                    }
                </div>

                {/* Left Button */}
                <button className='absolute text-[0.8rem] sm:text-xl md:text-3xl rounded-md flex items-center justify-center hover:outline-2 hover:outline hover:outline-white hover:border-2 hover:border-[#008296] w-8 sm:w-12 md:w-20' style={{ top: "2px", left: "0.2rem", height: "calc(100% - 15.3vw)" }} onClick={moveToPrevImage}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                {/* Right Button */}
                <button className='absolute z-10 text-[0.8rem] sm:text-xl md:text-3xl rounded-md flex items-center justify-center hover:outline-2 hover:outline hover:outline-white hover:border-2 hover:border-[#008296] w-8 sm:w-12 md:w-20' style={{ top: "2px", right: "0.2rem", height: "calc(100% - 15.3vw)" }} onClick={moveToNextImage}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>


            </div>

        </>
    )
}

export default HomeCarousel;