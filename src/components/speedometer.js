// Speedometer.js
import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import backgroundImage from '../assets/main_icons/background.png'; 


const Speedometer = ({ speed, min , max }) => {
  const containerStyle = {
    width: '200px', // Adjust width as needed
    height: '200px', // Adjust height as needed
    position: 'relative',
    transform: 'rotate(135deg)', // Rotate to make 3/4 circle
  };

  const speedometerStyle = {
    position: 'absolute',
    transform: 'rotate(-135deg)', // Counter-rotate to align
  };

  return (
    <div className='mt-20 ml-64 text-white'>
        <div style={containerStyle}>
      <div style={speedometerStyle}>
        <ReactSpeedometer
          value={speed}
          minValue={min}
          maxValue={max}
          needleColor="red"
          startColor="green"
          segments={10}
          endColor="blue"
          radius={150} 
          ringWidth={20} 
        />
      </div>
    </div>
    </div>
  );
};

export default Speedometer;
