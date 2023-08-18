/* eslint no-unused-vars : "off" */
import React, { useEffect, useState} from 'react'
import CustomHooks from './CustomHooks'
const CustomDataFetch = () => {
    const {data,isLoading,error} = CustomHooks("https://jsonplaceholder.typicode.com/todos");

    const loadingMessage = <p>Todo is Loading</p>;
    const errorMessage = <p>{error}</p>;
    const todoselement = data &&
    data.map((todo) => {
            return <p key={todo.id}>{todo.title}</p>;
        });

    return (
        <div>
            <h1>Custom Data Fetch</h1>
            {error && errorMessage}
            {isLoading && loadingMessage}
            {todoselement}

        </div>
    )
}

export default CustomDataFetch
