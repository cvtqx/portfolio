import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className="col-sm-6 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
          <img
            src={project.imgFile}
            className="card-img-top"
            alt="Desktop view"
          />
          <div className="card-body">
            <h5 className="card-title">{project.title}</h5>
            <p className="card-text">{project.description}</p>
            <p className="card-text">Technologies used will be listed here</p>
            <a href={project.githubLink} className="btn btn-primary">
              Github repo
            </a>
            <a href={project.website} className="btn btn-primary">
              Webpage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard