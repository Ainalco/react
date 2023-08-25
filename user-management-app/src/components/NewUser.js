import React, { useState } from 'react'

const NewUser = () => {
  const [username, setUserName]=useState("");
  const handelUserNameChange=(event)=>{
    setUserName(event.target.value);
  }
  const handleSubmit=(event)=>{
    const newUser={id,username:username}

  }
  return (
    <div>
     <h2>User Registration</h2>
     <form onSubmit={handleSubmit}>
        <input type='text' name='username' value={username} onChange={handelUserNameChange} />
        <button type='submit'>Add User</button>
     </form>
    </div>
  )
}

export default NewUser
