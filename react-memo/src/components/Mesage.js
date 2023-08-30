import React, { memo } from 'react'

const Mesage=({numberofMessage}) => {
    
        console.log("Message Rendering");
      return (
        <p>Send {numberofMessage} Message</p>
      )
    };


export default memo(Mesage);
