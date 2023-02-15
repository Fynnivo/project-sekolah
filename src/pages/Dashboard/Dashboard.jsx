import React, { useEffect, useRef } from 'react'
import DashboardActiveSidebar from './DashboardActiveSidebar'
import DashMain from './DashMain/DashMain'
import DashNav from './DashNav/DashNav'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMe } from '../../features/authSlice'
import axios from 'axios'


let navigate

const Dashboard = () => {
  const ref = useRef(false)
  const dispatch = useDispatch()
  navigate = useNavigate()
  const { isError } = useSelector((state) => state.auth)

  const createCustomer = async () => {
      try {
        await axios.get('http://localhost:5000/me')
      } catch (error) {
        console.log(error.data.message)
      }
    }
  // const getme = async () => {
  //   await axios.get('http://localhost:5000/me').then((res) => {
  //     const user = res.data
  //     createCustomer(user.name, user.email)
  //   })
  // }

  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  useEffect(() => {
    if (isError) return navigate('/login')
  }, [dispatch, isError])
  useEffect(() => {
    if (ref.current === false) {
      createCustomer()
      return () => ref.current = true
    }
  }, [])

  return (
    <div className='grid grid-cols-5'>
      <div className='md:col-span-1 lg:col-span-1 col-span-1'>
        <DashboardActiveSidebar />
      </div>
      <div className='lg:col-span-4 md:col-span-4 col-span-4 bg-gray-100'>
        <DashNav />
        <DashMain />
      </div>
    </div>
  )
}

export default Dashboard