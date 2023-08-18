import React from 'react';
import UseEffect from './components/useEffect/UseEffect';
import DataFetch from './components/useEffect/DataFetch';
import CustomDataFetch from './components/useEffect/CustomDatafetch';

export default function App() {
  return (
    <div>
      <UseEffect />
      <DataFetch />
      <CustomDataFetch />
    </div>
  );
}
