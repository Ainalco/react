import React from 'react'
import Todos from './Todos';

const dummyTodos = [{
    id:1,
    title:"Toto Title 1",
    desc:"todo description1"
},
{
    id:2,
    title:"Toto Title 2",
    desc:"todo description2"
}];


const Home = () => {
  return (
    <div>
       <Todos todos={dummyTodos}/>
    </div>
  )
}

export default Home
