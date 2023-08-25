import React from 'react';
import NewUser from './components/NewUser';
import Users from './components/Users';
import UsersProvider from './components/Context/UserContext';

function App() { 
  return (
    <UsersProvider>
    <div>
      <NewUser />
      <Users />
    </div>
    </UsersProvider>
  );
}

export default App;

//CRUD- Create, Read,Update,Delete User
