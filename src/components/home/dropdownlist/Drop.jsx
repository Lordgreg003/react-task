import React from 'react';

const Drop = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className='dropdown'>
      <button className='rounded-xl pt-10 font-semibold' onClick={handleOpen}>
        HOUSE TYPE
      </button>
      {open ? (
        <select className='rounded-l container px-10' name='' id=''>
          <option className='static' value=''>
            1 bedroom
          </option>
          <option className='hover:' value=''>
            2 bedroom
          </option>
          <option value=''>3 bedroom</option>
          <option value=''>4 bedroom</option>
          <option value=''>5 bedroom</option>
          <option value=''>6 bedroom</option>
          <option className='static' value=''>
            {' '}
            Rent
          </option>
          <option value=''>1 bedroom</option>
          <option value=''>2 bedroom</option>
          <option value=''>3 bedroom</option>
          <option value=''>4 bedroom</option>
          <option value=''>5 bedroom</option>
          <option value=''>6 bedroom</option>
        </select>
      ) : null}
      {open ? <div></div> : <div></div>}
    </div>
  );
};

export default Drop;
