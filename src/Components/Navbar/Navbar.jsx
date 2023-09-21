import React, { useState } from 'react';
import { FaBeer,FaBars,} from 'react-icons/fa';
const Navbar = () => {
    const [open, setOpen]= useState(false);
    let Links =[
        {name:"Home"},
        
        {name:"About"},
        {name:"Blog"},
        {name:"Contact"},
      ];
    return (
      <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown  ">
          
          <label tabIndex={0} className="btn btn-ghost lg:hidden">Menu
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm  dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 w-52">
          <li ><a className='hover:text-red-600'>Home</a></li>
          
          <li><a className='hover:text-red-600'>About</a></li>
          <li><a className='hover:text-red-600'>Blog</a></li>
            <li><a className='hover:text-red-600'>Contact</a></li>

          </ul>
        </div>
        
      </div>
      <div className="navbar-center hidden lg:flex -ml-32">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li ><a className='hover:text-red-600 mr-4'>Home</a></li>
          
          <li><a className='hover:text-red-600 mr-4'>About</a></li>
          <li><a className='hover:text-red-600 mr-4'>Blog</a></li>
            <li><a className='hover:text-red-600 mr-4'>Contact</a></li>
        </ul>
      </div>
      
    </div>
    );
};

export default Navbar;