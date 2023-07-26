import React from 'react';
import {v4 as uuidv4} from "uuid"
const todo=[{
    id:    uuidv4(),
    title: "Call Home",
    desc : "This is Description"

},
{
    id:    uuidv4(),
    title: "Call Father",
    desc : "This is Description"

},
{
    id:    uuidv4(),
    title: "Call Mother",
    desc : "This is Description"

},
{
    id:    uuidv4(),
    title: "Call Brother",
    desc : "This is Description"

},
{
    id:    uuidv4(),
    title: "Call Sister",
    desc : "This is Description"

}];
const List=()=>{
    return <div>
         {todo.map((todo) => {
            const {id,title,desc}=todo;
            return <div key={id}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
         })};
    </div>
}

export default List