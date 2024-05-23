import React from 'react'

function DisplayStarRating(props) {

    const rating = props.star;
    const stars = [];

    // Calculate the number of full stars
    const fullStars = Math.floor(rating);

    // Check if there is a half star
    const hasHalfStar = (rating * 10) % 10;

    // Create full stars
    let idx = 1;
    for (; idx <= fullStars; idx++) {
        stars.push(<span key={idx}>
            <i class="fa-solid fa-star text-amber-500"></i>
        </span>);
    }

    // Add half star if necessary
    if (hasHalfStar) {
        stars.push(<span key={idx}>
            <i class="fa-solid fa-star-half-stroke text-amber-500"></i>
        </span>);

        idx++;
    }

    // Calculate the number of remaining empty stars
    const remainingStars = 5 - stars.length;

    // Create empty stars

    for (let i = 0; i < remainingStars; i++) {
        stars.push(<span key={i + idx}>
            <i class="fa-regular fa-star text-amber-500"></i>
        </span>);
    }

    return (
        <div>{stars}</div>
    )
}

export default DisplayStarRating;