import React, { useEffect, useState,Fragment } from 'react';
import './App.css';
import TABLE from './components/Table';
import Users from './components/PropsType/Users';
import LifeCycle from './components/Lifecycle/Lifecycle';
import UserFrom from './components/REFExample/UserFrom';
import USERFORM2 from './components/HOOK/UserRefExample/UserForm';
import UseReducer from './components/HOOK/UserRefExample/UseReducer';
import Component1 from './components/PROP_DRILLING/Component1';

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
      <USERFORM2 />
      <UseReducer />
      <br/>
      <hr/>
      <Component1 />
    </div>
  );
}

export default App;
