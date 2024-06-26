import React from 'react'
import echoImage from '../../assets/pages/echo page.png'

const Echo = () => {
  return (
    <div className="h-screen flex items-center justify-center">
            <img className="h-full w-full" src={echoImage} alt="vessel page" />
        </div>
  )
}

export default Echo
