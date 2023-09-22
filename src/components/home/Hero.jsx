import React from 'react';
import { hero1 } from '../../images';
const Hero = () => {
  return (
    <div>
      {' '}
      <section>
        <div
          className='h-[900px] space-y-8 pt-28'
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <p className='text-5xl font-semibold'>Find a home </p>
          <p className='text-5xl font-semibold'> where you can relax</p>
          <div>
            <p>
              Search house for rent. Get Results from 8 Engines Instantly.
              Information 24/7.{' '}
            </p>
            <p>Web, Images & Videos. Trusted by Billions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
