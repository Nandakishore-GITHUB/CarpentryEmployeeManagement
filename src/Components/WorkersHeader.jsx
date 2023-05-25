import React, { useState } from 'react';
import Profilepic from '../assets/ProfilePicture.jpg'
import { CiMenuFries } from 'react-icons/ci'
import { Link } from 'react-router-dom';

function WorkersHeader({ title, button1, button2, link1, link2 }) {

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
                        <h1 className="lg:text-3xl md:text-lg text-2xl font-PoetSenOne font-extrabold transition-transform duration-300 hover:transform hover:scale-110 hover:text-violet-700">Muhammad</h1>
                        <p className="mt-2 text-sm font-semibold">Worker ID</p>
                    </div>
                </div>

                {/* Main Title */}

                <div className="flex-1 flex items-center justify-center">
                    <button className=" lg:-ml-0 md:-ml-16 text-gray-950 text-3xl font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl hidden sm:block py-5 px-8 sm:px-10 md:px-16 lg:px-40 mt-2 transition-transform duration-300 hover:transform hover:scale-110 active:text-violet-700">{title}</button>
                </div>

                <div>
                {/* Log out */}
                <button className="mt-2 text-white bg-red-700 font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl py-2 px-4 lg:cursor-default cursor-none transform active:scale-y-75 transition-transform">Logout</button>

                {/* Worker Role */}

                <p className="mt-4 text-sm font-semibold">Worker Role</p>
                </div>

            </header>

            {/* Title on small screens */}

            <div className="sm:hidden flex text-center justify-center mt-2">
                <p className="text-gray-950 font-bold w-2/3 py-3 bg-white shadow-[0px_0px_14px_3px_#00000024] rounded-lg hover:text-violet-700">{title}</p>
            </div>
        </div>

    );
}

export default WorkersHeader;