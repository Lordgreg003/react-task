import React from 'react';

const Drop1 = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className='dropdown'>
        <button className='rounded-xl pt-10 font-semibold' onClick={handleOpen}>
          PRICE RANGE
        </button>
        {open ? (
          <select className='rounded-l container px-10' name='' id=''>
            <option className='static' value=''>
              $200-350
            </option>
            <option className='hover:' value=''>
              $400-550
            </option>
            <option value=''>$500-650</option>
            <option value=''>$700-850</option>
            <option value=''>$900-1150</option>
          </select>
        ) : null}
        {open ? <div></div> : <div></div>}
      </div>
    </div>
  );
};

export default Drop1;
