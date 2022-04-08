import React, { useEffect, useRef } from 'react'

const UseRef2 = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, [])

  return (
    <div>
        <h2>auto focus input</h2>
        <input type="text" ref={inputRef}/>
    </div>
  )
}

export default UseRef2