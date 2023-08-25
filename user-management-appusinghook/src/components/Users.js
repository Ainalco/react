import React from 'react';
import { UseUserContext } from './Hooks/UseUserContext';
import User from './User';


const Users = () => {
const {users,}=UseUserContext();
  return (
    <section className='users'>
      {users.map((user) => 
      (<User key={user.id} user={user} />))}
    </section>
  )
}

export default Users
