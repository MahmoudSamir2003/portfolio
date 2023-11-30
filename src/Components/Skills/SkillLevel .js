import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SkillLevel = ({ icon, skill, end, duration }) => {
  const [count, setCount] = useState(0);
  const counterElement = useRef();

  useEffect(() => {
    if (end === 0) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
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
          }, 100);

          observer.disconnect();
        }
      });
    });

    observer.observe(counterElement.current);

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <div className="skill-level" ref={counterElement}>
      <FontAwesomeIcon icon={icon} size="2x" />
      <h3>{skill}</h3>
      <div className="counter">{Math.min(Math.round(count), end)}</div>
    </div>
  );
};

export default SkillLevel;
