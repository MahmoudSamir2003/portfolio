import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillLevel = ({ icon, skill, end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // If the end value is 0, no need to run the counter
    if (end === 0) {
      return;
    }

    // Calculate the step based on end value and duration
    let step = (end / duration) * 100;

    const interval = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + step;
        if (newCount >= end) {
          clearInterval(interval);
          return end;
        }
        return newCount;
      });
    }, 100); // Update interval every 100 ms

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [end, duration]);

  return (
    <div className="skill-level">
      <FontAwesomeIcon icon={icon} size="2x" />
      <h3>{skill}</h3>
      <div className="counter">{Math.min(Math.round(count), end)}</div>
    </div>
  );
};

export default SkillLevel;
