import React, { useEffect, useMemo, useState } from 'react'
import useCustomMemo from './useCustomMemo.js';

function UseMemoApp() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);


    const squaredValue = () => {
        console.log("running----")
        return count * count;
    }

    const memoizedSquaredValue = useCustomMemo(squaredValue, [count]);

  return (
    <div className='flex flex-col items-center justify-start bg-violet-400 w-full h-screen p-10'>
        <h1 className="font-bold text-xl m-2 ">{count}</h1>
        <h1 className="font-bold text-xl m-2 ">Squared Counter:: {memoizedSquaredValue}</h1>
        <button className='bg-red-400 m-2 w-1/3 font-bold text-xl' onClick={() => setCount(count + 1)}>+</button>
        <button className='bg-red-400 m-2 w-1/3 font-bold text-xl' onClick={() => setCount(count - 1)}>-</button>
        <hr />
        <hr />
        <hr />
        <hr />
        <h1 className="font-bold text-xl m-2 ">{count1}</h1>
        <button className='bg-red-400 m-2 w-1/3 font-bold text-xl' onClick={() => setCount1(count1 + 1)}>+</button>
        <button className='bg-red-400 m-2 w-1/3 font-bold text-xl' onClick={() => setCount1(count1 - 1)}>-</button>
    </div>
  )
}

export default UseMemoApp


/*
 * functions get fired again when the component is rerendered 
    so, we can use useMemo hook to memoize expoensive calc during rerenders
    useMemo => takes 2 things 1- callBack 2- dependencies (fires function only when the dep changes)
    --> this will prevent function from firing during state change/ rerenders


 */

