import React from 'react';
import { FiEdit } from 'react-icons/fi';

const projects = [
  { id: 1, name: 'Project A', nickname: 'A', manager: 'John Doe' },
  { id: 2, name: 'Project B', nickname: 'B', manager: 'Jane Smith' },
  { id: 3, name: 'Project C', nickname: 'C', manager: 'Mike Johnson' },
  // Add more projects here
];

const List = () => {
  return (
    <div className="p-5 m-5 relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-500 bg-opacity-50 backdrop-blur-sm">
      <table className="min-w-full rounded-xl">
        <thead>
          <tr>
            <th className="py-3 px-6">Project ID</th>
            <th className="py-3 px-6">Project Name</th>
            <th className="py-3 px-6">Project Nickname</th>
            <th className="py-3 px-6">Project Manager</th>
            {/* Empty header for the edit button */}
            <th className="py-3 px-6"></th> 
          </tr>
        </thead>
        <tbody className="text-gray-600">
          {projects.map(project => (
            <tr key={project.id} className='bg-slate-50 rounded-full border-b shadow-[0px_0px_14px_3px_#00000024] hover:text-violet-700'>
              <td className="py-4 px-6 text-center">{project.id}</td>
              <td className="py-4 px-6 text-center">{project.name}</td>
              <td className="py-4 px-6 text-center">{project.nickname}</td>
              <td className="py-4 px-6 text-center">{project.manager}</td>
              <td className="py-4 px-6">
                <button className="text-blue-500 hover:text-blue-700">
                  <FiEdit className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
