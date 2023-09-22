import React from 'react';
import { image1 } from '../../images/index.js';

import { toggle1 } from '../../images/index.js';
import { image2 } from '../../images/index.js';
import { Link } from 'react-router-dom';
const Loginbody = () => {
  return (
    <div>
      <section className='relative container mx-auto md:space-y-0'>
        {/* ist div */}
        <div className='container flex flex-col md:flex-row'>
          <div className='flex flex-col container bg-white mx-auto'>
            <div className='flex flex-row  container items-center pt-5 space-x-4'>
              <img className='pl-5' src={image1} alt='' />
              <p className='text-2xl text-[#4ba586] font-bold'>HouseLinkUp</p>
            </div>
            <div className='flex flex-col items-center space-y-6'>
              <h1 className='text-5xl'>Welcome Back</h1>
              <p className='font-normal text-xl'>Login into your account</p>
              <input
                className='border-[#e5e7eb] border-2 border-solid outline-none rounded-xl w-1/2  h-10 py-6 pl-3'
                type='text'
                placeholder='Enter Email...'
              />

              <input
                className='border-[#e5e7eb] border-2 border-solid outline-none rounded-xl w-1/2 h-10 py-6 pl-3'
                type='text'
                placeholder='Password...'
              />
              <div className='flex flex-row space-x-14 items-center'>
                <div className='flex flex-row items-center'>
                  <img className='w-14 ' src={toggle1} alt='' />
                  <span className=''>Remember me </span>
                </div>
                <a href='#' className='text-[#d93f21]'>
                  Recover password
                </a>
              </div>
              <div>
                <span>
                  <button className='bg-[#69b99d] w-[340px] h-10 rounded-md'>
                    Login
                  </button>
                </span>
              </div>
              <div className='flex flex-row space-x-8'>
                <span>Don’t have an account?</span>
                <Link className='text-[#69b99d]' to={'/signup'}>
                  Signup
                </Link>
              </div>
            </div>
          </div>
          <div className='hidden container -mr-8 md:flex flex-col'>
            <img className=' bg-cover m-0' src={image2} alt='' />
          </div>
        </div>
      </section>{' '}
    </div>
  );
};

export default Loginbody;
