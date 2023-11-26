import React from 'react';
import ProjectCard from './ProjectCard';
import '../../index.css';

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
  const projects = [
    {
      imageUrl: projectImage1,
      projectInfo: 'E-commerce template by using HTML, CSS, Bootstrap, Angular14.',
      externalLink: 'https://ecommerce-1-eight.vercel.app'
    },
    {
      imageUrl: projectImage2,
      projectInfo: 'E-commerce template by using HTML, CSS, Bootstrap, js',
      externalLink: 'https://shop-5.vercel.app/'
    },
    {
      imageUrl: projectImage3,
      projectInfo: 'API project registration in JavaScript, React, and Redux',
      externalLink: 'https://master--gorgeous-cajeta-bd9b0e.netlify.app/'
    },
    {
      imageUrl: projectImage4,
      projectInfo: 'Dashboard system by using HTML CSS',
      externalLink: 'https://dashboard-phi.vercel.app/'
    },
    {
      imageUrl: projectImage5,
      projectInfo: 'Website Using HTML CSS JavaScript',
      externalLink: 'https://welcome-world.vercel.app/'
    },
    {
      imageUrl: projectImage6,
      projectInfo: 'E-commerce site in React.js by using JavaScript, React, and Redux',
      externalLink: 'https://github.com/MahmoudSamir2003/e-commerce-React.js'
    },
    {
      imageUrl: projectImage7,
      projectInfo: 'A Music Website Using HTML CSS JavaScript',
      externalLink: 'https://js-audio.vercel.app/'
    },
    {
      imageUrl: projectImage8,
      projectInfo: 'CRUD Project by using JavaScript and Bootstrap',
      externalLink: 'https://proudct.vercel.app/'
    },
    {
      imageUrl: projectImage9,
      projectInfo: 'Questions application in CSS, JavaScript, and React',
      externalLink: 'https://questions-application.vercel.app/'
    },
    // يمكنك إضافة المزيد من المشاريع هنا بنفس الطريقة
  ];

  return (
    <div className="container">
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
  );
};

export default MyProjects;
