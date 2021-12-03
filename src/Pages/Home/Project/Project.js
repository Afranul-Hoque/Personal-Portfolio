import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import Fade from 'react-reveal/Fade';


const Project = (props) => {
    console.log(props);
    const { id, Live, name, Technology, GithubClient, GithubServer, discription, img1 } = props.project;
    return (
        <div className="col ">
            <Fade left>
                <div className="card project-details">
                    <img src={img1} className="card-img-top project-image" alt="images" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">  <span className="new-style">Description: </span> {discription.slice(0, 150)}.....</p>
                        <h6> <span className="new-style">Technology:</span>  {Technology}</h6>
                    </div>
                    <div className="project-live">
                        <a href={Live}>Live site</a>
                        <a href={GithubClient}>Client Code</a>
                        <a href={GithubServer}>Server Code</a>

                    </div>

                    <div className=" ms-2 pb-3">
                        <Link to={`/projectDetails/${id}`}>
                            <button type="button" className=" project-button mt-2 py-2"> Project Details</button>
                        </Link>
                    </div>


                </div>


            </Fade >

        </div>
    );
};

export default Project;