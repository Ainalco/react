/* eslint-disable prettier/prettier */
/* eslint no-unused-vars : "off" */
import React,{ useEffect, useState } from 'react';

//import Users from './components/Users';

const App = () => {
  // step1 : declare three states here : users, isLoading, error
  const [users, setAllUsers] = useState(null);
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
  
  const allUserList = users &&
  users.map((todo) => {
      return <article className="user" key={todo.id}>
        <h3>{todo.id}</h3>
        <h3 className="user__name">{todo.name}</h3>
        <p className="user__email">{todo.email}</p>
        <a className="user__phone" href={'tel:+' + todo.phone}>
        {todo.phone}
      </a>
        </article>;
    });
    // const listuser=users.map((todo) =>{
    //   return <article  key={todo.id}>
    //   <h3>{todo.id}</h3>
    //   <h3>{todo.name}</h3>
    //   <p>{todo.email}</p>
    //   <a  href={'tel:+' + todo.phone}>
    //     {todo.phone}
    //   </a>
    // </article>
    // });

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {error && <p>{error}</p>}
      {isLoading && <p>Loading users...</p>} 
      <section className="users">
      {allUserList}
      </section>     
     {/* <Users users={users}/> */}
    
     {/* {listuser} */}
    </div>
  );
};

export default App;
