import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const starRating = Math.round(rating); // Round the rating to the nearest whole number

  return (
    <div>
      {Array.from({ length: starRating }, (_, index) => (
        <FaStar key={index}/>
      ))}
    </div>
  );
};

export default RatingStars;