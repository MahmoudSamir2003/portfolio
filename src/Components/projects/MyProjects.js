import React from 'react';
import ProjectCard from './ProjectCard';
import '../../index.css';
import { useDarkMode } from '../DarkModeContext/DarkModeContext'; // Import the hook from its path


import projectImage1 from '.././assets/img/project-angular.png';
import projectImage2 from '.././assets/img/shop-cara.png';
import projectImage3 from '.././assets/img/movies-api.png';
import projectImage4 from '.././assets/img/Control Panel.png';
import projectImage5 from '.././assets/img/project-world.png';
import projectImage6 from '.././assets/img/shop-react.png';
import projectImage7 from '.././assets/img/song.png';
import projectImage8 from '.././assets/img/add-proudct.png';
import projectImage9 from '.././assets/img/question .png';

const MyProjects = () => {
  const { darkMode } = useDarkMode(); // Use the dark mode value from context
  const projects = [
    {
      imageUrl: projectImage1,
      projectInfo: 'my project E-commerce template by using HTML, CSS, Bootstrap, Angular14.',
      externalLink: 'https://ecommerce-1-eight.vercel.app'
    },
    {
      imageUrl: projectImage2,
      projectInfo: 'my project E-commerce template by using HTML, CSS, Bootstrap, js',
      externalLink: 'https://shop-5.vercel.app/'
    },
    {
      imageUrl: projectImage3,
      projectInfo: 'my project API project registration in JavaScript, React, and Redux',
      externalLink: 'https://master--gorgeous-cajeta-bd9b0e.netlify.app/'
    },
    {
      imageUrl: projectImage4,
      projectInfo: 'my project Dashboard system by using HTML CSS',
      externalLink: 'https://dashboard-phi.vercel.app/'
    },
    {
      imageUrl: projectImage5,
      projectInfo: 'my project Website Using HTML CSS JavaScript',
      externalLink: 'https://welcome-world.vercel.app/'
    },
    {
      imageUrl: projectImage6,
      projectInfo: 'my project E-commerce site in React.js by using JavaScript, React, and Redux',
      externalLink: 'https://github.com/MahmoudSamir2003/e-commerce-React.js'
    },
    {
      imageUrl: projectImage7,
      projectInfo: 'my project A Music Website Using HTML CSS JavaScript',
      externalLink: 'https://js-audio.vercel.app/'
    },
    {
      imageUrl: projectImage8,
      projectInfo: 'my project CRUD Project by using JavaScript and Bootstrap',
      externalLink: 'https://proudct.vercel.app/'
    },
    {
      imageUrl: projectImage9,
      projectInfo: 'my project Questions application in CSS, JavaScript, and React',
      externalLink: 'https://questions-application.vercel.app/'
    },
  ];

  return (
    <div className={darkMode ? 'dark-mode' : ''}> {/* This will wrap all content */}
    <div className={`container ${darkMode ? 'dark-mode-class' : ''}`}>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            projectInfo={project.projectInfo}
            externalLink={project.externalLink}
          />
        ))}
      </div>
    </div>
  </div>
  );
};

export default MyProjects;
