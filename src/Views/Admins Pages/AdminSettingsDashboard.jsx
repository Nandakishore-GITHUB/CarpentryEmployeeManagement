import React from 'react'
import Header from '../../Components/Header'

import List from '../../Components/List'

function AdminSettingsDashboard() {
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

                <div className='w-full'>
                    <List />
                </div>



        </div>
    )
}

export default AdminSettingsDashboard