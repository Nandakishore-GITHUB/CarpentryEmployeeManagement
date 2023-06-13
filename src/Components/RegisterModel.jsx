import React, { useState } from 'react'
import Lottie from 'lottie-react'
import success from '../assets/success.json'
import { useFormik } from 'formik'
import { Toaster, toast } from 'react-hot-toast'
import requests from '../api/requests.js'

function RegisterModel({ visible, onClose }) {

    // state to show the success
    const [showSuccess, setShowSuccess] = useState(false)

    // show sub role field only when worker and supervisor is selected
    const [showSubRole, setShowSubRole] = useState(false)


    // Handle on close function - to close the model and the success element
    const handleOnClose = (e) => {

        if ((e.target.id === 'container' && showSuccess == true) || e.target.id === 'discard') {
            onClose()
            setShowSuccess(false)
        }
    }

    const handleSubmit = async (values) => {
        try {
            const URL = '/aut/register';
            const response = await requests.postData(URL, values);
            if (response.status === 201) {
                toast.success(response.message);
                setShowSuccess(true);
            } else {
                toast.error(response);
            }
        } catch (error) {
            toast.error('Something went wrong!');
            console.log(error);
        }
    };

    const formik = useFormik({
        initialValues: {
            projectName: '',
            projectNickname: '',
            projectId: '',
            projectManager: '',
            estimatedTime: ''
        },
        onSubmit: async (values) => handleSubmit(values)
    })





    if (!visible) return null

    return (
        <div id='container' className='fixed inset-0 w-screen bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' onClick={handleOnClose}>
            <Toaster position='top-center' reverseOrder={false}></Toaster>


            {showSuccess ? <div className="flex bg-white rounded-lg flex-col justify-center px-20 py-12 lg:px-40 md:px-32">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <p className="mt-10 text-center xl:text-7xl md:text-4xl text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Success
                    </p>
                    <div className="mt-4 xl:ml-2 md:ml-2">
                        <Lottie loop={false} animationData={success} />
                    </div>
                </div>
            </div>

                : <div className="flex bg-white rounded-lg flex-col justify-center px-6 py-12 lg:px-40 md:px-32">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Enter <span className='text-violet-700'>Employee</span> Details
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Employee Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="EmployeeName"
                                        name="EmployeeName"
                                        {...formik.getFieldProps('projectName')}
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Username
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="Username"
                                        name="Username"
                                        {...formik.getFieldProps('projectNickname')}
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Employee ID
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="EmployeeID"
                                        name="EmployeeID"
                                        {...formik.getFieldProps('projectId')}
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="ProjectManager"
                                        name="ProjectManager"
                                        {...formik.getFieldProps('projectManager')}
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            {/* Select Role */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Select Role
                                    </label>
                                </div>
                                <div className="mt-2 lg:max-w-sm grid grid-cols-3">
                                    <div className="flex items-center mr-4">
                                        <input type="checkbox" id="worker" className="mr-1" onChange={() => setShowSubRole(!showSubRole)} />
                                        <label htmlFor="worker" className="font-semibold ml-2">
                                            Worker
                                        </label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input type="checkbox" id="supervisor" className="mr-1" onChange={() => setShowSubRole(!showSubRole)} />
                                        <label htmlFor="supervisor" className="font-semibold ml-2">
                                            Supervisor
                                        </label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input type="checkbox" id="factory-manager" className="mr-1" onChange={() => setShowSubRole(false)} />
                                        <label htmlFor="factory-manager" className="font-semibold ml-2">
                                            Factory Manager
                                        </label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input type="checkbox" id="project-manager" className="mr-1" onChange={() => setShowSubRole(false)} />
                                        <label htmlFor="project-manager" className="font-semibold ml-2">
                                            Project Manager
                                        </label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input type="checkbox" id="super-admin" className="mr-1" onChange={() => setShowSubRole(false)} />
                                        <label htmlFor="super-admin" className="font-semibold ml-2">
                                            Super Admin
                                        </label>
                                    </div>
                                </div>
                            </div>


                            {showSubRole ?
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label className="block text-sm font-medium leading-6 text-gray-900">
                                            Sub Role
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="EstimatedTime"
                                            name="EstimatedTime"
                                            {...formik.getFieldProps('estimatedTime')}
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div> : ''

                            }

                            {/* Buttons */}

                            <div className='flex flex-col gap-2'>
                                <button
                                    type="Submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Add Employee
                                </button>
                                <button
                                    id='discard'
                                    type="button"
                                    className="flex w-full justify-center rounded-md bg-red-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleOnClose}>
                                    Discard
                                </button>
                            </div>
                        </form>
                    </div>
                </div>}

        </div>
    )
}

export default RegisterModel