import React, { useEffect, useState } from 'react'
import { dummyText } from './sample'


function TextGenerate() {

    let timer;

    const [text , setText ] = useState('');
    const [started , setStarted ] = useState(false);

    const handleGenerate = () => {

        if(started) return;

        setStarted(true); 
        let i = -1;

        timer = setInterval(() => {
            ++i;
            if( i === dummyText.length -1) {
                clearInterval(timer);
            }
            setText((prev) => prev + dummyText[i]);
        }, 50)
    }

    const handleReset = () => {
        setText("");
        clearInterval(timer);
        setStarted(false);
    }


    // make sure whenever the component unmounts it gets clear if incase it is not cleared.
    useEffect(() => {

        return clearInterval(timer);
    },[])

  return (
    <div>
        <div>
            <button onClick={handleGenerate}>Generate</button>
            <button onClick={handleReset}>Reset</button>
        </div>

        <div>
            {
                !text ? "Click Generate text and see TypeWriter effect" : text
            }
        </div>
    </div>
  )
}

export default TextGenerate