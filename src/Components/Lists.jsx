import React from 'react'
import { FiEdit } from 'react-icons/fi'

function Lists() {
  
  return (
    
<div className="flex flex-col items-center justify-center pt-7">
  <div className="flex flex-col w-full max-w-2xl rounded-lg items-center justify-center bg-slate-300 bg-opacity-25">
    <div className="grid grid-cols-3 w-full md:ml-20 mt-5 relative px-6 md:px-0 sm:px-11">
      <p className="font-bold">Projects</p>
      <p className="font-bold">Project ID</p>
      <button className=' font-bold bg-violet-700 bg-opacity-70 object-contain w-36 rounded-lg hover:text-slate-200 transform active:scale-75 transition-transform'>New Project</button>
    </div>
    <div className="flex w-11/12 flex-col-3 gap-40 max-w-2xl relative bg-slate-50 rounded-lg shadow-md p-4 m-2 transition-transform duration-300 hover:transform hover:scale-105 hover:text-violet-700">
      <p className="font-bold">Project 1</p>
      <div className="flex items-center">
        <p className="font-bold">AB1354</p>
        <FiEdit className='size="25" absolute ml-80 transform active:scale-75 transition-transform' />
      </div>
    </div>
  </div>
</div>


  )
}

export default Lists
