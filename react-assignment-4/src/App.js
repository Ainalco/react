/* eslint-disable prettier/prettier */
/* eslint no-unused-vars : "off" */
import React,{ useEffect, useState } from 'react';

import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setAllUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw Error('Fetching Not Okay')
        } else {
          return res.json()
        }
      })
      .then((users) => {
        setAllUsers(users);
        setIsLoading(false);
        setError(null);
        console.log(users);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });

  }, []);
  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading users...</p>}       
     <Users users={users}/>
    </div>
  );
};

export default App;
