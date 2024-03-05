import React, { useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar'

function ProgressApp() {

    let timer = useRef();
    const [value, setValue] = useState(0);
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        timer.current = setInterval(() => {
            setValue((prev) => prev + 1);
        }, 100);

       
        return () => {
            clearInterval(timer.current);
        }
        
    }, [success]);

    useEffect(() => {
        if (success) {
            clearInterval(timer.current);
        }
    }, [success]);   

  return (
    <div className="wrapper flex flex-col items-center gap-5">
        <span>Progress Bar</span>
        <ProgressBar 
            value={value} 
            onComplete={() => setSuccess(true)}
        />
        <span>{success ? "Complete!" : "Loading..." }</span>
    </div>
  )
}

export default ProgressApp