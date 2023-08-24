import React, { useState } from 'react';
import Component2 from './Component2';
import { UserContext } from './UserContext';

const Component1 = () => {
    const [user,setUser]=useState({id:101,name:"Ainal"});
    const [text,setText]=useState("Hello I am Text");
    return (   
    <div>
        <UserContext.Provider value={{user,text}}>
            <Component2 />
        </UserContext.Provider>

    </div>
  )
}

export default Component1
