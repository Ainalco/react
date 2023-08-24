import React, { useState } from 'react';
import Component2 from './Component2';
import { UserContext } from './UserContext';;

const Component1 = () => {
    const [user,setUser]=useState({id:101,name:"Ainal"});
  return (   
    <div>
        <UserContext />
      <Component2 user={user}/>
    </div>
  )
}

export default Component1
