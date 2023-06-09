import React, { useState } from 'react'
import Header from '../../Components/Header'
import Model from '../../Components/ProjectModel';
import List from '../../Components/List'

function AdminSettingsDashboard() {


    const [showModel,setShowModel] = useState(false)

    const handleOnClose = () => setShowModel(false)

    return (
        <div className='h-screen bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg'>

            <Header title="Settings" button1="Projects" button2="Workers" link1="/admin-project-dashboard" link2="/admin-workers-dashboard" />

            {/*Search Box */}

            <div className="relative mb-3 md:m-5 md:px-0 px-4 mt-3">
                <input
                    type="search"
                    class="peer block min-h-[auto] lg:w-80 md:w-64 w-52 rounded-full border-0 bg-gray-50 shadow-[inset_-12px_-8px_40px_#46464620] outline-none px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-800 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Type query" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] md:px-0 px-4 origin-[0_0] truncate pt-[0.37rem] leading-[1.6 eutransition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-primary">
                    Search
                </label>
            </div>

            <div className="flex items-end justify-end me-20">
                <button className="font-semibold md:text-base col-span-1 bg-violet-700 bg-opacity-70 object-contain w-24 md:w-32 xl:w-36 rounded-lg hover:text-slate-200 transform active:scale-75 transition-transform"
                    onClick={() => setShowModel(true)}>
                    New Project
                </button>
            </div>    

            {/* Select settings */}

            <div className='flex md:flex-row flex-col items-center pt-7 lg:px-9 px-6 xl:-ml-0 -ml-8 xl:space-x-40'>

                <div className="flex lg:w-60 md:w-48 lg:h-52 md:h-48 mx-6 md:my-10 -my-6 mb-5 relative">
                    <div className="md:bg-white flex items-center justify-center md:shadow-md w-full rounded-lg md:p-6 p-2 md:ml-0 ml-8">
                        <div className="flex md:flex-col gap-5">
                            <div>
                                <button className="text-gray-700 font-semibold md:text-2xl text-lg  bg-white rounded-lg lg:w-56 md:w-40 w-28 md:h-12 p-1 hover:text-violet-700 active:bg-violet-700 active:text-white">Projects</button>
                            </div>
                            <div>
                                <button className="text-gray-700 font-semibold md:text-2xl text-lg  bg-white rounded-lg lg:w-56 md:w-40 w-28 md:h-12 p-1 hover:text-violet-700 active:bg-violet-700 active:text-white">Workers</button>
                            </div>
                            <div>
                                <button className="text-gray-700 font-semibold md:text-2xl text-lg  bg-white rounded-lg lg:w-56 md:w-40 w-28 md:h-12 p-1 hover:text-violet-700 active:bg-violet-700 active:text-white">Timings</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* LIST OF SELECTED SETTINGS */}
                
                <div className='w-full'>
                    <List />
                </div>


                <div className='absolute'>
                    <Model visible={showModel} onClose={handleOnClose} />
                </div>

            </div>




        </div>
    )
}

export default AdminSettingsDashboard