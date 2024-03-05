import React, { useEffect, useRef, useState } from 'react'

const dummyText = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium libero soluta, esse quasi aliquid quas magnam porro a, sint labore, quo nisi sed dolor animi necessitatibus odit maxime numquam.";

function TypeWriter() {

    let timerId;

    const timerIdRef = useRef(timerId);

    const [text, setText] = useState('');
    const [started, setStarted] = useState(false)


    const handleGenerate = () => {

        if(started) return;

        setStarted(true);

        let i = -1;
        timerIdRef.current = setInterval(() => {

            ++i;
            // if 'i' value equals to dummyText's length then clearInterval 
            if( i === dummyText.length - 1) {
                clearInterval(timerIdRef.timerIdRef.current);
            }
            setText((prev) => prev + dummyText[i]);
        }, 50)
    }

    const handleReset = () => {
        clearInterval(timerIdRef.current);
        setText('');
        setStarted(false);
    }

    useEffect(() => {
        return clearInterval(timerIdRef.current);

    }, [])


  return (
    <div>
        <div>
            <button onClick={handleGenerate}>Generate</button>
            <button onClick={handleReset}>Reset</button>
        </div>

        <div>
            {
                !text ? "Click 'Generate' text and see TypeWriter Effect" : text 
            }
        </div>
    </div>
  )

}

export default TypeWriter

/**
 * Working 
 * 1- timerId variable for setTimer Id
 * 1.1- timerId ref -> as we are using it in useEffect and useEffect remembers the current value
 * 2- 2 useState 1- for text
 *               2- for started/ not flag
 * 3- handleGenetrate 
 *      if started -- return
 *      setStarted -- true
 *      i variable == -1
 *      
 *      start timerInterval -> inc i 
 *                          -> if i = length clearInterval
 *                          -> else add to the Text [i]
 * 
 * 4- handleReset -> clearInterval, setStarted(false), setText("")
 * 
 * 5- useEffect() -> clearInterval
 * 
 * 
 * UI 
 * 
 * Generate Text only if it is there 
 */