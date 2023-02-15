import React, { useEffect } from 'react';
import Navbar2 from '../../components/Navbar/Navbar2'
import NavUser from '../../components/Navbar/Navbar2isLogin'
import AboutMe from './component/AboutMe';
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../features/authSlice'

const About = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  return (
    <div>
      {user ?  <NavUser /> : <Navbar2 />}
      <AboutMe />
    </div>
  )
}

export default About