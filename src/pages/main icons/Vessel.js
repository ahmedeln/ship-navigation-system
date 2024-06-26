import React from 'react'
import vesselImage from '../../assets/pages/vessel page.png'

const Vessel = () => {
  return (
    <div className="h-screen flex items-center justify-center">
            <img className="h-full w-full" src= {vesselImage} alt="vessel page" />
        </div>
  )
}

export default Vessel
