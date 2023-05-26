import React, { useState } from 'react';
import { FiPlus, FiMinus, FiEdit } from 'react-icons/fi';

function WorkersList(props) {
  const [PrjtSelect, SetPrjtSelect] = useState(false);

  const [selectedKey, setSelectedKey] = useState('');

  const [selectedRole, setSelectedRole] = useState('');


  const handleOnClick = (key) => {
    setSelectedKey(key);
  };


  const handleRoleChange = (e, projectId) => {
    setSelectedRole((prevSelectedRole) => ({
      ...prevSelectedRole,
      [projectId]: e.target.value,
    }));
    onValueChange(e.target.value)
  };
  console.log(selectedRole);

  const { projects } = props;
  const { value } = props;
  const { start } = props;
  const { onValueChange } = props;

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
              className={
                PrjtSelect && selectedKey === project['Project ID']
                  ? start && selectedRole
                    ?"relative w-full md:w-11/12 sm:w-fit bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg shadow-[0px-0px-14px-3px-#00000024] p-4 m-4 transition-transform duration-300 md:hover:transform md:hover:scale-105"
                    :"relative w-full md:w-11/12 sm:w-fit bg-gradient-to-r from-indigo-500 to-sky-500 rounded-lg shadow-[0px-0px-14px-3px-#00000024] p-4 m-4 transition-transform duration-300 md:hover:transform md:hover:scale-105"
                  : "relative w-full md:w-11/12 sm:w-fit bg-slate-50 rounded-lg shadow-[0px-0px-14px-3px-#00000024] p-4 m-4 transition-transform duration-300 md:hover:transform md:hover:scale-105 hover:text-violet-700"
              }

              onClick={() => {
                SetPrjtSelect(true);
                handleOnClick(project['Project ID']);
              }}
            >
              <div className="flex 2xl:gap-60 xl:gap-40 md:gap-20 gap-1 2xl:ml-20 md:ml-10 ml-2">
                <p className="font-bold md:text-base text-sm bg-slate-500">{project['Project ID']}</p>
                <p className="font-bold md:text-base text-sm bg-slate-500">{project['Project Name']}</p>
                <p className="font-bold md:text-base text-sm bg-slate-500">{project['Project Nickname']}</p>
                <p className="font-bold md:text-base text-sm bg-slate-500">{project['Project Manager Name']}</p>
              </div>
              <div className='flex items-end justify-end -mt-6'>
                <select
                  className="text-black font-semibold md:px-2 px-1 bg-white border rounded-md shadow-sm outline-none appearance-none"
                  value={selectedRole[project['Project ID']] || 'Select Role'}
                  onChange={(e) => handleRoleChange(e, project['Project ID'])}
                >
                  <option className="font-semibold" disabled>
                    Select Role
                  </option>
                  <option className="font-semibold">Carpentry</option>
                  <option className="font-semibold">Packing</option>
                  <option className="font-semibold">Polishing</option>
                  <option className="font-semibold">Painting</option>
                  <option className="font-semibold">Grouping</option>
                </select>


              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WorkersList;



