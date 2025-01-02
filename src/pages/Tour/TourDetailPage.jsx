import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

import BodyTourDetailPage from './BodyTourDetailPage';

function TourDetailPage() {
  return (
    <div className='ml-12'>
    <Navbar />
    <BodyTourDetailPage/>
    <Footer />
  </div>
  )
}

export default TourDetailPage