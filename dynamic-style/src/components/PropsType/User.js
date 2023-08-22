import React from 'react';
import propTypes from 'prop-types';

console.log(propTypes);
const User = (props) => {
  return (
    <div>
     <h3>{props.user.id}</h3>
     <h3>{props.user.name}</h3>
    </div>
  );
};

User.propTypes={
//key-value pair
user:propTypes.object.shape({
        id:propTypes.number,
        name:propTypes.string,
    }),
};
// User.defaultProps={
//     userName:"Default Name",
//     userId:0
// };

export default User
