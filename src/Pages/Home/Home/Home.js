import React from 'react';
import About from '../../About/About';
import Navigation from '../../Sharing/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import NewBanner from '../NewBanner/NewBanner'

const Home = () => {
    return (
        <div>
            <NewBanner></NewBanner>
            <About></About>
            <Projects></Projects>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;