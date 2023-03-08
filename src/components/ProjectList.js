import React from 'react';
import ProjectCard from './ProjectCard';

const myProjects = [
  {
    id: "01",
    title: "Restaurant Reservation System",
    description:
      "This is a reservation system for fine dining restaurants. The software is used only by restaurant personnel when a customer calls to request a reservation. It allows restaurant managers to create, update and save reservations, search for reservations by customer's phone number, create new tables and assign tables to reservations as well as free up tables once reservations are done with their meal.",
    imgFile: "../images/dashboardLG.png",
    technologies: "",
    githubLink: "https://github.com/cvtqx/restaurant-reservation-system",
    website: "https://restaurant-reservation-frontend-vfda.onrender.com",
  },
  {
    id: "02",
    title: "Decoder Ring",
    description:
      "This is an encryption/decryption application to communicate and read top-secret messages. I used Javasript to create logic for the following 3 tasks - Caesar shift, Polybius square, Substitution cipher",
    imgFile: ".",
    technologies: "",
    githubLink: "https://github.com/cvtqx/decoder-ring",
    website: "https://cvtqx.github.io/decoder-ring/",
  },
  {
    id: "03",
    title: "Another project",
    description:
      "This is an encryption/decryption application to communicate and read top-secret messages. I used Javasript to create logic for the following 3 tasks - Caesar shift, Polybius square, Substitution cipher",
    imgFile: ".",
    technologies: "",
    githubLink: "https://github.com/cvtqx/decoder-ring",
    website: "https://cvtqx.github.io/decoder-ring/",
  },
  {
    id: "04",
    title: "And another project",
    description:
      "This is an encryption/decryption application to communicate and read top-secret messages. I used Javasript to create logic for the following 3 tasks - Caesar shift, Polybius square, Substitution cipher",
    imgFile: ".",
    technologies: "",
    githubLink: "https://github.com/cvtqx/decoder-ring",
    website: "https://cvtqx.github.io/decoder-ring/",
  },
];

const ProjectList = () => {
  return (
  <div className="row">
    {myProjects.map(project =>{
        return <ProjectCard project={project}/>;
    })
}
    </div>
    )

}

export default ProjectList