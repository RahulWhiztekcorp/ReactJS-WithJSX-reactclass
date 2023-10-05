import './Product.css'
import React from 'react'
import RatingStars from './RatingStars'

const ProductCard = ({title,price,image,rating}) => {

    console.log(rating)
  return (
    <div className='card'>
        <img src={image}/>
        <p>{title}</p>
        <p>${price}</p>
        <RatingStars rating={rating.rate} />
    </div>
  )
}

export default ProductCard