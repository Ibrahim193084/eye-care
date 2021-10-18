import React from 'react';
import About from '../About/About';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Shop from '../Shop/Shop';
import Banner from './Banner/Banner';


const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
            <Shop></Shop>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;