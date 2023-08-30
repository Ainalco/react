import React, { memo } from 'react'

const Mesage=({numberofMessage,onHandleIncrement}) => {
    
        console.log("Message Rendering");
      return (
        <div>
            <p>Send {numberofMessage} Message</p>
            <button onClick={onHandleIncrement}>Add Message</button>
        </div>
      )
    };


export default memo(Mesage);
