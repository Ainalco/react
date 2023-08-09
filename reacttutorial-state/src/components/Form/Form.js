import React, { useState } from 'react';
import style from './form.css';

export default function Form() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleNameChange=(e)=>{
        setName(e.target.value);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePasswordChange=(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit=(e)=>{
        
        console.log(name,email,password);
        let userInfo={
            name,
            email,
            password
        }
        console.log(userInfo);
        e.preventDefault();
    }
  return (
    <div>
      <h1>Registration</h1>
      <form action='' onSubmit={handleSubmit}>
        <div className={style.formGroup}>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' id='name' onChange={handleNameChange} value={name} required />
        </div>
        <div className={style.formGroup}>
        <label htmlFor='email'>Email: </label>
        <input type='email' name='email' id='email' onChange={handleEmailChange} value={email} required />
        </div>
        <div className={style.formGroup}>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' id='password' onChange={handlePasswordChange} value={password} required />
        </div>
        <div>
        <button type='submit' className='handler'>Register</button>
        </div>
      </form>
    </div>
  )
}
