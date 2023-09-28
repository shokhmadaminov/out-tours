import React from 'react'
import Tour from './Tour'

function  ToursList({tours, handleDelete}) {

  return (
    <div className='tours-main'>
      <h1 className='title'>Our Tours</h1>
      <div className="tours-list">
        {tours.map((tour)=> {
          return <Tour key={tour.id} {...tour} handleDelete={handleDelete}/>
        })}
      </div>
    </div>
  )
}

export default ToursList