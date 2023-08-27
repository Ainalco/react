import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Error from './pages/Error';
import User from './pages/User';
import Navbar from './components/Navbar';


import "./App.css";

function App() { 
  return (   
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:title' element={<SingleBlog />} />
            <Route path='*' element={<Error />} />
            <Route path='/user' element={<User />} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;


