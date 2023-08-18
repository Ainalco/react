/* eslint-disable prettier/prettier */
/* eslint no-unused-vars : "off" */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//import User from './User';

const Users = (props) => {  
  //const allusers=props.users;
  console.log(props);
  const listuser=props.users.map((user) =>{
    return <article className="user" key={user.id}>
    <h3>{user.id}</h3>
    <h3 className="user__name">{user.name}</h3>
    <p className="user__email">{user.email}</p>
    <a className="user__phone" href={'tel:+' + user.phone}>
      {user.phone}
    </a>
  </article>
  });
  
  return (

    <section className="users">
      {listuser}
      
      {/* {props.users.map((user) => (
        <User key={user.id} {...user} />
      ))}      */}
      Hello
    </section>
    
  );
};

Users.propTypes = {
  users: PropTypes.array
};

export default Users;
