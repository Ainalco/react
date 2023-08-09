import React, { useState } from 'react';
import style from './form.css';

export default function Form2() {
    const [user,setUser]=useState({name:'',email:'',password:''});
    const {name,email,password}=user;
    
    const handleChange = (e)=>{
       //const fieldName= e.target.name;
        // if(fieldName==='name'){
        //     setUser({name:e.target.value,email,password});
        // }
        // if(fieldName==='email'){
        //     setUser({name,email:e.target.value,password});
        // }
        // if(fieldName==='email'){
        //     setUser({name,email,password:e.target.value});
        // }
        setUser({...user,[e.target.name]:e.target.value}); 
    }
    const handleSubmit=(e)=>{
        
        console.log(name,email,password);
        console.log(user);
        e.preventDefault();
    }
  return (
    <div>
      <h1>Registration</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className={style.formGroup}>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' id='name' onChange={handleChange} value={name} required />
        </div>
        <div className={style.formGroup}>
        <label htmlFor='email'>Email: </label>
        <input type='email' name='email' id='email' onChange={handleChange} value={email} required />
        </div>
        <div className={style.formGroup}>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' id='password' onChange={handleChange} value={password} required />
        </div>
        <div>
        <button type='submit' className='handler'>Register</button>
        </div>
      </form>
    </div>
  )
}
