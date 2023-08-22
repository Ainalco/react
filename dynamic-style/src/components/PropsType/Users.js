import React, { useState } from 'react';
import User from './User';

const Users = () => {
    const [user, setUser]=useState({id:123456,name:"Ainal"});
  return (
    <>
      <User user={user}/>
    </>
  )
}

export default Users
