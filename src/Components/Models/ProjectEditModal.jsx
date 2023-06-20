import React, { useState } from 'react'
import Lottie from 'lottie-react'
import success from '../../assets/success.json'
import { useFormik } from 'formik'
import { Toaster, toast } from 'react-hot-toast'
import requests from '../../api/requests.js'

function ProjectEditModal({ itemId, active, onClose }) {

    // state to show the success
    const [showSuccess, setShowSuccess] = useState(false)


    // Handle on close function - to close the ProjectEditModal and the success element
    const handleOnClose = (e) => {

        if ((e.target.id === 'container' && showSuccess == true) || e.target.id === 'discard') {
            onClose()
            setShowSuccess(false)
        }
    }

    const handleSubmit = async (values) => {
        try {
            const URL = '/project/add';
            const response = await requests.postData(URL, values);
            if (response.status === 201) {
                toast.success('Project created successfully!');
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





    if (!itemId || active != 'project') return null

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

                : <div className="flex bg-white rounded-lg flex-col justify-center px-6 py-5 lg:px-40 md:px-32">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Enter <span className='text-violet-700'>Project</span> Details
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Project Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="ProjectName"
                                        name="ProjectName"
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
                                        Project Nickname
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="ProjectNickname"
                                        name="ProjectNickname"
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
                                        Project ID
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="ProjectID"
                                        name="ProjectID"
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
                                        Project Manager
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


                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Estimated Time
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="EstimatedTime"
                                        name="EstimatedTime"
                                        {...formik.getFieldProps('estimatedTime')}
                                        type="Number"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <button
                                    type="Submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Add Project
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

export default ProjectEditModal