import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [name,setName]=useState("");
  const [validInput,setValidInput]=useState(false);
  useEffect(()=>{
    if(name.length<3){
      setValidInput(false);
    }else{
      setValidInput(true);
    }
  },[name]);
  
  const handleChange=(e)=>{
    setName(e.target.value);    
 }
  return (
    <div className="App">
      <input 
      type='text' 
      value={name} 
      onChange={handleChange}
      className={`${validInput && "valid"}`}
      ></input>
    </div>
  );
}

export default App;
