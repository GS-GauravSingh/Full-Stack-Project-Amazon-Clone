import React from 'react'


import bannerImage1 from '../../assets/Clothing_3000x1200.jpg'
import bannerImage2 from '../../assets/GroceryItems_3000x1200.jpg'
import bannerImage3 from '../../assets/HomeShoppingItems_3000x1200.jpg'
import bannerImage4 from '../../assets/Shoes_3000x1200.jpg'
import bannerImage5 from '../../assets/TopDeals_3000x1200.jpg'


function Carousel() {

    const bannerImages = [bannerImage1, bannerImage2, bannerImage3, bannerImage4, bannerImage5]

    return (
        <>
            <div className='flex overflow-hidden' style={{ marginBottom: "-15vw" }}>

                {
                    bannerImages.map((image, idx) => (
                        <img key={idx} src={image} style={{ width: "100%", zIndex: "-1", maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))" }} />
                    ))
                }
            </div>

        </>
    )
}

export default Carousel