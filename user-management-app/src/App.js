import React, { useState } from 'react';
import Users from './components/Users';
import NewUser from './components/NewUser';

function App() {
  const [users, setUsers]=useState([
    {id:1,username:"Kakam"},
    {id:2,username:"Jaman"}
  ]);
  const handleDleteUser=(id)=>{
    const filteredUsers = users.filter(user =>user.id!==id); 
    setUsers(filteredUsers);
  }
  return (
    <div>
      <NewUser />
      <Users users={users} handleDleteUser={handleDleteUser}/>
    </div>
  );
}

export default App;

//CRUD- Create, Read,Update,Delete User
