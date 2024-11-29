import React from 'react'

const ProductPopUpDisplay = ({images, name,newPrice, oldPrice, title, colors, ratings, id, discount, newProduct, price, quantity}) => {
  return (
    <div>
        {
            images.map((image) => (
                <img alt='img' src={image.image}></img>
            ))
        }
    </div>
  )
}

export default ProductPopUpDisplay;