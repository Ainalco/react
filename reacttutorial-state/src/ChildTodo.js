import React from 'react';


const ChildTodo=(props)=>{
  const data="I am from Child Toto";
    props.onChildTodaData(data);
    return(
      <div>{props.title}</div>
    );
  };

  export default ChildTodo