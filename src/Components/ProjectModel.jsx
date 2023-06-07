import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import success from '../assets/success.json'
import axios from 'axios'

function Model({ visible, onClose }) {

    // state to show the success
    const [showSuccess, setShowSuccess] = useState(false)


    // Handle on close function - to close the model and the success element
    const handleOnClose = (e) => {

        if ((e.target.id === 'container' && showSuccess == true) || e.target.id === 'discard') {
            onClose()
            setShowSuccess(false)
        }
    }


    // Handle form data
    const [formData, setFormData] = useState({
        projectName: '',
        projectNickname: '',
        projectID: '',
        projectManager: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ [name]: value });
    };


    // post request
    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post('/api/project/add', formData)
          .then(response => {
            console.log('POST request successful:', response.data.message);
            setShowSuccess(true);
            // Handle the success state or further actions
          })
          .catch(error => {
            console.error('Error making POST request:', error.message);
            // Handle the error state or further actions
          });
      };




    if (!visible) return null

    return (
        <div id='container' className='fixed inset-0 w-screen bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' onClick={handleOnClose}>


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
                            Enter <span className='text-violet-700'>Project</span> Details
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Project Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="ProjectName"
                                        name="ProjectName"
                                        type="text"
                                        required
                                        value={formData.projectName}
                                        onChange={handleInputChange}
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
                                        type="text"
                                        required
                                        value={formData.projectNickname}
                                        onChange={handleInputChange}
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
                                        type="text"
                                        required
                                        value={formData.projectID}
                                        onChange={handleInputChange}
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
                                        type="text"
                                        required
                                        value={formData.projectManager}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <button
                                    type="Submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onSubmit={handleSubmit}>
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

export default Model