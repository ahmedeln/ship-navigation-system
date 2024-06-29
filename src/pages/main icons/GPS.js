import React from 'react'
import gpsImage from '../../assets/main_icons/background.png'
import MapComponent from '../../components/Map'

// import GoogleMapComponent from '../tester2'

const GPS = () => {
  const att1 = "24 29.331'N "
  const att2 = "118 06.900'E "
  const att3 = 7
  const att4 = 44
  const att5 = "63.3 Kt"
  const x = 29.85
  const y = 31.2
  return (
    <div
      className=" text-white h-screen w-screen"
      style={{
        backgroundImage: `url(${gpsImage})`,
        backgroundSize: '100% 100%', // Stretches the image to fit the container
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '8px',
      }}
    >
      <div className="flex flex-col h-full">
        <div className="h-5/6 ">
          <div className="flex flex-row h-full">
            <div className="w-1/3 h-full">
              <div className="flex flex-col h-full">
                <div className="h-1/3 bg-blue-500 text-6xl flex justify-center items-center">
                  <span>Level : </span>
                  <b className="ml-5">{att3}</b>
                </div>
                <div className="h-1/3 bg-green-600 text-6xl flex justify-center items-center">
                <span>COG (M) : </span>
                <b className="ml-5">{att4}</b>
                </div>
                <div className="h-1/3 bg-violet-600 text-6xl flex justify-center items-center">
                <span>SOG : </span>
                <b className="ml-5">{att5}</b>
                </div>
              </div>
            </div>
            <div className="w-2/3 bg-red-600 ">
              <MapComponent x={x} y={y}/>
              {/* <GoogleMapComponent x={50} y={60} /> */}
            </div>
          </div>
        </div>
        <div className="h-1/5 w-1/3 bg-blue-950 text-2xl">
          <div className="flex flex-col h-full justify-center items-center">
            <div className="h-1/2  flex justify-center items-center">
              <b>{att1}</b>
            </div>
            <div className="h-1/2 flex justify-center items-center">
              <b>{att2}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GPS
