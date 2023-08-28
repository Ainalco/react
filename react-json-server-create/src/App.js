import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [users, setUsers]=useState([]);
  
  const getAllUsers = async ()=>{
    const response = await axios.get("http://localhost:3001/users");
    setUsers(response.data);
  }

  useEffect(()=>{
    getAllUsers();
  },[])

  return (
    <div className="App">
      {users.map(user =>{
        return (
          <article key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </article>
        )
      })}
    </div>
  );
}

export default App;
