import React from 'react'
import ListDropdown from '../Components/ListDropdown'
import Header from '../Components/Header'

function AdminProjectDasboard() {
    return (

        <div className='h-screen bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg'>

            <Header title="Projects" button1="Workers" button2="Settings" />


            <div class="relative mb-3 md:m-5 w">
                <input
                    type="search"
                    class="peer block min-h-[auto] w-80 rounded-full border-0 bg-gray-50 shadow-[inset_-12px_-8px_40px_#46464620] outline-none px-3 py-[0.32rem] leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-800 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Type query" />
                <label
                    for="exampleSearch2"
                    class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-950 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-500 dark:peer-focus:text-primary">
                    Search
                </label>
            </div>

            
            <ListDropdown  main="Project 1" sub="Date 1" subsub="Worker 1"/>

        </div>

    )
}

export default AdminProjectDasboard