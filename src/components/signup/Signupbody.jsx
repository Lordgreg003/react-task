import React from 'react';
import { image3 } from '../../images/index';
import { image1 } from '../../images/index';
import { Link } from 'react-router-dom';

const Signupbody = () => {
  return (
    <div>
      <section className='container relative '>
        <div className='container flex flex-row'>
          <div className='container hidden md:flex '>
            <img className=' ' src={image3} alt='' />
          </div>
          <div className='container flex flex-col items-center'>
            <div className='container flex flex-row items-center   space-x-4'>
              <img className='pl-6 pt-8' src={image1} alt='' />
              <p className='font-normal text-2xl text-[#4ba586] pt-10'>
                HouseLinkUp
              </p>
            </div>
            <div className='space-y-4 container flex flex-col items-center'>
              <h1 className='text-5xl pt-8'>Sign Up</h1>
              <p className='text-2xl'>Get started absolutely free</p>
              <input
                className='border-[#e5e7eb] border-2 border-solid outline-none rounded-xl w-1/2  h-10 py-6 pl-3'
                type='text'
                placeholder='Full Name...'
              />
              <input
                className='border-[#e5e7eb] border-2 border-solid outline-none rounded-xl w-1/2  h-10 py-6 pl-3'
                type='text'
                placeholder='User Name...'
              />
              <input
                className='border-[#e5e7eb] border-2 border-solid outline-none rounded-xl w-1/2  h-10 py-6 pl-3'
                type='text'
                placeholder='Enter Email...'
              />
              <input
                className='border-[#e5e7eb] border-2 border-solid outline-none rounded-xl w-1/2  h-10 py-6 pl-3'
                type='text'
                placeholder='Password...'
              />
              <input
                className='border-[#e5e7eb] border-2 border-solid outline-none rounded-xl w-1/2  h-10 py-6 pl-3'
                type='text'
                placeholder='Confirm Password...'
              />
              <span>
                <button className='bg-[#69b99d] w-[330px] h-10 rounded-md'>
                  Create account
                </button>
              </span>
              <div className='flex flex-row space-x-2 pr-28'>
                <span>have an account?</span>
                <Link className='text-[#69b99d]' to={'/login'}>
                  Login
                </Link>
                {/* <a href='#' >
                  sign Up!
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signupbody;
