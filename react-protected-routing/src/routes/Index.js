import React, { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/Home';
import About from '../pages/About';
import AddBlog from '../pages/AddBlog';
import Error from '../pages/Error';
import Navbar from '../layout/Navbar';
import Protected from '../protected/Protected';

const Index = () => {

    const [isLoggedIn, setIsLoggedIn]=useState(false);
  return (
    <BrowserRouter>
        <Navbar />
        {isLoggedIn ? <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log Out {""}</button> : <button onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>Log In</button>}
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/add-blog' element={<Protected isLoggedIn={isLoggedIn}>
                <AddBlog />
            </Protected>} />
            <Route path='*' element={<Error />} />   
        </Routes>
    </BrowserRouter>
  )
}

export default Index
