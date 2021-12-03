import React from 'react';
import './Banner.css';
import Fade from 'react-reveal/Fade';
import resume from '../../../resume/Afranul Hoque-Full Stack Developer.pdf'



const Banner = () => {
    return (
        <div className="Banner-section ps-4">

            <div className="d-flex banner-details  pe-3">
                <div >
                    <Fade top big>
                        <h2 >Hi, I am <span className="half-name ">Afranul Hoque</span> </h2>
                    </Fade>

                    <Fade right big>
                        <p>I am a Full Stack MERN Developer. I can provide clean code and pixel perfect design.
                            I have experience making <br /> websites using React js, Node js, Firebase Authentication, Mongodb,Express, Javascript. </p>
                    </Fade>
                    <Fade left>
                        <div className="social-link">
                            <a href="https://www.linkedin.com/in/afranul-hoque-7a7b64161/"> <i className="fab fa-linkedin"></i></a>

                            <a href="https://github.com/Afranul-Hoque"><i className="fab fa-github"></i></a>

                            <a href="https://www.facebook.com/ah.rafi.35/"><i className="fab fa-facebook"></i></a>


                        </div>
                    </Fade>

                    <Fade bottom>
                        <button type="button" className="resume-button">
                            <a href={resume} download="afranul_hoque-mern_developer.pdf"> <i class="fas fa-download pe-1"></i> Resume </a>
                        </button>
                    </Fade>

                    <Fade bottom>
                        <button type="button" className="resume-button ms-4">
                            <a href="mailto:ahrafi4554@gmail.com"> <i class="far fa-envelope pe-1"></i> Hire me </a>
                        </button>
                    </Fade>









                </div>
            </div>
        </div>



    );
};

export default Banner;