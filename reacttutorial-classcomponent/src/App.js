import React from 'react';
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
import ReactBoostrap from './components/ReactBoostrap';
function Welcome(){
	return <h2>Welcome</h2>;
  //same work just different way
 // return React.createElement("h1",{},"Welcome");
} 

function Welcome2(){
	  return React.createElement("h1",{},"Welcome to our Message");
}

function Showinfo(){
  return (
    <div>
      <p>Title</p>
      <p>Description</p>
    </div>
  );
} 

function Showinfo2(){
  return React.createElement("div",{},
  React.createElement("p",{},"Title2"),
  React.createElement("p",{},"Description2")
  );
} 
function App() {
  return (
  <div>
    <Card1 name="New Card" desc="this is card One"/>
    <Card2 name="New Card2"/>
    <Welcome />
    <Welcome2 />
    <Showinfo />
    <Showinfo2 />
    <Card3 />
    <ReactBoostrap />
  </div>
  );
}

export default App;
