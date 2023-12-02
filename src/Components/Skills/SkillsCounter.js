import React from 'react';
import SkillLevel from './SkillLevel ';
import { faHtml5, faCss3Alt, faJsSquare,faReact,faBootstrap,faJs,faSass,faAngular } from '@fortawesome/free-brands-svg-icons';
import { useDarkMode } from "../DarkModeContext/DarkModeContext";

const SkillsCounter = () => {
  const { darkMode } = useDarkMode(); // استخدام الدارك مود

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
    <div className={`container-fluid ${darkMode ? 'dark-mode-class' : ''}`}>
    <div className="row">
      {skills.map((skill, index) => (
        <div key={index} className="col-12 col-md-6 d-flex justify-content-center">
          <SkillLevel
            icon={skill.icon}
            skill={skill.skill}
            end={skill.end}
            duration={skill.duration}
          />
        </div>
      ))}
    </div>
  </div>
  );
};

export default SkillsCounter;
