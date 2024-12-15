import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FavoriteCard from './components/FavoriteCard'
import "./HotelFavoriteListPage.css"
function HotelFavoriteListPage() {
  return (
    <div>
        <Navbar />
        <div className='hotel-favorites'>
            Hotel Favorites
        </div>
        <div>
           <FavoriteCard />
        </div>
        <Footer />
    </div>
  )
}

export default HotelFavoriteListPage