import React, { useEffect, useState } from 'react';

function Timer({duration}) {
  const [time, setTime] = useState(duration);
  
  useEffect(() => {
    const timerId = setTimeout(() => {
        setTime((prev) => prev - 1000 );
    }, 1000)

    return () => clearTimeout(timerId);
  },[time]);

  const getFormattedTime = () => {

    const total_seconds = parseInt(Math.floor(time) / 1000 ) ;
    const total_minutes = parseInt(Math.floor(total_seconds) / 60 ) ;
    const total_hours = parseInt(Math.floor(total_minutes) / 60 ) ;
    const total_days = parseInt(Math.floor(total_hours) / 24 ) ;

    const seconds = parseInt(total_seconds) % 60;
    const minutes = parseInt(total_minutes) % 60;
    const hours = parseInt(total_hours) % 24;

    return `${total_days} : ${hours} : ${minutes} : ${seconds}`
  }

  return (
    <>
      <div>{getFormattedTime()}</div>
    </>
  );
}

export default Timer;
