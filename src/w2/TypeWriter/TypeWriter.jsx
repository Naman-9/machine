import React, { useEffect, useRef, useState } from 'react';

const dummyText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laudantium libero soluta, esse quasi aliquid quas magnam porro a, sint labore, quo nisi sed dolor animi necessitatibus odit maxime numquam.';

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
      i++;
      if (i === dummyText.length - 1) clearInterval(timerIdRef.current);
      setText((prev) => prev + dummyText[i]);
    }, 50);
  };

  const handleReset = () => {
    setText('');
    setStarted(false)
    clearInterval(timerIdRef.current);
  };


  useEffect(() => {
    return clearInterval(timerIdRef.current);
  }, [])

  return (
    <div>
      <div>
        <button onClick={handleGenerate}>Generate</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>{!text ? "Click on 'Generate' to see the TypeWriter Effect." : text}</div>
    </div>
  );
}

export default TypeWriter;
