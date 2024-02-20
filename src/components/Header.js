import React from 'react';
import { Link } from 'react-scroll';
// import logo from '../assets/logo.svg'

const Header = () => {
  return <div className=' py-8'>
    <div className="container mx-auto">
    <div className='flex justify-between items-center'> 
      <a href='#'>
        <div className='text-[28px] font-bold leading-[0.7] lg:text-[30px] '><p className='mb-1'>RAJESH</p><p className='text-[28px] font-bold leading-[0.7] lg:text-[35px] icon-color '>BAKHREL</p></div>
      </a>
      <button className='btn btn-sm'><Link smooth={true} spy={true}  to='contact'> Work With me</Link></button>
    </div>
    </div>
  </div>;
};

export default Header;
