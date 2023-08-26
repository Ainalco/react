import React from 'react';
import { UseUserContext } from './Hooks/UseUserContext';

const User = ({user}) => {  
  const {deleteUser}=UseUserContext();
   
    const handleDelete =(id)=>{        
      deleteUser(id);
    };
    const {id, username}=user;
  return (
    <article className='user'>
      <h2>{id}</h2>
      <p>{username}</p>
      <button onClick={()=>{handleDelete(id)}}>Delete</button>
    </article>
  )
}

export default User
