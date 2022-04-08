import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const [count, setCount] = useState(60);
    const prevCount = useRef();

    const timeId = useRef();
    console.log("timeId", timeId.current);

    useEffect(() => {
        prevCount.current = count;
        console.log(`${count} - ${prevCount.current} in useEffect`);
    }, [count])

    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);

        console.log("start timeId --->", timeId.current);
    }

    const handleStop = () => {
        clearInterval(timeId.current);
        console.log("start timeId --->", timeId.current);
        
    }

    console.log(count, prevCount.current);    //get count and prev count here

  return (
    <div style={{padding: '30px'}}>
        <h2>{count}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default UseRef