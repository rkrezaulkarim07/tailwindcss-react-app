import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link to='/' className='p-4'>
        Home
      </Link>
      <Link to='/View-Details' className='p-4'>
        View Details
      </Link>
      <Link to='/about' className='p-4'>
        About
      </Link>
      <Link to='/contact' className='p-4'>
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;