import React, { useEffect, useState } from 'react'
import useCustomEffect from './useCustomEffect.js';

function UseEffectApp() {

    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("rendered");
    // },[count])

    useCustomEffect(() => {
        console.log("rendered");

        return () => {
            console.log("cleanUp");
        }

    }, [])

  return (
    <div className='flex flex-col items-center justify-center bg-violet-400 w-1/2'>
        <h1 className="font-bold text-xl m-2 ">{count}</h1>
        <button className='bg-red-400 m-2 w-1/3 font-bold text-xl' onClick={() => setCount(count + 1)}>+</button>
        <button className='bg-red-400 m-2 w-1/3 font-bold text-xl' onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default UseEffectApp


/**
 * UseEffect=> 
 * 
 * Runs =>  
 *          - if dependency array is empty only once (when component is mounted)
 *          - if dependency array present then whenever it changes
 *          - if no dependency array -- run everytime(infinitely) 
 * 
 * cleanup function =>
 *          - when component gets unmounted 
 *          - dependency array changes
 * 
 * -> can't simulate component unmount functionlity- 
 *                 1- react uses fibre tree algo & 
 *                 2- process called reconciliation which manages comp lifecycles
 * 
 * -> what we can implement is invoking the cleanup func when the dependency array changes 
 * */ 