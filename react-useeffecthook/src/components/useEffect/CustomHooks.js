/* eslint no-unused-vars : "off" */
import React, { useEffect, useState } from 'react'

const CustomHooks = (url) => {
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
}

export default CustomHooks
