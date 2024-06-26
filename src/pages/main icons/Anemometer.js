import React from 'react'
import anemometerImage from '../../assets/pages/anemometer page.png'

const Anemometer = () => {
  return (
    <div className="h-screen flex items-center justify-center">
            <img className="h-full w-full" src= {anemometerImage} alt="vessel page" />
        </div>
  )
}

export default Anemometer
