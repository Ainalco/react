import React, { useState } from 'react';
import Users from './components/Users';
import NewUser from './components/NewUser';
import { UserContext } from './components/Context/UserContext';

function App() {
  const [users, setUsers]=useState([
    {id:1,username:"Kakam"},
    {id:2,username:"Jaman"}
  ]);

 
  return (
    <UserContext.Provider value={{users,setUsers}}>
    <div>
      <NewUser />
      <Users />
    </div>
    </UserContext.Provider>
  );
}

export default App;

//CRUD- Create, Read,Update,Delete User
