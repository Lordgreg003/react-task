import React from 'react';
import { ready } from '../../images';

const Ready = () => {
  return (
    <div>
      <section>
        <div
          className='h-[300px] mx-20 flex flex-col md:flex-row container gap-5'
          style={{ backgroundImage: `url(${ready})` }}
        >
          <div className='flex flex-col w-1/2 justify-center'>
            <p className='text-white text-4xl font-semibold'>
              Ready to find your
            </p>
            <p className='text-white text-4xl font-semibold'>New Place?</p>
          </div>
          <div className='flex flex-col justify-center '>
            <input
              className='w-[500px]   bg-white py-6 rounded-xl'
              type='text'
              placeholder='Email Address:'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ready;
