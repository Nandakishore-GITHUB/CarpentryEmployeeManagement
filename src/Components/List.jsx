import React, { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';



const List = ({ column, data, active, onDelete }) => {
  console.log('got data successfully' + data);
  console.log(column);

  const handleDelete = (_id) => {
    onDelete(_id)
  };

  if (active === 'workers') return (
    <div className="p-5 m-5 relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-500 bg-opacity-50 backdrop-blur-sm">
      <table className="min-w-full rounded-xl">
        <thead>
          <tr>
            {column.map((col, index) => (
              <th key={index} className="py-2">
                {col.name} 
              </th>
            ))}
            {/* Empty header for the edit button */}
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data
            .filter((rowData) => rowData.active === true) // Check if active is true
            .map((rowData, index) => (
              <tr
                key={index}
                className="text-center bg-slate-50 rounded-full border-b shadow-[0px_0px_14px_3px_#00000024] hover:text-violet-700"
              >
                {column.map((col, columnIndex) => (
                  <td key={columnIndex} className="font-semibold">
                    {rowData[col.value]}
                  </td>
                ))}
                <td className="py-4 px-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FiEdit className="h-5 w-5" />
                  </button>
                </td>
                <td className="py-4 px-3">
                  <button className="text-red-500 hover:text-red-700">
                    <MdDelete
                      className="h-5 w-5"
                      onClick={() => handleDelete(rowData._id)}
                    />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="p-5 m-5 relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-500 bg-opacity-50 backdrop-blur-sm">
      <table className="min-w-full rounded-xl">
        <thead>
          <tr>
            {column.map((col, index) => (
              <th key={index} className='py-2'>{col.name}</th>
            ))}
            {/* Empty header for the edit button */}
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((rowData, index) => (
            <tr key={index} className='text-center bg-slate-50 rounded-full border-b shadow-[0px_0px_14px_3px_#00000024] hover:text-violet-700'>
              {column.map((col, columnIndex) => (
                <td key={columnIndex} className='font-semibold'>{rowData[col.value]}</td>
              ))}
              <td className="py-4 px-3">
                <button className="text-blue-500 hover:text-blue-700">
                  <FiEdit className="h-5 w-5" />
                </button>
              </td>
              <td className="py-4 px-3">
                <button className="text-red-500 hover:text-red-700">
                  <MdDelete className="h-5 w-5" onClick={() => handleDelete(rowData._id)} />
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
