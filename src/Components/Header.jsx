import React, { useState } from 'react';
import Profilepic from '../assets/ProfilePicture.jpg'
import { CiMenuFries } from 'react-icons/ci'
import { Link } from 'react-router-dom';

function Header({title, button1, button2, link1, link2}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div>

      <header className="bg-white py-2 px-4 border-b-2 flex items-center justify-between">

      {/* Profile Section */}

        <div className="flex items-center">
          <img src={Profilepic} alt="Profile" className="w-20 h-20 rounded-xl mr-3 transition-transform duration-300 hover:transform hover:scale-110" />
          <div className='ml-1'>
            <h1 className="text-3xl font-PoetSenOne font-extrabold transition-transform duration-300 hover:transform hover:scale-110 hover:text-violet-700">Lego</h1>
            <p className="mt-2 text-sm font-semibold">Admin</p>
          </div>
        </div>

        {/* Main Title */}

        <div className="flex-1 flex items-center justify-center">
          <button className=" lg:-ml-0 md:-ml-16 text-gray-950 text-3xl font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl hidden sm:block py-5 px-8 sm:px-10 md:px-16 lg:px-40 mt-2 transition-transform duration-300 hover:transform hover:scale-110 active:text-violet-700">{title}</button>
        </div>

        {/* Button Section */}

        <div className="space-x-3 items-center hidden lg:block">
        <Link to={link1}>
          <button className=" text-gray-950 font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl py-2 px-4 mr-2 transition-transform duration-300 hover:transform hover:scale-110 active:text-violet-700">{button1}</button>
        </Link>
        <Link to={link2}>
          <button className=" text-gray-950 font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl py-2 px-4 mr-2 transition-transform duration-300 hover:transform hover:scale-110  active:text-violet-700">{button2}</button>
        </Link>
        <Link to={link2}>
          <button className=" text-gray-950 font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl py-2 px-4 transition-transform duration-300 hover:transform hover:scale-110  active:text-violet-700">{button2}</button>
        </Link>
        </div>
        

        {/* options on medium screens and below */}

        <div className="block lg:hidden relative ml-auto">
          <button className="flex items-center px-3 py-2 bg-slate-50 border border-gray-400 rounded transition-transform duration-300 hover:transform hover:scale-110"
            onClick={toggleMenu}>
            <CiMenuFries className=' size="30" ' />
          </button>
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10">
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-violet-700">{button1}</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-violet-700">{button2}</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-violet-700">Reports</a>
            </div>
          )}
        </div>
      </header>

        {/* Title on small screens */}

      <div className="sm:hidden flex text-center justify-center mt-2">
        <p className="text-gray-950 font-bold w-2/3 py-3 bg-white shadow-[0px_0px_14px_3px_#00000024] rounded-lg hover:text-violet-700">{title}</p>
      </div>
    </div>

  );
}

export default Header;