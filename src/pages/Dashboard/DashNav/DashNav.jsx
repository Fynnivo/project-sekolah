import React from 'react'
import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassIcon,
  Squares2X2Icon,
  TagIcon,
  UserIcon
} from '@heroicons/react/24/solid'
import defaultProfile from '../../../asset/default-profile.png'
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { LogOut, reset } from '../../../features/authSlice'

const DashNav = () => {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setToggle(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(LogOut())
    dispatch(reset())
  }



  return (
    <div>
      <nav className="bg-gray-100 flex justify-between items-center rounded-b-lg px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className='font-black text-gray-700 text-xl'>Dashboard</div>
        <form>
          <div className='relative'>
            <input className='w-28 lg:w-full md:w-full md:h-9 lg:h-9 h-8 rounded-full border-0' type="search" placeholder='Search...' />
            <button type="submit" className="absolute right-0 top-0 md:mt-[0.65rem] mt-[0.5rem] lg:mt-[0.65rem] mr-2 md:mr-4 lg:mr-4">
              <MagnifyingGlassIcon className='text-gray-600 h-4 w-4' />
            </button>
          </div>
        </form>
        <div ref={ref}>
          <button onClick={handleToggle}>
            {user && user.imageUrl ? <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="Rounded avatar" /> : <img className="w-10 h-10 rounded-full" src={defaultProfile} alt="Rounded avatar" />}
          </button>

          {toggle && <div className="absolute right-3 z-10 bg-gray-100 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>{user.name}</div>
              <div className="font-medium truncate">{user.email}</div>
            </div>
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
              <li>
                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  <div className='flex gap-2'>
                    <Squares2X2Icon className='w-5 h-5' />
                    <span>Dashboard</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/account" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  <div className='flex gap-2'>
                    <UserIcon className='w-5 h-5' />
                    <span>Account</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/subscription" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                  <div className='flex gap-2'>
                    <TagIcon className='w-5 h-5' />
                    <span>Subscription</span>
                  </div>
                </Link>
              </li>
            </ul>
            <div className="py-1">
              <a onClick={handleLogout} href='/login' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                <div className='flex gap-2'>
                  <ArrowRightOnRectangleIcon className='w-5 h-5' />
                  <span>Sign Out</span>
                </div>
              </a>
            </div>
          </div>}

        </div>
      </nav>
    </div>
  )
}

export default DashNav