import React, { useState } from 'react';
import Users from './components/Users';

function App() {
  const [users, setUser]=useState([
    {id:1,username:"Kakam"},
    {id:2,username:"Jaman"}
  ]);
  return (
    <div>
      <Users users={users} />
    </div>
  );
}

export default App;

//CRUD- Create, Read,Update,Delete User
