import React from 'react';
import { image1 } from '../../images';
import { facebook } from '../../images';
import { linkdin } from '../../images';
import { insta } from '../../images';
import { twitter } from '../../images';
import { Link } from 'react-router-dom';

const Foot = () => {
  return (
    <div>
      {' '}
      <section>
        <div className='contaner flex flex-row h-[300px] w-screen  mt-5'>
          <div className='w-1/3  flex flex-col  gap-10'>
            <div className='flex flex-row'>
              <img className='w-[100px] pt-8 pl-5' src={image1} alt='' />
              <p className='pt-12 text-3xl text-[#4ba586] font-semibold pl-4'>
                HouseLinkup
              </p>
            </div>
            <p className='text-l'>
              Properties to rent. Find rental property listed directly from{' '}
              <br /> private landlords and letting agents from all over.
            </p>
            <div className='flex flex-row gap-10 pl-10 pt-5'>
              <img src={facebook} alt='' />
              <img src={linkdin} alt='' />
              <img src={insta} alt='' />
              <img src={twitter} alt='' />
            </div>
          </div>
          <div className='w-1/5  flex flex-col gap-5 justify-center'>
            <p className='font-bold text-2xl'>Resorces</p>
            <Link>Feature</Link>
            <Link>Pricing</Link>
            <Link>Login</Link>
            <Link>Signup</Link>
          </div>
          <div className='w-1/5  flex flex-col gap-5 justify-center'>
            <p className='font-bold text-2xl'>Legal</p>
            <Link>Term of use</Link>
            <Link>Privacy policy</Link>
            <Link>Legal notice</Link>
          </div>
          <div className='w-1/5  flex flex-col gap-5 justify-center'>
            <p className='font-bold text-2xl'>Links</p>
            <Link>Feed back</Link>
            <Link>Agents</Link>
            <Link>About us</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foot;
