import React, { useState } from 'react'
import Lottie from 'lottie-react'
import success from '../../assets/success.json'
import { usernameValidate, passwordValidate, confirmPasswordValidate } from '../../helper/validate.js'
import { useFormik } from 'formik'
import { Toaster, toast } from 'react-hot-toast'
import requests from '../../api/requests.js'

function RegisterModel({ visible, onClose }) {

    // state to show the success
    const [showSuccess, setShowSuccess] = useState(false)

    // show sub role field only when worker and supervisor is selected
    const [showSubRole, setShowSubRole] = useState(false)

    //state to set role field
    const [roles, setRole] = useState([])

    // handle checkbox value change
    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        let updatedSelectedValues = [...roles]; // Create a copy of the current role state

        if (event.target.checked) {
            updatedSelectedValues.push(value); // Add the value to the copy
        } else {
            updatedSelectedValues = updatedSelectedValues.filter((item) => item !== value); // Remove the value from the copy
        }
        formik.setFieldValue('roles', updatedSelectedValues);
        let showSubRoleFlag = false;
        if (updatedSelectedValues.includes("worker") || updatedSelectedValues.includes("supervisor")) {
            showSubRoleFlag = true;
        }

        setRole(updatedSelectedValues); // Update the role state
        setShowSubRole(showSubRoleFlag); // Update the showSubRole state
    };

    console.log(roles);



    // Handle on close function - to close the model and the success element
    const handleOnClose = (e) => {

        if ((e.target.id === 'container' && showSuccess == true) || e.target.id === 'discard') {
            onClose()
            setShowSuccess(false)
        }
    }

    const handleSubmit = async (values) => {
        console.log(values);
        try {
            const URL = '/auth/register';
            const response = await requests.postData(URL, values);
            if (response.status === 201) {
                toast.success(response.data.message);
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
            name: '',
            username: '',
            userId: '',
            password: '',
            confirmPassword: '',
            roles: '',
            subrole: ''
        },
        validate: (values) => {
            usernameValidate(values) // Calling the validate functions
            passwordValidate(values)
            confirmPasswordValidate(values)
        },
        validateOnBlur: false,
        validateOnChange: false,
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

                : <div className="flex bg-white rounded-lg flex-col justify-center px-6 py-12 md:px-20">
                    <div className="-mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
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
                                        {...formik.getFieldProps('name')}
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
                                        {...formik.getFieldProps('username')}
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
                                        {...formik.getFieldProps('userId')}
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
                                        id="password"
                                        name="password"
                                        {...formik.getFieldProps('password')}
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        {...formik.getFieldProps('confirmPassword')}
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
                                        <input
                                            type="checkbox"
                                            id="worker"
                                            className="mr-1"
                                            value="worker"
                                            checked={roles.includes("worker")}
                                            onChange={handleCheckboxChange}
                                            disabled={roles.length > 0 && !roles.includes("worker")}
                                        />
                                        <label htmlFor="worker" className="font-semibold ml-2">
                                            Worker
                                        </label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input
                                            type="checkbox"
                                            id="supervisor"
                                            className="mr-1"
                                            value="supervisor"
                                            checked={roles.includes("supervisor")}
                                            onChange={handleCheckboxChange}
                                            disabled={roles.length > 0 && !roles.includes("supervisor")}
                                        />
                                        <label htmlFor="supervisor" className="font-semibold ml-2">
                                            Supervisor
                                        </label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input
                                            type="checkbox"
                                            id="factory-manager"
                                            className="mr-1"
                                            value="factorymanager"
                                            checked={roles.includes("factorymanager")}
                                            onChange={handleCheckboxChange}
                                            disabled={roles.length > 0 && !roles.includes("factorymanager")}
                                        />
                                        <label htmlFor="factory-manager" className="font-semibold ml-2">
                                            Factory Manager
                                        </label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input
                                            type="checkbox"
                                            id="project-manager"
                                            className="mr-1"
                                            value="projectmanager"
                                            checked={roles.includes("projectmanager")}
                                            onChange={handleCheckboxChange}
                                            disabled={roles.length > 0 && !roles.includes("projectmanager") && !roles.includes("superadmin")}
                                        />
                                        <label htmlFor="project-manager" className="font-semibold ml-2">
                                            Project Manager
                                        </label>
                                    </div>
                                    <div className="flex items-center mr-4">
                                        <input
                                            type="checkbox"
                                            id="super-admin"
                                            className="mr-1"
                                            value="superadmin"
                                            checked={roles.includes("superadmin")}
                                            onChange={handleCheckboxChange}
                                            disabled={roles.length > 0 && !roles.includes("projectmanager") && !roles.includes("superadmin")}
                                        />
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
                                            id="subrole"
                                            name="subrole"
                                            {...formik.getFieldProps('subrole')}
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