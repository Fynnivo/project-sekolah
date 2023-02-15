import React, { useState } from 'react'
import axios from 'axios'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { Link, useHref, useNavigate } from 'react-router-dom'
import LoginNav from '../Login/LoginNav'

const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false)
    const [repeatPasswordShown, setRepeatPasswordShown] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')
    const [message, setMessage] = useState('')
    const role = 'user'
    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const register = await axios.post('http://localhost:5000/users', {
                name: name,
                email: email,
                password: password,
                confpassword: confPassword,
                role: role,
            })

            if(register.data)return navigate('/login')
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message)
            }
        }
    }


    const togglePassword = (e) => {
        e.preventDefault()
        setPasswordShown(!passwordShown);
    };
    const toggleRepeatPassword = (e) => {
        e.preventDefault()
        setRepeatPasswordShown(!repeatPasswordShown);
    };
    return (
        <div>
            <LoginNav />
            <div className='mt-6 text-center mb-6'>
                <h1 className='font-black text-purple-900 text-2xl'>Create an Account</h1>
            </div>
            {message && <div className="container lg:w-1/4 md:w-2/4 w-3/4 mx-auto flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400" role="alert">
                <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                <span className="sr-only">Info</span>
                <div>
                    <span className="font-medium">Error!</span> {message}
                </div>
            </div>}
            <form onSubmit={handleRegister}>
                <div className='container lg:w-1/4 md:w-2/4 w-3/4 mx-auto'>
                    <div className="mb-6 relative">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label htmlFor="username" className="absolute -z-10 peer-focus:z-10 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Username</label>
                    </div>
                    <div className="mb-6 relative">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 peer-focus:z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
                    </div>
                    <div className="mb-6 relative">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordShown ? "text" : "password"} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 peer-focus:z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
                        <button onClick={togglePassword} className='absolute right-4 top-[0.9rem] w-5 h-5'>{passwordShown ? <EyeSlashIcon /> : <EyeIcon />}</button>
                    </div>
                    <div className="mb-6 relative">
                        <input value={confPassword} onChange={(e) => setConfPassword(e.target.value)} type={repeatPasswordShown ? "text" : "password"} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
                        <label htmlFor="repeat-password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 -z-10 peer-focus:z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Repeat Password</label>
                        <button onClick={toggleRepeatPassword} className='absolute right-4 top-[0.9rem] w-5 h-5'>{repeatPasswordShown ? <EyeSlashIcon /> : <EyeIcon />}</button>
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link to="/" className="text-purple-600 hover:underline dark:text-blue-500">terms and conditions</Link></label>
                    </div>
                    <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Register new account</button>
                </div>
            </form>
        </div>
    )
}

export default Register