import React, { useEffect, useState } from 'react'

function InfiniteScroll() {

    const [count, setCount] = useState(50)
    let elements = [];

    useEffect(() => {

        const onScroll = () => {
            if(window.innerHeight + window.scrollY >= window.document.body.scrollHeight - 50){
                setCount(count + 50);
            }
        }

        window.addEventListener("scroll", onScroll); 

        return () => {
            window.removeEventListener("scroll", onScroll); 
        }

    }, [count]);

    for(let i = 0; i < count; i++) {
        elements.push(<div key={i}>Block No:: {i+1}</div>);
    }

  return <>{elements}</>
}

export default InfiniteScroll

/**
 * for loog -> generate element based on count
 * 
 * add listner "scroll" using useEffect 
 * 
 * track height
 * window.scrollHeight + window.scrollY >= window.document.body.scrollHeight + Buffer;
 * 
 * 
 */