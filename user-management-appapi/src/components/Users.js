import React from 'react';
import User from './User';

const Users = ({users,handleDleteUser}) => {
  return (
    <section className='users'>
      {users.map((user) => 
      (<User key={user.id} user={user} handleDleteUser={handleDleteUser}/>))}
    </section>
  )
}

export default Users
