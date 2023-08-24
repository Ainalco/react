import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Component4 = () => {
    const {user,text} = useContext(UserContext);
   // console.log(user);
  return (
    <div>
      <p>{user.id}</p>
      <p>{user.name}</p>
    </div>
  )
}

export default Component4
