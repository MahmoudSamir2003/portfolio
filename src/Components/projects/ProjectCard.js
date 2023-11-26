import React from 'react';
import '../../index.css'; 

const ProjectCard = ({ imageUrl, projectInfo, externalLink }) => {
  const handleCardClick = () => {
    window.open(externalLink, '_blank'); // Opens the link in a new tab
  };

  return (
    <div className="card-container container col-12 col-sm-4 col-md-4 mb-4" onClick={handleCardClick}>
    <div className="card-inner row">
        <div className="card-front">
          <img src={imageUrl} alt="Project" className="img-fluid" />
        </div>
        <div className="card-back d-flex align-items-center justify-content-center">
          <p>{projectInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;