import React, { useCallback, useState } from "react";
import Mesage from "./components/Mesage";

function App() {
  const [count, setCount]=useState(0);
  const [toggle, setToggle]=useState(false);
  console.log("App Rendering");
  const handleIncrementMessage = useCallback(()=>{
    setCount(count +1);
  },[count]);
  return (
    <div>
      {toggle?'On':'Off'}
      <button onClick={()=>{
        setToggle(!toggle);
      }}>Toggle</button>
     <h1>Count : {count}</h1> 
     <button onClick={ ()=> {
      setCount((count) => count +1); 
      }}>Increment</button>
     <Mesage numberofMessage={count} onHandleIncrement={handleIncrementMessage}/>
    </div>
  );
}

export default App;
