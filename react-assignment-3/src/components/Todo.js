/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint no-unused-vars : "off" */

import React from 'react';
import PropTypes from 'prop-types';

const Todo = (props) => {
 
  const { title, desc } = props.todo;
  const { id } = props;
  //console.log(props);
  return (
    <article className="todo">
      <h3 className="todo__title">{title}</h3>
      <p>{desc}</p>
    </article>
  );
};

Todo.propTypes = {
  todo: PropTypes.shape({
    id:PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string
  })
};

export default Todo;
