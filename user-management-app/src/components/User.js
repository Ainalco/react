import React from 'react'

const User = ({user,handleDleteUser}) => {
    const {id, username}=user;
    const handleDelete =(id)=>{        
        handleDleteUser(id);
    };
  return (
    <article className='user'>
      <h2>{id}</h2>
      <p>{username}</p>
      <button onClick={()=>{handleDelete(id)}}>Delete</button>
    </article>
  )
}

export default User
