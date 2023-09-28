import React, { useState } from 'react'

function Tour({image, name, id, price, info, handleDelete}) {
  const [readMore, setReadMore] = useState(false)
  return (
    <div className='tour-card'>
      <img className='tour-card-image' src={image} alt={name} />
      <div className="tour-card-content">
        <h2 className='tour-card-title'>{name}</h2>
        <p className="tour-card-info">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='tour-card-info-btn' onClick={()=> setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className='tour-card-btn' onClick={()=> handleDelete(id)}>Not interested</button>
        <h3 className='tour-card-price'>${price}</h3>
      </div>
    </div>
  )
}

export default Tour