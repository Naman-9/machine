import React, { useEffect, useState } from 'react';
import './Traffic.css';

// object to give specific color details
const TrafficStates = {
    red: {
        duration: 4000,
        backgroundColor: 'red',
        next: 'green',
    },
    yellow: {
        duration: 4000,
        backgroundColor: 'yellow',
        next: 'red',
    },
    green: {
        duration: 4000,
        backgroundColor: 'green',
        next: 'yellow',
    },
}

function TrafficLight() {

    // to track current color
    const [currentColor, setCurrentColor] = useState('green');

    useEffect(() => {
        // destructure duration and next from trafficState
        const { duration, next } = TrafficStates[currentColor]

        const timerId = setTimeout(() => {
            setCurrentColor(next);
        }, duration);

        return () => {
            clearTimeout(timerId);
        }

    }, [currentColor])

  return (
    <div className='wrapper'>here
        <div className="traffic-light-container">
            {
                Object.keys(TrafficStates).map((color) => (
                    <div 
                        className="traffic-light"
                        key={color}
                         // if object name is same as of currentColor then only iterate for bgc
                        style={{backgroundColor: color === currentColor && TrafficStates[color].backgroundColor}}
                    >

                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TrafficLight


/**
 * Working :: 
 *
 * 1- get traffic color data specificlly "TrafficStates{}" --
 *    it will give duration, backgroundColor, next color
 * 
 * 2- 1 state to have currentColor Status
 * 
 * 3- useEffect- to set timer for changing color to "next" 
 *                                  at a specific "duration"
 *     ->both needs to be destructured from TrafficStates
 *     -> add cleanup also
 * 
 * 
 * UI ::
 * 1- iterate TrafficStates Object 
 * 2- hardcode Background Color  
    if object name is same as of currentColor then only iterate for bgc
 * 
 * 
 * 
 */