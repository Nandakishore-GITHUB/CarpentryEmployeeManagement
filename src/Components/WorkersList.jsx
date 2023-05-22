import React, { useState } from 'react';
import { FiPlus, FiMinus, FiEdit } from 'react-icons/fi';

function WorkersList(props) {
  const [PrjtExpand, SetPrjtExpand] = useState(false);

  const [selectedKey, setSelectedKey] = useState('');

  const handleOnClick = (key) => {
    setSelectedKey(key);
  };

  const { projects } = props;

  return (
    <div className="flex flex-col items-center justify-center pt-7 px-4">
      <div className="flex flex-col w-screen p-3 lg:p-0 md:p-0 lg:w-3/4 md:w-full max-w-2x rounded-lg items-center justify-center bg-slate-400 bg-opacity-25">

        {/* Projects and Details */}
        
        {projects.map((project) => (
          <div
            key={project['Project ID']}
            className="relative w-full md:w-11/12 sm:w-fit bg-slate-50 rounded-lg shadow-[0px_0px_14px_3px_#00000024] p-4 m-4 transition-transform duration-300 md:hover:transform md:hover:scale-105 hover:text-violet-700"
            onClick={() => {
              SetPrjtExpand(!PrjtExpand);
              handleOnClick(project['Project ID']);
            }}
          >
            <div className="w-fit md:-ml-0 -ml-3">
              {PrjtExpand && selectedKey === project['Project ID'] ? (
                <FiMinus className="size-25 absolute md:mt-1" />
              ) : (
                <FiPlus className="size-25 absolute md:mt-1" />
              )}
            </div>
            <div className="flex justify-evenly md:ml-0 ml-4">
              <p className="font-bold md:text-base text-sm">{project['Project ID']}</p>
              <p className="font-bold md:text-base text-sm">{project['Project Name']}</p>
              <p className="font-bold md:text-base text-sm">{project['Project Nickname']}</p>
              <p className="font-bold md:text-base text-sm">{project['Project Manager Name']}</p>
            </div>
            {/* <div className='flex items-end justify-end -mt-5'>
                <FiEdit className='size="25"' />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkersList;
