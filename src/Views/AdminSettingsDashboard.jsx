import React from 'react'
import Header from '../Components/Header'
import Lists from '../Components/Lists'
import List from '../Components/List'

function AdminSettingsDashboard() {
    return (
        <div className='h-screen bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg'>

            <Header title="Settings" button1="Projects" button2="Workers" />

            <div class="flex justify-end mb-3 m-5">
                <div class="relative">
                    <input
                        type="search"
                        class="peer block min-h-[auto] w-80 rounded-full border-0 bg-gray-50 shadow-[inset_-12px_-8px_40px_#46464620] outline-none px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-800 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="Type query"
                    />
                    <label
                        for="exampleSearch2"
                        class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-950 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary"
                    >
                        Search
                    </label>
                </div>
            </div>


        <div className='grid grid-cols-3 bg-blac'>
            <div className="flex w-1/2 h-1/2 mx-6 my-10 bg-slate-600 relative">
                <div className="bg-white flex items-center justify-center shadow-md w-full rounded-lg p-6">
                    <div className="flex flex-col gap-5">
                        <div>
                            <p className="text-gray-700 font-semibold text-2xl">Projects</p>
                        </div>
                        <div>
                            <p className="text-gray-700 font-semibold text-2xl">Workers</p>
                        </div>
                        <div>
                            <p className="text-gray-700 font-semibold text-2xl">Timings</p>
                        </div>
                    </div>
                </div>
            </div>

        <div className='w-full'>
            <List/>
        </div>
            
        </div>

        </div>
    )
}

export default AdminSettingsDashboard