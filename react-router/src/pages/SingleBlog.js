// eslint-disable-line react-hooks/exhaustive-deps
import React,{ useState} from 'react';
import { useParams,useLocation } from 'react-router-dom';


const SingleBlog = () => {   
    const { title } = useParams(); 
    const location= useLocation(); 
    // console.log(location);
    // const [bodyData, setBodyData]=useState("");
    // useEffect(() => {       
    //     const blogData=blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body);
    // }, []);
  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body.slice(0,150)}</p>
      <p>{location.state.body.slice(151,500)}</p>
    </div>
  );
}

export default SingleBlog
