import React, { useState, useEffect } from 'react'
import requests from '../../api/requests.js'
import Lottie from 'lottie-react'
import success from '../../assets/success.json'
import { MdOutlineWarningAmber } from 'react-icons/md';
import { Toaster, toast } from 'react-hot-toast'

function DeleteModal({ itemId, active, onClose }) {


    // state to show the success
    const [showSuccess, setShowSuccess] = useState(false)

    // state to set url to delete
    const [url, setUrl] = useState('')


    // Handle on close function - to close the model and the success element
    const handleOnClose = (e) => {

        if ((e.target.id === 'container' && showSuccess == true) || e.target.id === 'cancel') {
            onClose()
            setShowSuccess(false)
        }
    }

    const onDelete = async () => {
        const _id = itemId;

        if (active === 'project') {
            const URL = `/project/${_id}`;
            console.log(URL);
            try {
                const response = await requests.deleteData(URL);
                if (response.status === 200) {
                    console.log(response.data);
                    setShowSuccess(true);
                    toast.success('Project deleted successfully.');
                } else {
                    toast.error('Failed to delete project.');
                }
            } catch (error) {
                toast.error('Error occurred while deleting project.');
                console.log(error);
            }
        } else if (active === 'workers') {
            const URL = `/employee/${_id}`;
            console.log(URL);
            const data = { active: false };
            try {
                const response = await requests.patchData(URL, data);
                if (response.status === 200) {
                    console.log(response.data);
                    setShowSuccess(true);
                    toast.success('Worker updated successfully.');
                } else {
                    toast.error('Failed to update worker.');
                }
            } catch (error) {
                toast.error('Error occurred while updating worker.');
                console.log(error);
            }
        }
    };





    if (!itemId) return null;

    return (
        <main id='container' className='fixed inset-0 w-screen bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center' onClick={handleOnClose}>
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

                :

                <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
                    <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
                        <div className="md:flex items-center">
                            <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                                <MdOutlineWarningAmber className=" mb-2 text-5xl text-red-700" />
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                                <p className="font-bold">Delete User</p>
                                <p className="text-sm text-gray-700 mt-1">Are you sure ?.
                                </p>
                            </div>
                        </div>
                        <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                            <button className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                                onClick={onDelete}>
                                Delete</button>
                            <button id='cancel' className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
                                onClick={handleOnClose}>
                                Cancel</button>
                        </div>
                    </div>
                </div>}

        </main>
    )
}

export default DeleteModal