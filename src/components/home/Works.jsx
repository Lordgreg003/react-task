import React from 'react';
import { works1 } from '../../images';
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <div>
      {' '}
      <section className=''>
        <div className='flex flex-row'>
          <div className='flex flex-col w-1/4 items-center justify-center space-y-8'>
            <div className='flex flex-row items-center space-x-3 rounded-full'>
              <div className='rounded-full bg-[#69b99d] w-10 text-white'>
                <div className='flex items-center space-x-2 rounded-full' />
                <div className='px-4 py-2 text-white rounded-full w-5 bg-[#69b99d]' />
                1
              </div>
              <Link className='font-bold text-3xl'>search</Link>
            </div>
            <div className='flex flex-row items-center space-x-3'>
              <div className='rounded-full bg-[#979797] w-10 text-white'>
                <div className='flex items-center space-x-2' />
                <div className='px-4 py-2 text-white rounded-full w-5 bg-[#979797]' />
                2
              </div>
              <Link className='font-bold text-3xl'>choose</Link>
            </div>
            <div className='flex flex-row items-center space-x-3 text-white'>
              <div className='rounded-full bg-[#979797] w-10 '>
                <div className='flex items-center space-x-2' />
                <div className='px-4 py-2 text-white rounded-full w-5 bg-[#979797]' />
                3
              </div>
              <Link className='font-bold text-3xl text-black'>contact</Link>
            </div>
            <div className='flex flex-row items-center space-x-8'>
              <div className='rounded-full bg-[#979797] w-10 text-white'>
                <div className='flex items-center space-x-2' />
                <div className='px-4 py-2 text-white rounded-full w-5 bg-[#979797]' />
                4
              </div>
              <Link className='font-bold text-3xl'>book</Link>
            </div>
          </div>
          <div>
            <img src={works1} alt='' />
          </div>
        </div>
        <div className=' justify-center flex flex-row'>
          <div className='border bg-[#69b99d] w-[500px]  h-[100px] -m-10 text-white items-center  flex flex-col '>
            <p className='text-xl pt-5'>
              Find rental property listed directly{' '}
            </p>
            <p className='text-xl'>
              landlords and letting agents from all over.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Works;
