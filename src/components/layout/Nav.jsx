import React from 'react';
import { image1 } from '../../images';
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <div>
      <section className=' container px-auto relative  items-center bg-[#cbd0d0]  '>
        <div className='flex   justify-between  items-center pt-12 '>
          <div className='flex flex-row space-x-5 items-center '>
            <img src={image1} alt='' />
            <p className='text-3xl text-[#4ba586] font-semibold'>HouseLinkUp</p>
          </div>
          <div className=' space-x-10 flex '>
            <Link className='text-[#4ba586]'>Home</Link>
            <Link>Property</Link>
            <Link>About</Link>
            <Link>Service</Link>
            <Link>Contact</Link>
          </div>
          <div className='space-x-4'>
            <Link className='border bg-white text-[#4ba586] px-10 py-4 border-[#69b99d]'>
              Sign up
            </Link>
            <Link className='border bg-[#69b99d] text-white px-10 py-4 border-[#69b99d]'>
              Sign up
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
