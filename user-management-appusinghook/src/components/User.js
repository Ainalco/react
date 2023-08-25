import React from 'react';
import { UseUserContext } from './Hooks/UseUserContext';

const User = ({user}) => {  
  const {users,setUsers}=UseUserContext();
   
    const handleDelete =(id)=>{        
        const filteredUsers = users.filter(user =>user.id!==id); 
        setUsers(filteredUsers);
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
