import { FiPlus, FiMinus, FiEdit } from 'react-icons/fi'
import { useState } from 'react';


function ListDropdown({ main, sub, subsub }) {

  const [PrjtExpand, SetPrjtExpand] = useState(false)

  const [DateExpand, SetDateExpand] = useState(false)

  return (

    <div className="flex flex-col items-center justify-center pt-7 px-4">

      <div className='flex flex-col w-screen p-3 lg:p-0 md:p-0 lg:w-3/4 md:w-full max-w-2x rounded-lg items-center justify-center bg-slate-400 bg-opacity-25'>

        {/* Projects and timings */}

        <div className="flex justify-between relative w-full lg:w- md:w-11/12 sm:w-fit bg-slate-50 rounded-lg shadow-[0px_0px_14px_3px_#00000024] p-4 m-4 transition-transform duration-300 hover:transform hover:scale-105 hover:text-violet-700" onClick={() => { SetPrjtExpand(!PrjtExpand); SetDateExpand(false); }}>
          <div>
            {PrjtExpand ? <FiMinus className='size="25" absolute mt-1' /> : <FiPlus className='size="25" absolute mt-1' />}
          </div>
          <p className="font-bold ml-6 absolute">{main}</p>
          <div className="flex 2xl:gap-32 xl:gap-20 md:gap-16 sm:gap-0 justify-end items-center space-x-3">
            <p className='font-bold'>3.30</p>
            <p className='font-bold'>1.30</p>
            <p className='font-bold'>5.00</p>
            {/* <FiEdit className='size="25"' /> */}
          </div>
          <button className='flex items-end justify-end -mt-5'>
            <FiEdit className='size="25"' />
          </button>
        </div>

        {/* Date and timings */}

        {PrjtExpand && (
          <div className="flex mx-10 justify-between relative w-full md:w-11/12 bg-slate-100 rounded-lg shadow-[0px_0px_14px_3px_#00000024] p-4 m-2 hover:text-violet-700" onClick={() => SetDateExpand(!DateExpand)}>
            <div>
              {DateExpand ? <FiMinus className='size="25" absolute mt-1' /> : <FiPlus className='size="25" absolute mt-1' />}
            </div>
            <p className="font-bold ml-6 absolute">{sub}</p>
            <div className="flex 2xl:gap-32 xl:gap-20 md:gap-16 sm:gap-0 justify-end items-center space-x-3">
              <p className='font-bold'>3.30</p>
              <p className='font-bold'>1.30</p>
              <p className='font-bold'>5.00</p>
              {/* <FiEdit className='size="25"' /> */}
            </div>
            <button className='flex items-end justify-end -mt-5'>
            <FiEdit className='size="25"' />
          </button>
          </div>
        )}

        {/* Workers and timings */}

        {PrjtExpand && DateExpand && (
          <div className="flex justify-between relative w-full md:w-11/12 bg-slate-200 rounded-lg shadow-[0px_0px_14px_3px_#00000024] p-4 m-2 hover:text-violet-700">
            <p className="font-bold ml-6 ">{subsub}</p>
            <div className="flex 2xl:gap-32 xl:gap-20 md:gap-16 sm:gap-0 items-center">
              <p className='font-bold'>3.30</p>
              <p className='font-bold'>1.30</p>
              <p className='font-bold'>5.00</p>
              {/* <FiEdit className='size="25"' /> */}
            </div>
            <button className='flex items-end justify-end -mt-5'>
            <FiEdit className='size="25"' />
          </button>
          </div>
        )}

      </div>

    </div>
  );
}

export default ListDropdown

