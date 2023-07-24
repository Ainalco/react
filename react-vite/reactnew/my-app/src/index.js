import React from 'react';
import ReactDOM from 'react-dom/client';

const todoTitle="Hello World";
const todoDescription="Hello World";
const date=new Date();
const curentYear=date.getFullYear();
const dateName=date.getDate();
const dateMonth=date.getMonth();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <h1>To do App</h1>
  <h3>{todoTitle}</h3>
  <p>{todoDescription}</p>
  <p>{dateName+'/'+dateMonth+'/'+curentYear}</p>
  </div>);

