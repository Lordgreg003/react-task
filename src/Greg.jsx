import React from 'react';

const Greg = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className='dropdown'>
      <button className='rounded-xl pt-10 font-semibold' onClick={handleOpen}>
        LOCATIONS
      </button>
      {open ? (
        <select className='rounded-l container px-10' name='' id=''>
          <option className='' value=''>
            abia
          </option>
          <option className='hover:' value=''>
            adamawa
          </option>
          <option value=''>akawibom</option>
          <option value=''>anambra</option>
          <option value=''>bauchi</option>
          <option value=''>bayelsa</option>
          <option value=''>benue</option>
          <option value=''>boronu</option>
          <option value=''>crossriver</option>
          <option value=''>delta</option>
          <option value=''>ebony</option>
          <option value=''>edo</option>
          <option value=''>ekiti</option>
          <option value=''>enugu</option>
        </select>
      ) : null}
      {open ? <div></div> : <div></div>}
    </div>
  );
};

export default Greg;
