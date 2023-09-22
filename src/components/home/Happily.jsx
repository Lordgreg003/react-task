import React from 'react';
import { happily1 } from '../../images';
const Happily = () => {
  return (
    <div>
      <section>
        <div className='flex flex-row bg-[#f5fffb] gap-40 h-[600px] '>
          <div className='flex flex-col space-y-5 pl-20 '>
            <div className='flex flex-col space-y-5 pt-10 pr-56'>
              <p className='text-4xl'>Live Happily,</p>
              <p className='text-4xl'>HouseLinkUp helps you</p>
              <p className='text-4xl'>for Finding homes</p>
            </div>
            <div className='flex flex-col space-y-5 w-[600px]'>
              <p className='font-semibold text-xl'>
                Properties to rent. Find rental property listed directly from
                private landlords and letting agents from all over.
              </p>
              <p className='font-semibold text-xl'>
                and letting agents from all over. Search house for rent. Get
                Results from 8 Engines Instantly. Information 24/7. Web, Images
                & Videos. Trusted by Billions.
              </p>
            </div>
          </div>
          <div className=''>
            <img className='h-[500px] pl-10 pt-5' src={happily1} alt='' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Happily;
