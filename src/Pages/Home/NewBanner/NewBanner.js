import React from 'react';
import Fade from 'react-reveal/Fade';
import resume from '../../../resume/Afranul Hoque-Full Stack Developer.pdf';
import './NewBanner.css';
import Particles from "react-tsparticles";
import Navigation from '../../Sharing/Navigation/Navigation';
import myimg from '../../../Images/mypics.png';
import { Typewriter } from 'react-simple-typewriter';



const NewBanner = () => {
    const particlesInit = (main) => {
        console.log(main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="Banner-section ps-4">
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    // background: {
                    //     color: {
                    //         value: "rgb(8, 8, 8)",
                    //     },
                    // },
                    fpsLimit: 800,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: false,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "random",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 4,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div>
                <Navigation></Navigation>

                <div className=" banner-details  pe-3">
                    <Fade left>
                        <div className="myimg">
                            <img src={myimg} alt="" />
                        </div>
                    </Fade>
                    <div className="pb-5">
                        <Fade top big>
                            <h2 >Hi, I am a <span className="half-name" style={{ fontWeight: 'bold' }}>

                                <Typewriter
                                    words={[' MERN Developer', 'Web Developer', 'React Developer']}
                                    loop={5}
                                    cursor
                                    cursorStyle=''
                                    typeSpeed={50}
                                    deleteSpeed={30}
                                    delaySpeed={1000}

                                />
                            </span> </h2>
                        </Fade>

                        <Fade right big>
                            <p>I can provide clean code and pixel perfect design.
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
        </div>

    );
};

export default NewBanner;