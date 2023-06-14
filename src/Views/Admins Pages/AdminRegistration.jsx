import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { usernameValidate, passwordValidate, confirmPasswordValidate } from '../../helper/validate'
import { Link } from 'react-router-dom'

function AdminRegistration() {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
            dob: ''
        },
        validate: (values) => {
            usernameValidate(values) // Calling the validate functions
            passwordValidate(values)
            confirmPasswordValidate(values)
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
        }
    })

    return (
        <div className='flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-screen bg-black bg-opacity-0 backdrop-filter backdrop-blur-md overflow-scroll'>

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='w-full lg:h-fit relative h-full bg-white rounded-xl shadow-lg dark:border md:mt-0 sm:max-w-md p-8'>
                <h2 className="text-center text-5xl font-PoetSenOne font-bold leading-9 tracking-tight text-blue-600">
                    Register
                </h2>
                <h2 className="mt-3 text-center leading-9 tracking-tight text-gray-700">
                    Tell Us Your Role.
                </h2>

    {/* Select Role */}

                <div className="relative w-1/2 mt-9 lg:max-w-sm">
                    <select className="w-full p-2.5 text-black font-semibold bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                        <option className='font-semibold'>Select Role</option>
                        <option className='font-semibold'>Supervisor</option>
                        <option className='font-semibold'>Project Manager</option>
                        <option className='font-semibold'>Factory Manager</option>
                        <option className='font-semibold'>Super Admin</option>
                    </select>
                </div>

    {/* Provide Details */}
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor=" username" className="block text-sm font-medium leading-6 text-gray-900">
                                User name
                            </label>
                            <div className="mt-2 relative flex items-center">
                                <FaUserAlt className='size="25" absolute right-2 pointer-events-none' />
                                <input
                                    id="username"
                                    name="Username"
                                    {...formik.getFieldProps('username')}
                                    placeholder=' User name'
                                    type="username"
                                    autoComplete="User name"
                                    required
                                    className="block w-full rounded-md border-b py-1.5 ps-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

    {/* Password */}

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                </div>
                            </div>
                            <div className="mt-2  relative flex items-center">
                                {showPassword ? <AiFillEye className='size="25" absolute right-2 hover:text-violet-700' onClick={() => setShowPassword(false)} /> :
                                    <AiFillEyeInvisible className='size="25" absolute right-2 hover:text-violet-700' onClick={() => setShowPassword(true)} />}
                                <input
                                    {...formik.getFieldProps('password')}
                                    id="password"
                                    name="password"
                                    placeholder='Enter your Password'
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-b py-1.5 ps-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

    {/* Confirm Password */}

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password
                                </label>
                                <div className="text-sm">
                                </div>
                            </div>
                            <div className="mt-2  relative flex items-center">
                                {showConfirmPassword ? <AiFillEye className='size="25" absolute right-2 hover:text-violet-700' onClick={() => setShowConfirmPassword(false)} /> :
                                    <AiFillEyeInvisible className='size="25" absolute right-2 hover:text-violet-700' onClick={() => setShowConfirmPassword(true)} />}
                                <input
                                    {...formik.getFieldProps('confirmPassword')}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder=' Confirm Password'
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    autoComplete=""
                                    required
                                    className="block w-full rounded-md border-b py-1.5 ps-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

    {/* Date Of Birth */}

                        <div>
                            <label htmlFor=" username" className="block text-sm font-medium leading-6 text-gray-900">
                                DOB
                            </label>
                            <div className="mt-2 relative flex items-center">
                                <FaUserAlt className='size="25" absolute right-2 pointer-events-none' />
                                <input
                                    id="username"
                                    name="Username"
                                    {...formik.getFieldProps('dob')}
                                    placeholder=' DOB '
                                    type="date"
                                    autoComplete=""
                                    required
                                    className="block w-full rounded-md border-b py-1.5 ps-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform active:scale-y-75 transition-transform">
                                <Link to="/">Submit</Link>
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-row items-center justify-center">
                        <div className="border-t border-b border-gray-400 h-auto inline-block w-1/4 sm:w-1/6"></div>
                        <div className="text-center px-4">or</div>
                        <div className="border-t border-b border-gray-400 h-auto inline-block w-1/4 sm:w-1/6"></div>
                    </div>
                    <p className='text-center'>
                        <a href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                            Face Registration
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdminRegistration