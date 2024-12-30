import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function HotelFavoriteListPage() {
  return (
    <div className="center-gov">
      <Navbar />
      <div className="hotel-favorites ">Hotel Favorites</div>
      <div className="mt-6 flex card-container">
        <div class="grid grid-cols-3 gap-3">
          {savedList.length
            ? savedList.map((hotel) => {
                return <FavoriteCard hotel={hotel} />;
              })
            : null}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HotelFavoriteListPage