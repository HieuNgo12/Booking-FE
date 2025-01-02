import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BodyTourList from './BodyTourList';
import SearchBar from "./SearchBar.jsx";

function TourList() {
  return (
    <div className='ml-12'>
      <Navbar />
      <div className="space-y-6 mt-4 pt-20"> 
        <SearchBar />
        <BodyTourList />
      </div>
      <Footer />
    </div>
  );
}

export default TourList;
