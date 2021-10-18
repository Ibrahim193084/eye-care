import React from 'react';
import About from '../About/About';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Shop from '../Shop/Shop';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Shop></Shop>
            <About></About>
        </div>
    );
};

export default Home;