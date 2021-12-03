
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Fade from 'react-reveal/Fade';
import './ProjectDetails.css'


const ProjectDetails = () => {
    const { projectId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('../MainData.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    const filterProjects = details.filter(detail => (detail.id == projectId))
    const detailData = filterProjects[0];
    console.log(detailData);


    return (
        // <div>
        //     <h2>hi baby {projectId}</h2>
        //     <h3>{detailData?.name}</h3>
        // </div>
        <div class="container details-section">
            <div className="col ">
                <Fade left>
                    <div className="card project-full">
                        <img src={detailData?.img1} className="card-img-top project-image" alt="images" />
                        <img src={detailData?.img2} className="card-img-top project-image" alt="images" />
                        <div className="card-body">
                            <h5 className="card-title">{detailData?.name}</h5>
                            <p className="card-text">  <span className="new-style">Description: </span> {detailData?.discription}</p>
                            <h6> <span className="new-style">Technology:</span>  {detailData?.Technology}</h6>
                            <h6>Duration: {detailData?.Duration}</h6>
                        </div>
                        <div className="project-live">
                            <a href={detailData?.Live}>Live site</a>
                            <a href={detailData?.GithubClient}>Client Code</a>
                            <a href={detailData?.GithubServer}>Server Code</a>

                        </div>




                    </div>


                </Fade >
            </div>
        </div>
    );
};

export default ProjectDetails;