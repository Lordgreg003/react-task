import React from 'react';
import Greg from '../../Greg.jsx';
import { Link } from 'react-router-dom';
import { Drop } from './dropdownlist/index.js';
import { Drop1 } from './dropdownlist/index.js';
import { advantage1 } from '../../images/index.js';
import { advantage2 } from '../../images/index.js';
import { advantage3 } from '../../images/index.js';

const Advantage = () => {
  return (
    <div>
      <section className='container flex  relative w-screen  '>
        <div className=' h-[1200px] w-screen  flex flex-col'>
          <div className='flex flex-row h-96  space-x-10 '>
            <Greg />
            <Drop />
            <Drop1 />
            <button className='border px-11 h-16 mt-8 bg-[#69b99d]'>
              Search
            </button>
          </div>
          <div className='flex flex-col'>
            <p className='text-5xl font-semibold'>Advantages of HouseLinkUp</p>
            <div className='flex flex-row w-full h-80 items-center justify-center gap-10 mt-16'>
              <div className=' w-1/4 h-[320px] border space-y-3 border-[#e5e7eb]'>
                <img className='pl-36 pt-5' src={advantage1} alt='' />
                <p className='font-semibold text-xl pt-16'>
                  Property Insurance
                </p>
                <p className='text-[#9b9b9b] text-lg'>
                  No longer have to negotiate commissions as haggle with other
                  agents
                </p>
              </div>
              <div className=' w-1/4 h-[320px] border space-y-3 items-center border-[#e5e7eb]'>
                <img className='pl-36 pt-5' src={advantage2} alt='' />
                <p className='font-semibold text-xl pt-16'>Lowest Commission</p>
                <p className='text-[#9b9b9b] text-lg'>
                  No longer have to negotiate commissions as haggle with other
                  agents
                </p>
              </div>
            </div>
            <div className='w-full mt-10 flex flex-row justify-center items-center'>
              <div className='h-[320px] w-1/4 border space-y-3 items-center border-[#e5e7eb] '>
                <img className='pl-36 pt-5' src={advantage3} alt='' />
                <p className='font-semibold text-xl pt-16'>Tag Advantage</p>
                <p className='text-[#9b9b9b] text-lg'>
                  No longer have to negotiate commissions as haggle with other
                  agents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advantage;
