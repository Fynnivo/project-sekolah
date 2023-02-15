import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LoginUser, reset } from '../../features/authSlice'
import LoginNav from './LoginNav'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { Spinner } from 'flowbite-react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordShown, setPasswordShown] = useState(false)
  const [rememberMe, setRememberMe] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault()
    setPasswordShown(!passwordShown);
  };
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/dashboard')
    }
    dispatch(reset())
  }, [user, isSuccess, dispatch, navigate])

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(LoginUser({ email, password, rememberMe }))

  }

  return (
    <div>
      <LoginNav />
      <div className='text-center mt-6 mb-4'>
        <h1 className='font-black text-purple-900 text-2xl'>Log in</h1>
      </div>
      {isError && <div className="container lg:w-1/4 md:w-2/4 w-3/4 mx-auto flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400" role="alert">
        <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Info</span>
        <div>
          <span className="font-medium">Error!</span> {message}
        </div>
      </div>
      }
      <form onSubmit={handleLogin} className='mt-6'>
        <div className='container lg:w-1/4 md:w-2/4 w-3/4 mx-auto'>
          <div className="mb-6 relative">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email</label>
          </div>
          <div className="mb-6 relative">
            <input value={password} onChange={(e) => setPassword(e.target.value)} type={passwordShown ? "text" : "password"} className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer" placeholder=" " />
            <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
            <button onClick={togglePassword} className='absolute right-4 top-[0.9rem] w-5 h-5'>{passwordShown ? <EyeSlashIcon /> : <EyeIcon />}</button>
          </div>
          <div className='mb-6'>
            <label className='flex items-center gap-2'>
              <input
                className='rounded-md'
                type='checkbox'
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <p className='text-sm font-medium'>Remember Me</p>
            </label>
          </div>
          <button type="submit" className="text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isLoading ? <><Spinner
            color="purple"
            aria-label="Purple spinner example"
            size="sm"
          /> Loading..</> : <p>Login</p>}</button>
        </div>
      </form>
    </div>

  )
}

export default Login