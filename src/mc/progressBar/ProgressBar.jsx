import React, { useEffect, useState } from 'react';
import { MAX, MIN } from './constants';

function ProgressBar({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
    
    if(percent >= 100) {
        onComplete();
    }

  }, [value, onComplete, percent]);

  return (
    <>
    <div className="progress relative font-sans h-6 w-10/12 bg-gray-300 rounded-full border-black border-2 overflow-hidden">
      <span className="absolute z-10 flex justify-center w-full items-center" style={{ color: `${percent > 49 ? "white" : "black"}` }}>{percent.toFixed()}%</span>
      <div 
        role='progressbar' 
        aria-valuemin={MIN} 
        aria-valuenow={percent}
        aria-valuemax={MAX}
        className="h-full bg-green-400" 
        // style={{ width: `${percent}%` }}
        style={{ 
            transform: `scaleX(${percent / MAX})`,
            transformOrigin: "left"
        }}
    >

    </div>
    </div>
      <h1 className='bg-black text-white w-full'>{value}</h1>
    </>
  );
}

export default ProgressBar;
