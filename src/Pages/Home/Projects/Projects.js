import React from 'react';
import { useState, useEffect } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState();

    useEffect(() => {
        fetch('./MainData.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])
    return (
        <div className="container mt-5 pt-5">
            <div className="about-me ">
                <h3>My <span className="yellow-style">Projects</span></h3>
            </div>
            <div className="hr-tag mb-5">
                <hr />
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                {
                    projects?.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;