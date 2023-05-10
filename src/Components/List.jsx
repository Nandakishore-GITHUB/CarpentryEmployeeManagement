import React from 'react';
import { FiEdit } from 'react-icons/fi';

function List() {
  return (
    <div className="flex flex-col items-center justify-center pt-7">
      <div className="flex flex-col w-11/12 md:max-w-5xl relative rounded-lg items-center justify-center bg-slate-300 bg-opacity-25">
        <div className="grid grid-cols-1 md:grid-cols-3 -ml-64 md:w-full md:ml-24 mt-5 px-6 md:px-0">
          <p className="font-bold absolute translate-x-5">Projects</p>
          <p className="font-bold absolute ml-36 md:ml-2 md:translate-x-96">Project ID</p>
          <button className="font-bold text-sm md:text-base absolute translate-x-96 -ml-20 md:ml-96 bg-violet-700 bg-opacity-70 object-contain w-24 md:w-36 rounded-lg hover:text-slate-200 transform active:scale-75 transition-transform">
            New Project
          </button>
        </div>
        <div className="flex flex-col gap-5 mt-9 w-11/12 relative bg-slate-50 rounded-lg shadow-md p-4 m-2">
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
    <div className="flex flex-col md:space-x-12 p-2 relative md:flex-row border-b-2 hover:text-violet-700">
      <p className="font-bold mb-2 md:mb-0 md:mr-auto">{name}</p>
      <p className="font-bold md:w-1/2">{id}</p>
      <div className="ml-auto flex items-center">
        <FiEdit className="text-xl transform active:scale-75 transition-transform" />
      </div>
    </div>
  );
}

export default List;
