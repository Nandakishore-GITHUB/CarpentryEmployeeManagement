import React, { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast'
import requests from '../api/requests.js'

function WorkersList({ column, data }) {

  const [sessionData, setSessionData] = useState('')

  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (index) => {
    setSelectedRow(index);
  };

  useEffect(() => {
    // to get all sessions from the server

    const URL = "/session/active"
    const fetchData = async () => {
      try {
          const response = await requests.getData(URL);
          if (response.status === 200) {
              console.log(response.data.data);
              setSessionData(response.data.data)
          } else {
              toast.error(response);
          }
      } catch (error) {
          toast.error('Something went wrong!');
          console.log(error);
      }
  };

  fetchData();

  })

  console.log(sessionData);

  return (
    <div className="p-5 m-5 relative overflow-x-auto shadow-md sm:rounded-lg bg-opacity-50 backdrop-blur-sm">
     <Toaster position='top-center' reverseOrder={false}></Toaster>
      <table className="min-w-full rounded-xl border-separate border-spacing-y-4">
        <thead className="text-gray-200">
          <tr>
            {column.map((col, index) => (
              <th key={index} className="py-2">
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((rowData, index) => (
            <tr
              key={index}
              className={`text-center h-14 rounded-md border-b shadow-[0px_0px_14px_3px_#00000024] ${
                selectedRow === index
                  ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white'
                  : 'bg-slate-100'
              }`}
              onClick={() => handleClick(index)}
            >
              {column.map((col, columnIndex) => (
                <td key={columnIndex} className="font-semibold">
                  {rowData[col.value]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkersList;
  