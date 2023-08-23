import React, { useEffect, useState,Fragment } from 'react';
import './App.css';
import TABLE from './components/Table';
import Users from './components/PropsType/Users';
import LifeCycle from './components/Lifecycle/Lifecycle';
import UserFrom from './components/REFExample/UserFrom';

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
      <div>
      <>
      One type of fragment
      </>
      <Fragment>
        Hi All second Fragment
      </Fragment>
      <React.Fragment>Hello All third Fragments</React.Fragment>
      </div>
      <TABLE />
      <Users />
      <LifeCycle />
      <UserFrom />
    </div>
  );
}

export default App;
