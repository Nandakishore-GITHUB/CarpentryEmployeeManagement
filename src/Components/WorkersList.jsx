import React, { useState } from 'react';
import { FiPlus, FiMinus, FiEdit } from 'react-icons/fi';

function WorkersList(props) {
  const [PrjtExpand, SetPrjtExpand] = useState(false);

  const [selectedKey, setSelectedKey] = useState('');

  const handleOnClick = (key) => {
    setSelectedKey(key);
  };

  const { projects } = props;
  const { value } = props;

  return (
    <div className="flex flex-col items-center justify-center pt-7 px-4 pb-3">
      <div className="flex flex-col w-screen p-3 lg:p-0 md:p-0 lg:w-3/4 md:w-full max-w-2x rounded-lg items-center justify-center bg-slate-400 bg-opacity-25">

        <div className="flex flex-row 2xl:space-x-40 xl:space-x-24 space-x-6 2xl:ml-10 xl:ml-8 ml-4 my-1">
          <p className="font-bold md:text-base text-sm mt-2 rounded-md bg-slate-50 px-2">Project ID</p>
          <p className="font-bold md:text-base text-sm mt-2 rounded-md bg-slate-50 px-2">Project Name</p>
          <p className="font-bold md:text-base text-sm mt-2 rounded-md bg-slate-50 px-2">Nick Name</p>
          <p className="font-bold md:text-base text-sm mt-2 rounded-md bg-slate-50 px-2">Project Manager</p>
          <p className="font-bold md:text-base text-sm mt-2 rounded-md bg-slate-50 px-2">Catagory</p>
        </div>

        {/* Projects and Details */}

        {projects.filter(item => {
          if (value) {
            const searchTerm = value.toLowerCase()
            for (let key in item) {
              if (item[key].toString().toLowerCase().includes(searchTerm)) {
                return true
              }

            }
            return false
          }
          return true;
        })
          .map((project) => (
            <div
              key={project['Project ID']}
              className="relative w-full md:w-11/12 sm:w-fit bg-slate-50 rounded-lg shadow-[0px_0px_14px_3px_#00000024] p-4 m-4 transition-transform duration-300 md:hover:transform md:hover:scale-105 hover:text-violet-700"
              onClick={() => {
                SetPrjtExpand(true);
                handleOnClick(project['Project ID']);
              }}
            >
              <div className="w-fit md:-ml-0 -ml-3">
                {PrjtExpand && selectedKey === project['Project ID'] ? (
                  <div className="flex absolute items-center mt-1">
                    <input checked type="radio" value="" name="active-task" className="w-4 h-4 accent-green-600 bg-gray-100 border-gray-300 cursor-default" />
                  </div>
                ) : (
                  <div className="flex absolute items-center mt-1">
                    <input type="radio" value="" name="active-task" className="w-4 h-4 accent-green-600 bg-gray-100 border-gray-300 cursor-default" />
                  </div>
                )}




              </div>
              <div className="flex 2xl:gap-60 xl:gap-40 md:gap-20 gap-1 2xl:ml-20 md:ml-10 ml-2">
                <p className="font-bold md:text-base text-sm bg-slate-500">{project['Project ID']}</p>
                <p className="font-bold md:text-base text-sm bg-slate-500">{project['Project Name']}</p>
                <p className="font-bold md:text-base text-sm bg-slate-500">{project['Project Nickname']}</p>
                <p className="font-bold md:text-base text-sm bg-slate-500">{project['Project Manager Name']}</p>
              </div>
              <div className='flex items-end justify-end -mt-6'>
                <select className="text-black font-semibold md:px-2 px-1 bg-white border rounded-md shadow-sm outline-none appearance-none">
                  <option className='font-semibold'>Select Role</option>
                  <option className='font-semibold'>Carpentry</option>
                  <option className='font-semibold'>Packing</option>
                  <option className='font-semibold'>Polishing</option>
                  <option className='font-semibold'>Painting</option>
                  <option className='font-semibold'>Grouping</option>
                </select>
              </div>
            </div>
          ))}
      </div>

      {/* Start Work */}
      <button className="mt-2 text-white bg-red-700 font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl py-2 px-4 lg:cursor-default cursor-none transform active:scale-y-75 transition-transform">Start</button>
      <button className="mt-2 text-white bg-red-700 font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl py-2 px-4 lg:cursor-default cursor-none transform active:scale-y-75 transition-transform">End Day</button>
    </div>
  );
}

export default WorkersList;
