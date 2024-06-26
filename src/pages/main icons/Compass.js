import React from 'react'
import compassImage from '../../assets/pages/compass page.png'

const Compass = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <img className="h-full w-full" src={compassImage} alt="vessel page" />
    </div>
  )
}

export default Compass
