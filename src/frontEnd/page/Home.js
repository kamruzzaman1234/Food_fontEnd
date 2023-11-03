import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Features from './Features';
import Service from './Service';
import Category from './Category';

const Home = ()=>{
    return(
        <div>
            <Navbar />
            <Features />
            <Service />
            <Category />
            <Footer />
        </div>
    )
}
export default Home;