import React, { useEffect, useState } from 'react'
import WorkersHeader from '../../Components/WorkersHeader'
import { Toaster, toast } from 'react-hot-toast'
import Lottie from 'lottie-react'
import Loading from '../../assets/loading.json'
import requests from '../../api/requests.js'
import WorkersList from '../../Components/WorkersList'

function WorkersDashboard() {

    //  state to set data
    const [data, setData] = useState([])

    // state to set Loaeding
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const URL = '/project/all'
                const response = await requests.getData(URL);
                if (response.status === 200) {
                    console.log(response.data.data);
                    setData(response.data.data)
                    setLoading(false);
                } else {
                    toast.error(response);
                }
            } catch (error) {
                toast.error('Something went wrong!');
                console.log(error);
            }
        };

        fetchData();

    }, []);

    const projecColumns = [
        { name: 'Project ID', value: 'projectId' },
        { name: 'Project Name', value: 'projectName' },
        { name: 'Project Nickname', value: 'projectNickname' },
        { name: 'Project Manager', value: 'projectManager' },
    ];

    return (
        <div className='h-screen overflow-scroll bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>

            {/* Header */}

            <WorkersHeader title="Your Dashboard" />

            {/* Search Box */}

            <div className="relative mb-3 md:m-5 lg:px-60 px-4 mt-3">
                <input
                    type="search"
                    className="peer block min-h-[auto] w-full rounded-full border-0 bg-gray-50 
                    shadow-[inset_-12px_-8px_40px_#46464620] outline-none px-6 py-[0.32rem] leading-[1.6] 
                    transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary 
                    data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none
                    dark:text-neutral-800 dark:placeholder:text-neutral-900 dark:peer-focus:text-primary 
                    [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    placeholder="Type query" />
                <label
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] lg:px-60 px-4 origin-[0_0] truncate pt-[0.37rem] leading-[1.6 eutransition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-950 dark:peer-focus:text-primary">
                    Search
                </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-end items-center m-5 gap-3">

                {/* Start Session Button */}
                <button className="mt-2 text-white bg-gradient-to-r from-green-500 to-emerald-500 font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl py-2 px-4 lg:cursor-default cursor-none transform active:scale-y-75 transition-transform"
                >
                    Start Work
                </button>

                {/* End Session Button */}
                <button className="mt-2 text-white bg-gradient-to-r from-indigo-500 to-sky-500 font-bold border-0 shadow-[0px_0px_14px_3px_#00000024] rounded-xl py-2 px-4 lg:cursor-default cursor-none transform active:scale-y-75 transition-transform">End Day</button>
            </div>


            {/* Project List & Details */}

            {loading ?

                <div>
                    <Lottie animationData={Loading} className='md:w-60 w-44 mt-20 xl:ml-96 md:ml-40 ml-10' />
                </div>

                : <div className='w-full'>
                    {data && data.length > 0 ? (
                        <WorkersList column={projecColumns} data={data} />
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>

            }

        </div>
    )
}

export default WorkersDashboard