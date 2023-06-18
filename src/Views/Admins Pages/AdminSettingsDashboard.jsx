import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import Header from '../../Components/Header'
import Lottie from 'lottie-react'
import Loading from '../../assets/loading.json'
import Model from '../../Components/Models/ProjectModel';
import List from '../../Components/List'
import requests from '../../api/requests.js';
import RegisterModel from '../../Components/Models/RegisterModel'
import DeleteModal from '../../Components/Models/DeleteModal'

function AdminSettingsDashboard() {

    // setting which is active session
    const [active, setActive] = useState('project')

    // handling models

    // handling model for adding projects
    const [showModel, setShowModel] = useState(false)

    // handling mdel for registering employees
    const [registerModel, setRegisterModel] = useState(false)

    // handling model for deleteing data and setting state for passing _id to delete
    const [deleteData, setDeleteData] = useState(null)

    // handling loading animations
    const [loading, setLoading] = useState(true)

    // fetched data
    const [data, setData] = useState([])

    // setting the active url
    const [URL, setURL] = useState('/project/all')

    // handle on close event of the model
    const handleOnClose = () => {
        setShowModel(false)
        setRegisterModel(false)
        setDeleteData(null)
    }

    // function to handle state changes on clicking project button
    const handleProjectButton = () => {
        setURL('/project/all')
        setActive('project')
    }

    // function to handle state changes on clicking project button
    const handleEmployeeButton = () => {
        setURL('/employee/all')
        setActive('workers')
    }

    // function to handle state changes on clicking project button
    const handleTimingButton = () => {
        setURL('/project/all')
        setActive('timing')
    }

    // function to handleDelete
    const handleDelete = (_id) => {
        setDeleteData(_id);
    }

    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const showNavigationDrawer = () => {
        setIsDrawerVisible(true);
    };

    const hideNavigationDrawer = () => {
        setIsDrawerVisible(false);
    };


    //add useEffect to get data from server
    useEffect(() => {

        const fetchData = async () => {
            try {
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

    }, [URL, showModel, active])

    console.log(data);

    const projecColumns = [
        { name: 'Project ID', value: 'projectId' },
        { name: 'Project Name', value: 'projectName' },
        { name: 'Project Nickname', value: 'projectNickname' },
        { name: 'Project Manager', value: 'projectManager' },
    ];

    const employeeColumns = [
        { name: 'Employee ID', value: 'userId' },
        { name: 'Name', value: 'name' },
        { name: 'Userame', value: 'username' },
        { name: 'Role', value: 'role' },
    ];

    return (
        <div className='top-0 left-0 w-full h-screen bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg z-[-1] overflow-x-hidden overflow-y-visible'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='z-50'>
                <Header title="Settings" button1="Projects" button2="Workers" link1="/admin-project-dashboard" link2="/admin-workers-dashboard" />
            </div>

            {/* Side bar */}


            {/* <!-- drawer init and show --> */}
            <div class="text-left m-5">
                <button
                    className="text-white bg-gradient-to-r from-gray-800 to-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                    type="button"
                    onClick={showNavigationDrawer}
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <div
                id="drawer-navigation"
                className={`fixed top-24 mt-1 left-0 z-30 w-64 h-screen p-4 overflow-y-auto transition-transform ${isDrawerVisible ? '' : '-translate-x-full'
                    } bg-gray-100`}
                tabIndex="-1"
                aria-labelledby="drawer-navigation-label"
            >
                {/* Drawer content */}
                <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-900 uppercase">
                    Select Settings
                </h5>
                <button
                    type="button"
                    onClick={hideNavigationDrawer}
                    data-drawer-hide="drawer-navigation"
                    aria-controls="drawer-navigation"
                    className="text-gray-600 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        {/* Menu items */}
                        <li>
                            <div href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-gray-400 cursor-pointer"
                                onClick={handleProjectButton}>
                                <span className="ml-2">Projects</span>
                            </div>
                        </li>
                        <li>
                            <div href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-gray-400 cursor-pointer"
                                onClick={handleEmployeeButton}>
                                <span className="ml-2">Employees</span>
                            </div>
                        </li>
                        <li>
                            <div href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-gray-400 cursor-pointer"
                                onClick={handleTimingButton}>
                                <span className="ml-2">Timings</span>
                            </div>
                        </li>
                        <li>
                            <div href="#" className="flex items-center p-2 text-black rounded-lg hover:bg-gray-400 cursor-pointer"
                                onClick={handleTimingButton}>
                                <span className="ml-2">Calender</span>
                            </div>
                        </li>
                        {/* More menu items */}
                    </ul>
                </div>
            </div>



            {/*Search Box */}

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

            {/* Button to add PROJECTS, EMPLOYEES and TIMINGS */}

            <div className="flex items-end justify-end me-20">
                <button className="font-semibold md:text-base col-span-1 bg-violet-700 bg-opacity-70 object-contain w-24 md:w-32 xl:w-36 rounded-lg hover:text-slate-200 transform active:scale-75 transition-transform"
                    onClick={() => {
                        if (active === 'project') {
                            setShowModel(true);
                        } else if (active === 'workers') {
                            setRegisterModel(true);
                        } else if (active === 'timing') {
                            setShowModel(false);
                        }
                    }}
                >
                    {active === 'project' ? "New Project" : active === 'workers' ? "Add Employee" : active === 'timing' ? "Add Timmings" : "NO ACTION"}
                </button>

            </div>

            {/* Select settings */}

            <div className='flex md:flex-row flex-col items-center pt-7 lg:px-9 px-6 xl:-ml-0 -ml-8 xl:space-x-40'>

                {/* <div className="flex lg:w-60 md:w-48 lg:h-52 md:h-48 mx-6 md:my-10 -my-6 mb-5 relative">
                    <div className="md:bg-white flex items-center justify-center md:shadow-md w-full rounded-lg md:p-6 p-2 md:ml-0 ml-8">
                        <div className="flex md:flex-col gap-5">
                            <div>
                                <button className="text-gray-700 font-semibold md:text-2xl text-lg  bg-white rounded-lg lg:w-56 md:w-40 w-28 md:h-12 p-1 hover:text-violet-700 active:bg-violet-700 active:text-white" onClick={handleProjectButton}>Projects</button>
                            </div>
                            <div>
                                <button className="text-gray-700 font-semibold md:text-2xl text-lg  bg-white rounded-lg lg:w-56 md:w-40 w-28 md:h-12 p-1 hover:text-violet-700 active:bg-violet-700 active:text-white" onClick={handleEmployeeButton}>Workers</button>
                            </div>
                            <div>
                                <button className="text-gray-700 font-semibold md:text-2xl text-lg  bg-white rounded-lg lg:w-56 md:w-40 w-28 md:h-12 p-1 hover:text-violet-700 active:bg-violet-700 active:text-white" onClick={handleTimingButton}>Timings</button>
                            </div>
                        </div>
                    </div>
                </div> */}


                {loading ?

                    <div>
                        <Lottie animationData={Loading} className='md:w-60 w-44 mt-20 xl:ml-96 md:ml-40 ml-10' />
                    </div>

                    : <div className='w-full'>
                        {data && data.length > 0 ? (
                            <List column={active === 'project' ? projecColumns : active === 'workers' ? employeeColumns : []} data={data} active={active} onDelete={handleDelete} />
                        ) : (
                            <p>No data available.</p>
                        )}
                    </div>

                }


                <div className='absolute'>
                    <Model visible={showModel} onClose={handleOnClose} />
                </div>

                <div className='absolute'>
                    <RegisterModel visible={registerModel} onClose={handleOnClose} />
                </div>

                <div className='absolute'>
                    <DeleteModal itemId={deleteData} active={active} onClose={handleOnClose} />
                </div>

            </div>




        </div>
    )
}

export default AdminSettingsDashboard