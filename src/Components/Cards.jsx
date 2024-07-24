import React from 'react'
import '../Styles/card.css'
const Cards = ({item,handler}) => {
    const{title,img,price,author,}=item;
  return (
    <div className='cards'>
        <div className='image_box'>
        <img src={img}  />
        </div>
        <div className='details'>
            <p>{title}</p>
            <p>{author}</p>
            <p>Price-{price} RS</p>

            <button onClick={()=>handler(item)}>Add to Cart</button>
        </div>
      
    </div>
  )
}

export default Cards