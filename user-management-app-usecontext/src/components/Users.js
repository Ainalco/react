import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import User from './User';


const Users = () => {
const {users}=useContext(UserContext)
  return (
    <section className='users'>
      {users.map((user) => 
      (<User key={user.id} user={user} />))}
    </section>
  )
}

export default Users
