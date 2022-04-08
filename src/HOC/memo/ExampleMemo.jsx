import React, { useState } from 'react'
import ChildContent from './ChildContent';

const ExampleMemo = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increase1 = () => {
        setCount1 (count1 + 1);
    }
    const increase2 = () => {
        setCount2 (count2 + 1);
    }
   return (
       <div style={{ padding: '10pt 32px' }}>
            <h1>{count1}</h1>
            <h1>{count2}</h1>
            <button onClick={increase1}>Click me1!</button>
            <button onClick={increase2}>Click me2!</button>
            <ChildContent count1={count1}/>
       </div>
   )
 
}

export default ExampleMemo