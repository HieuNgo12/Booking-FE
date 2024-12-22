import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HomePageBody from './components/HomePageBody'

function HomePage() {
  return (
    <div className='center-gov'>
      <Navbar />
      <HomePageBody />
      <Footer />
    </div>
  )
}

export default HomePage
