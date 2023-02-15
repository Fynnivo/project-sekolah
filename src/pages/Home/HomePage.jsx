import React, { useEffect } from 'react';
import NavLogin from '../../components/Navbar/Navbar2isLogin';
import NavCom2 from '../../components/Navbar/Navbar2'
import Page from './Page';
import Pricing from './Price/Pricing';
import Testimonial from './testimonial';
import Refund from './Refund';
import FooterComponent from './Footer';
import { useDispatch, useSelector } from 'react-redux'
import { getMe } from '../../features/authSlice'
import Feature from './Feature';

const HomePage = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    dispatch(getMe())
  }, [dispatch])
  return (
    <div>
      {user ? (<NavLogin />) : (<NavCom2 />)}
      <Page />
      <Feature />
      <Pricing />
      <Testimonial />
      <Refund />
      <FooterComponent />
    </div>
  )
}

export default HomePage
