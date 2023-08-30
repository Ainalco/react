import React, { useState } from "react";
import Mesage from "./components/Mesage";

function App() {
  const [count, setCount]=useState(0);
  console.log("App Rendering");
  return (
    <div>
     <h1>Count : {count}</h1> 
     <button onClick={ ()=> {
      setCount((count) => count +1); 
      }}>Increment</button>
     <Mesage numberofMessage={count} />
    </div>
  );
}

export default App;
