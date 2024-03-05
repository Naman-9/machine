import './Traffic.css';
import React, { useEffect, useState } from 'react';

// Traffic State Object
const TrafficState = {
  red: {
    duration: 4000,
    backgroundColor: 'red',
    next: 'green',
  },
  yellow: {
    duration: 3000,
    backgroundColor: 'yellow',
    next: 'red',
  },
  green: {
    duration: 4000,
    backgroundColor: 'green',
    next: 'yellow',
  },
};

function TrafficLight() {
  const [currentColor, setCurrentColor] = useState('green');

  useEffect(() => {
    const { duration, next } = TrafficState[currentColor];

    const timerId = setTimeout(() => {
      setCurrentColor(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentColor]);

  return (
    <div className="wrapper">
      <div className="traffic-light-container">
        {Object.keys(TrafficState).map((color) => (
          <div
            className="traffic-light"
            key={color}
            style={{
                // if object name is same as of currentColor then only iterate for bgc
              backgroundColor: color === currentColor && TrafficState[color].backgroundColor,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TrafficLight;

/**
 * working
 * 1- get data as Traffic State Object 
 *      this will give duration, backgroundColor, next color
 * 
 * 2- 1 useState to maintian current Color and change color according to this
 * 
 * 3- useEffect to change set Color Timer to change to "next" 
 *                                       at specific "duration"
 * 
 * UI 
 * 1- iterate Traffic State Object for traffic Colors 
 * 2- change the state of traffic colors only if the color is same as currentColor 
 * {style: backgroundColor: color === currentColor && TrafficState[color].backgroundColor}
 * 
 * 
 */
