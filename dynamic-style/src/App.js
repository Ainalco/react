import React from 'react';
import './App.css';

function App() {
  const error = false;
  return (
    <div className="App">
      <h1 style={{color:error?'red':'green'}}>Welcome</h1>
    </div>
  );
}

export default App;
