import React, { useEffect, useState } from 'react'
import ToursList from './components/ToursList'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  function handleDelete(id) {
    const newTours = tours.filter((tour)=> {
      return tour.id !== id
    })
    setTours(newTours)
  }

  async function getData() {
    setLoading(true)
    try { 
      const response = await fetch(url)
      if(response.status !== 200) {
        throw new Error("Api dan ma'lumot kelmadi!!!")
      }
      const tours = await response.json()
      setTours(tours)
      setLoading(false)
    } 
    catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  }

  useEffect(()=>{
    getData()
  }, [])

  if(loading) {
    return <div className='loading'>
      <h2>Loading...</h2>
    </div>
  }

  if(tours.length === 0) {
    return <div className='tours-empty'>
      <h2>No Tours Left</h2>
      <button className='btn' onClick={getData}>Refresh</button>
    </div>
  }

  return (
    <div>
      <ToursList tours={tours} handleDelete={handleDelete}/>
    </div>
  )
}

export default App