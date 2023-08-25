import React, {createContext,useState} from 'react';
export const UserContext=createContext({});

const UsersProvider = ({children})=>{
    const [users, setUsers]=useState([
        {id:1,username:"Kakam"},
        {id:2,username:"Jaman"}
      ]);

      return  <UserContext.Provider value={{users,setUsers}}>
        {children}
      </UserContext.Provider>
}

export default UsersProvider;