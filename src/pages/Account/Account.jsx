import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../features/authSlice'
import DashSidebarAccount from './components/DashSidebarAccount'
import DashNav from '../Dashboard/DashNav/DashNav'
import DashAccount from './components/DashAccount'

const Account = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  return (
    <div className='grid grid-cols-5'>
      <div className='md:col-span-1 lg:col-span-1 col-span-1'>
        <DashSidebarAccount />
      </div>
      <div className='lg:col-span-4 md:col-span-4 col-span-4 bg-gray-100'>
        <DashNav />
        <DashAccount />
      </div>
    </div>
  )
}

export default Account