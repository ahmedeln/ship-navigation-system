import React from 'react';
import { Progress, MantineProvider } from '@mantine/core';
import backgroundImage from '../../assets/main_icons/background.png'

const Speed = () => {
  const speed = 10.8;
  const trip = '1136.49 NM';
  const total = '13545.97 NM';

  return (
    <div className="flex flex-col h-screen text-white"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem',
        borderRadius: '8px',
}}>
      <div className="flex h-1/4 justify-center items-center text-6xl">
        <span className="w-1/2 flex justify-center"><p>Speed</p></span>
        <span className="w-1/2 flex justify-center"><p>STW</p></span>
      </div>
      <div className="h-1/2 flex justify-center mt-20">
        <p className="text-9xl text-white">
          <span className="pr-4">&#9650;</span><sub>{speed}<sub><span className="pl-4">kn</span></sub></sub>
        </p>
      </div>
      <div className="flex pb-10  ">
        <div className="w-1/2 flex justify-center pr-96 ">
          <MantineProvider>
            <div className="w-32 mt-2 pr-80 pt-40">
              <div className="flex justify-between text-xs  mb-1">
                <span className="mr-14">0</span>
                <span className="mr-14">20</span>
                <span className="mr-16" >40</span>
                <span className="mr-16">60</span>
                <span className="mr-16" >80</span>
                <span >100</span>
              </div>
              <div className ="w-96">
              <Progress
                value={80}
                size="xl"
                color="yellow"
              />
              </div>
            </div>
          </MantineProvider>
        </div>
        <div className="w-1/2 flex flex-col items-center text-5xl pt-20">
          <b className="mb-5">Trip : {trip}</b>
          <b>Total : {total}</b>
        </div>
      </div>
    </div>
  );
};

export default Speed;
