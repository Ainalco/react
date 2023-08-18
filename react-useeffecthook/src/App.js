import React from 'react';
import UseEffect from './components/useEffect/UseEffect';
import DataFetch from './components/useEffect/DataFetch';
import CustomDataFetch from './components/useEffect/CustomDatafetch';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const handleAddTodo=()=>{
    toast("New Todo is Added");
  }
  const handleDeleteTodo=()=>{
    toast("Todo Is Deleted!!");
  }
  return (
    <div>
      <UseEffect />
      <DataFetch />
      <CustomDataFetch />
      <button onClick={handleAddTodo}>Add New Todo</button>
      <button onClick={handleDeleteTodo}>Delete Todo</button>
      <ToastContainer />
    </div>
  );
}
