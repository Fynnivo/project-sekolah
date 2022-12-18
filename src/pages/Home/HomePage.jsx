import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Page from './Page';
import Pricing from './Price/Pricing';
import Testimonial from './testimonial';
import Refund from './Refund';
import FooterComponent from './Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Page />
      <Pricing />
      <Testimonial />
      <Refund />
      <FooterComponent />
    </div>
  )
}

export default HomePage
