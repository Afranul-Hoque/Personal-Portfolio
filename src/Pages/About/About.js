import React from 'react';
import programmer from '../../Images/new3.png';
import './About.css';
import Fade from 'react-reveal/Fade';


const About = () => {
    return (
        <div className="about-section container mt-5 ">
            <div className="about-me ">
                <h3>About <span className="yellow-style">Me</span></h3>
            </div>
            <div className="hr-tag">
                <hr />
            </div>
            <div className="row mt-5">
                <div className="col-md-7 d-flex mt-5 ">
                    <Fade left>
                        <div>

                            <h2 >I am <span className="main-name">Afranul Hoque</span> </h2>
                            <p className="about-description mt-3"> I am a Full Stack MERN Developer.I have experience making websites using React js, Node js, Firebase Authentication, MongoDB, Express, Javascript.
                                Building User Friendly, Dynamic, UI-based websites is truly a passion of mine and I am confident.I actively seek out new technologies and stay up to date on industry trends and advancements. I have the interest to work with a team and project-based.


                            </p>
                        </div>
                    </Fade>


                </div>



                <div className="col-md-5 about-img">
                    <Fade right big>
                        <img className="img-fluid" src={programmer} alt="" />

                    </Fade>
                </div>
            </div>

        </div>
    );
};

export default About;