import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Toaster, toast } from 'react-hot-toast'
import { useFormik } from 'formik'
import { usernameValidate, passwordValidate } from '../../helper/validate'
import { Link } from 'react-router-dom'
import axios from '../../api/axios'

function AdminLogin() {

    const [showPassword, setShowPassword] = useState(false)

    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: (values) => {
            usernameValidate(values) // Calling the validate functions
            passwordValidate(values)
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            try {
                const response = await axios.post('/auth/login', JSON.stringify( { username : values.username, password: values.password } ), 
                {
                    headers: { 
                        'Content-Type': 'application/json'
                    }
                })
                toast.success(response.data.message);
                console.log( JSON.stringify(response.data) );
                localStorage.setItem('_id', response.data.data._id)
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('username', response.data.data.username)
                localStorage.setItem('role', response.data.data.roles)
                localStorage.setItem('id', response.data.data.userId)
                localStorage.setItem('name', response.data.data.name)
            } catch (error) {
                if (error.response && error.response.data) {
                    toast.error(error.response.data.message);
                  } else {
                    console.log(JSON.stringify(error));
                  }                  
            }
        }
    })

    return ( 
        <div className='flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-screen bg-black bg-opacity-0 backdrop-filter backdrop-blur-md'>

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='w-full bg-white rounded-xl shadow-lg dark:border md:mt-0 sm:max-w-md p-8'>
                <h2 className="mt-10 text-center text-5xl font-PoetSenOne font-bold leading-9 tracking-tight text-blue-600">
                    Login
                </h2>
                <h2 className="mt-3 text-center leading-9 tracking-tight text-gray-700">
                    Verify it's you
                </h2>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>

                        {/* Username */}

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
                                    placeholder=' Enter your Password'
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-b py-1.5 ps-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* Submit */}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transform active:scale-y-75 transition-transform">
                                <Link to="/select-dashboard">Submit</Link>
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-row items-center justify-center">
                        <div className="border-t border-b border-gray-400 h-auto inline-block w-1/4 sm:w-1/6"></div>
                        <div className="text-center px-4">or</div>
                        <div className="border-t border-b border-gray-400 h-auto inline-block w-1/4 sm:w-1/6"></div>
                    </div>

                    {/* Face Unlock */}

                    <p className='text-center'>
                        <a href="#" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
                            Face Unlock
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin