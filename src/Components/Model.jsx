import React, { useState } from 'react'
import Lottie from 'lottie-react'
import success from '../assets/success.json'

function Model({ visible, onClose }) {

    const [showSuccess, setShowSuccess] = useState(false)

    const handleOnClose = (e) => {

        if((e.target.id === 'container' && showSuccess == true) || e.target.id === 'discard') {
            onClose() 
            setShowSuccess(false)  
        } 
    }
 
    if (!visible) return null

    return (
        <div id='container' className='fixed inset-0 w-screen bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' onClick={handleOnClose}>


            {showSuccess ? <div className="flex bg-white rounded-lg flex-col justify-center px-20 py-12 lg:px-40 md:px-32">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <p className="mt-10 text-center xl:text-7xl md:text-4xl text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Success
                    </p>
                    <div className="mt-4 xl:ml-2 md:ml-2">
                    <Lottie loop={false} animationData={success}/>
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
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
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
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => setShowSuccess(true)}>
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