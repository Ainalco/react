import React, { useState } from 'react'

export default function HooksUsestate2() {
    const [count, setCount]=useState(0)
    const handlerIncrement=()=>{
        setCount(count + 1)
    }
    return (
    <div>
     <h1>Count: {count}</h1>
        <button className='handler' onClick={handlerIncrement}>Increment</button>
    </div>
  )
}
