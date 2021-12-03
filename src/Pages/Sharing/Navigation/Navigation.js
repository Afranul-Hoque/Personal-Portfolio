import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import rafi from '../../../Images/new2.jpg'

const Navigation = () => {
    return (
        <div className="navigation-section">

            <nav className="navbar navbar-expand-lg navbar-dark    ">
                <div className="container-fluid">
                    <Link to="/home" className="nav-link active company-name"> Afranul Hoque</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon  "></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-link" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <Link to="/home" className="   nav-link active">Home</Link>



                            <Link to="/about" className=" text-white nav-link ">About</Link>



                            <Link to="/projects" className=" text-white nav-link ">Projects</Link>

                            <Link to="/contacts" className=" text-white nav-link ">Contact</Link>

                            <Link to="/blogs" className=" text-white nav-link ">Blogs</Link>



                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;