import React, { useEffect, useState } from 'react'
const loadingMessage = <p>Todo is Loading</p>;
const DataFetch = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("Fetching Not Okay")
        } else {
          return res.json()
        }
      })
      .then((todos) => {
        setTodos(todos);
        setIsLoading(false);
        setError(null);
        //console.log(todos);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });

  }, []);
  const todoselement = todos &&
    todos.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  return (
    <div>
      <h1>Todos</h1>
      {error && <p>{error}</p>}
      {isLoading && loadingMessage}
      {todoselement}

    </div>
  )
}

export default DataFetch
