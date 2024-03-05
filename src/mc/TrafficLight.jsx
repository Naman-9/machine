import React, {useState, useEffect} from 'react'

const TrafficStates = {
    red: {
        duration: 4000,
        backgroundColor: 'red',
        next: 'green'
    },
    yellow: {
        duration: 3000,
        backgroundColor: 'yellow',
        next: 'red'
    },
    green: {
        duration: 3500,
        backgroundColor: 'green',
        next: 'yellow'
    },
}
                                    

function TrafficLight() {
    const [currentColor, setCurrentColor] = useState('green');

    useEffect(() => {
      const { duration, next } = TrafficStates[currentColor];

      const timerId = setTimeout(() => {
        setCurrentColor(next)
      },duration)
    
      return () => {
        clearTimeout(timerId);
      }
    }, [currentColor])
    

  return (
    <div className="wrapper">
        <div className="traffic-light-container">
            {
                Object.keys(TrafficStates).map((color) => (
                    <div 
                        key= {color}
                        className="traffic-light"
                        style={{backgroundColor: color === currentColor && TrafficStates[color].backgroundColor}} 
                     > </div>
                ))
            }
        </div>
    </div>
  )
}

export default TrafficLight