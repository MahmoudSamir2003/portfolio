import React from 'react';
import SkillLevel from './SkillLevel ';
import { faHtml5, faCss3Alt, faJsSquare,faReact,faBootstrap,faJs,faSass,faAngular } from '@fortawesome/free-brands-svg-icons';

const SkillsCounter = () => {
  const skills = [
    { icon: faHtml5, skill: "HTML", end: 100, duration: 3000 },
    { icon: faCss3Alt, skill: "CSS", end: 95, duration: 2500 },
    { icon: faBootstrap, skill: "Bootstrap", end: 95, duration: 2500 },
    { icon: faSass, skill: "Scss", end: 70, duration: 2500 },
    { icon: faJsSquare, skill: "JavaScript", end: 95, duration: 2000 },
    { icon: faJs, skill: "TypeScript ", end: 85, duration: 2000 },
    { icon: faReact, skill: "React ", end: 90, duration: 2000 },
    { icon: faAngular, skill: "Angular ", end: 85, duration: 2000 },
  ];
  return (
    <div className="skills-container col-12 col-sm-12 col-md-12 mb-12 w-100">
      {skills.map((skill, index) => (
        <SkillLevel
          key={index}
          icon={skill.icon}
          skill={skill.skill}
          end={skill.end}
          duration={skill.duration}
        />
      ))}
    </div>
  );
};

export default SkillsCounter;
