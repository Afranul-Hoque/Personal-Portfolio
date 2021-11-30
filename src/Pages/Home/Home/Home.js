import React from 'react';
import './Home.css'
import rafi from '../../../Images/new2.jpg'
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div className="home-section">
            <div className="row">
                <div className="col-md-2 text-center menu-section">
                    <div>
                        <div>
                            <img className="img-fluid my-img" src={rafi} alt="" />
                        </div>
                        <div className="menu-items  ">
                            <h3>Home</h3>
                            <h3>About</h3>
                            <h3>Contact</h3>
                        </div>

                    </div>

                </div>

                <div className="col-md-10 dashboard-section">
                    <Banner></Banner>
                </div>
            </div>
        </div>
    );
};

export default Home;