import React, { useState } from 'react'

const NewUser = ({handleAddNewUser}) => {
  const [username, setUserName]=useState("");
  const handelUserNameChange=(event)=>{
    setUserName(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    const newUser={id:new Date().getTime().toString(),username:username}
    handleAddNewUser(newUser);
    setUserName("");
  }
  return (
    <div>
     <h2>User Registration</h2>
     <form onSubmit={handleSubmit}>
        <input type='text' name='username' value={username} onChange={handelUserNameChange} required />
        <button type='submit'>Add User</button>
     </form>
    </div>
  )
}

export default NewUser
