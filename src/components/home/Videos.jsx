import React from 'react';
import { video } from '../../videos/index';
const Videos = () => {
  return (
    <div>
      <section>
        <div className='w-screen pt-10 container justify-center'>
          <video
            className='w-[180vh] ml-20'
            src={video}
            controls='controls'
            autoPlay='true'
          ></video>
        </div>
        <div className='w-full h-[150px]  flex flex-row justify-end container'>
          <div className='border h-[200px] bg-[#69b99d] z-40 -m-24 mr-20 w-1/4 border-green-300 '>
            <p className='text-white text-3xl '>Explore all </p>
            <p className='text-white text-3xl'>your needs at a</p>
            <p className='text-white text-3xl'>glance</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
