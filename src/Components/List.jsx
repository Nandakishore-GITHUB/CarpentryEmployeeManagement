import React from 'react';
import { FiEdit } from 'react-icons/fi';

function List() {
  return (
    <div className="flex flex-row items-center pt-7 lg:px-9 px-6 xl:-ml-0 -ml-8 xl:space-x-40">

      <div className="flex lg:w-60 md:w-48 lg:h-52 md:h-48 mx-6 my-10 relative">
        <div className="bg-white flex items-center justify-center shadow-md w-full rounded-lg p-6">
          <div className="flex flex-col gap-5">
            <div>
              <button className="text-gray-700 font-semibold text-2xl bg-slate-500 rounded-lg lg:w-56 md:w-40 h-12 p-1 hover:text-violet-700 active:bg-violet-700 active:text-white">Projects</button>
            </div>
            <div>
              <button className="text-gray-700 font-semibold text-2xl bg-slate-500 rounded-lg lg:w-56 md:w-40 h-12 p-1 hover:text-violet-700 active:bg-violet-700 active:text-white">Workers</button>
            </div>
            <div>
              <button className="text-gray-700 font-semibold text-2xl bg-slate-500 rounded-lg lg:w-56 md:w-40 h-12 p-1 hover:text-violet-700 active:bg-violet-700 active:text-white">Timings</button>
            </div>
          </div>
        </div>
      </div>




      <div className="flex flex-col w-full max-w-5xl rounded-lg bg-slate-300 bg-opacity-25 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:gap-x-60 lg:gap-x-36 md:gap-x-12 md:ml-0 md:w-full">
          <p className="font-bold col-span-1 md:ml-5">Projects</p>
          <p className="font-bold col-span-1 md:text-right">Project ID</p>
          <button className="font-bold text-sm md:text-base col-span-1 bg-violet-700 bg-opacity-70 object-contain w-24 md:w-32 xl:w-36 rounded-lg hover:text-slate-200 transform active:scale-75 transition-transform">
            New Project
          </button>
        </div>
        <div className="flex flex-col gap-5 mt-9 w-full relative bg-slate-50 rounded-lg shadow-md p-4">
          <ListItem name="Project 1" id="AB1354" />
          <ListItem name="Project 2" id="CD2468" />
          <ListItem name="Project 3" id="EF3691" />
        </div>
      </div>
    </div>
  );
}

function ListItem({ name, id }) {
  return (
    <div className="flex items-center justify-between p-2 border-b-2 space-x-9 hover:text-violet-700">
      <p className="font-bold">{name}</p>
      <p className="font-bold">{id}</p>
      <div className="ml-auto">
        <FiEdit className="text-xl transform active:scale-75 transition-transform" />
      </div>
    </div>
  );
}

export default List;
