import React from 'react';
import PropTypes from 'prop-types';

const User = (props) => {
  return (
    <div>
      <h1>{props.userName}</h1>
      <h1>{props.userId}</h1>
    </div>
  )
}

export default User
