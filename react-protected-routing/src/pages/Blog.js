import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import {blogsData} from '../data';

const Blog = () => {
  const [blogs]=useState(blogsData);

  const truncatesrting=(str,num)=>{
    if(str.length > num){
      return str.slice(0,num) + "...";
    }else{
      return str;
    }
  };
  return (
    <div>
      <h1>Blog Page</h1>
      <section>
        {blogs.map((blog)=>{
          const {id,title,body}=blog;
          return <article key={id}>
            <h2>{title}</h2>
            <p>{truncatesrting(body,100)}</p>
            <Link to={title} state={{id,title,body}}>Learn More</Link>
          </article>
        })}
      </section>
    </div>
  )
}

export default Blog
