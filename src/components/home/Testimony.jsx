import React from 'react';
import { testimony1 } from '../../images';
const Testimony = () => {
  return (
    <div>
      <section>
        <div className='container relative flex flex-col items-center md:flex-row mt-40 bg-[#f5fffb]'>
          <div className='w-1/2 '>
            <img className='pl-14 w-[500px] pt-20' src={testimony1} alt='' />
          </div>
          <div className=' pt-10 flex flex-col   w-1/2'>
            <p className='font-bold text-4xl '>
              GentAfrica made my life easy. <br />
              It helped me with the search <br />
              for the first ever <br /> investment.They were an <br />
              absolute pleasure to work with <br /> from the beginning to <br />
              completion. Thanks to the <br /> team
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimony;
