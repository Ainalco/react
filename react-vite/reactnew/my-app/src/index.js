import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const todoTitle="Hello World";
const todoDescription="Hello World";
const date=new Date();
const curentYear=date.getFullYear();
const dateName=date.getDate();
const dateMonth=date.getMonth();
const headingStyle={
  backgroundColor:"purple",
  color:"white",
  textAlign:"center",
  padding:"15px",
  fontSize:"16px"

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <h1 style={headingStyle}>To do App</h1>
  <h3 className='secondheadingStyle'>{todoTitle}</h3>
  <p className='paragraphStyle'>{todoDescription}</p>
  <p style={{
  backgroundColor:"purple",
  color:"white",
  textAlign:"center",
  padding:"15px",
  fontSize:"16px"

}}>{dateName+'/'+dateMonth+'/'+curentYear}</p>
  </div>);

