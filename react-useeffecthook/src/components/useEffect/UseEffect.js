import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0);
    const [isloading, setIsLoading] = useState(false);
    // const handleOnClick = () => {
    //     setCount(count => count + 1);
    // }
    useEffect(()=>{
        console.log("UseEffect");
    },[count])
    return (
        <div>
            {console.log("Randering")}
            <h1>Count: {count}</h1>
            {/* <button onClick={handleOnClick}>+</button> */}
            <button onClick={()=>{setCount(count=>count+1)}}>+</button>
            <button onClick={()=>{setIsLoading(!isloading)}}>isLoading</button>
        </div>
    )
}

export default UseEffect
