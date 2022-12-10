import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='border-b4 border-green-700 text-center fixed top-0 bg-green-600 font-bold w-full text-lg text-white'>
      <ul>
        <li className='inline-block py-4'>
          <Link to-to='/' className='pl-6 pr-8'>
            Home
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to-to='/about' className='pl-6 pr-8'>
            About
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to-to='/articles' className='pl-6 pr-8'>
            Home
          </Link>
        </li>
        <li className='inline-block py-4'>
          <Link to-to='/' className='pl-6 pr-8'>
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
