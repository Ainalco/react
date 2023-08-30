import React, { memo,useMemo } from 'react';

const Mesage=({numberofMessage,onHandleIncrement}) => {
    
        console.log("Message Rendering");

       const calculatedNumber = useMemo(
        () => {
          let number = 0;
        for(let i=0;i<500000000;i++){
          number ++;
        }
        return number;
        }, [])
      return (
        <div>
            <h2>Number : {calculatedNumber}</h2>
            <p>Send {numberofMessage} Message</p>
            <button onClick={onHandleIncrement}>Add Message</button>
        </div>
      )
    };


export default memo(Mesage);
