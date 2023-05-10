import React, { useState } from 'react';
import Profilepic from '../assets/ProfilePicture.jpg'
import { CiMenuFries } from 'react-icons/ci'

function Header({title, button1, button2}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div>

      <header className="bg-white py-2 px-4 border-b-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src={Profilepic} alt="Profile" className="w-20 h-20 rounded-xl mr-3 transition-transform duration-300 hover:transform hover:scale-110" />
          <div className='ml-1'>
            <h1 className="text-3xl font-PoetSenOne font-extrabold transition-transform duration-300 hover:transform hover:scale-110 hover:text-violet-700">Lego</h1>
            <p className="mt-2 text-sm font-semibold">Admin</p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <button className="text-gray-950 text-3xl font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl hidden sm:block py-5 px-8 sm:px-10 md:px-20 lg:px-40 mt-2 transition-transform duration-300 hover:transform hover:scale-110 active:text-violet-700">{title}</button>
        </div>

        <div className="space-x-3 p-7 items-center hidden sm:block">
          <button className=" text-gray-950 font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl py-2 px-4 mr-2 transition-transform duration-300 hover:transform hover:scale-110 active:text-violet-700">{button1}</button>
          <button className=" text-gray-950 font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl py-2 px-4 transition-transform duration-300 hover:transform hover:scale-110  active:text-violet-700">{button2}</button>
        </div>

        <div className="block sm:hidden relative ml-auto">
          <button className="flex items-center px-3 py-2 bg-slate-50 border border-gray-400 rounded transition-transform duration-300 hover:transform hover:scale-110"
            onClick={toggleMenu}>
            <CiMenuFries className=' size="30" ' />
          </button>
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10">
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-violet-700">{button1}</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-violet-700">{button2}</a>
            </div>
          )}
        </div>
      </header>

      <div className="sm:hidden flex text-center justify-center">
        <p className="text-gray-950 font-bold w-1/3 h-7 shadow-[0px_0px_14px_3px_#00000024] rounded-xl mt-2 hover:text-violet-700">{title}</p>
      </div>
    </div>

  );
}

export default Header;