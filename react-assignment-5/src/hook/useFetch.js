/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint no-unused-vars : "off" */
import React,{ useState, useEffect }  from 'react';

const useFetch = (url) => {
  // Task 1: complete this custom hook
  // step1: create 3 states: data, isLoading, error
  // step2: fetch data & handle error
  // step3: return 3 states
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => { 
      fetch(url)
          .then((res) => {
              if (!res.ok) {
                  throw Error("Fetching Not Okay")
              } else {
                  return res.json()
              }
          })
          .then((data) => {
              setData(data);
              setIsLoading(false);
              setError(null);
              //console.log(todos);
          })
          .catch((error) => {
              setError(error.message);
              setIsLoading(false);
          });
  }, [url]);

  return {data,isLoading,error}
  
};



export default useFetch;
