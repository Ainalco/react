import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div>
    <h1>Contact Page</h1>
    <p>Culpa aliqua ut incididunt proident ipsum pariatur reprehenderit fugiat sunt non commodo. Ut est anim duis aliquip in anim irure aute consequat nisi do reprehenderit magna adipisicing. Sint duis minim culpa aliqua incididunt quis culpa et nostrud deserunt irure amet. Labore minim eiusmod ad eiusmod laboris sunt nostrud fugiat laborum incididunt ullamco eiusmod consectetur aute.</p>
    <p>Adipisicing Lorem sit tempor nostrud irure. Occaecat id cillum dolore Lorem anim adipisicing aliquip deserunt sunt dolore mollit sit laborum commodo. Est sint incididunt nisi deserunt et consequat enim sint laboris consectetur ipsum. Minim ut ad Lorem laborum voluptate pariatur sint adipisicing.</p>
    <button onClick={()=>{navigate("/")}}> Goto Home Page</button>
  </div>
  )
}

export default Contact
