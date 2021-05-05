import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../footer';


export const home = () => {
    return (
        <>
            <HeroSection/>
            <Cards/>
            <Footer/>
        </>
    )
}
export default home;
