import React from 'react';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Search from "./search";

const SearchPage = () => {
    return (
        <div>
            <Navbar />
            <Search />
            <Footer />
        </div>
    );
};

export default SearchPage;
