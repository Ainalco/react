import React from 'react';
// import Stylerule from './components/Stylerule';
import Card from './components/Card';
import Data from './data.json';
import List from "./components/UniqueList/list"

//let items=[];
// for(let x=0;x<Data.length;x++){
//     items.push(<Card titleTxt={Data[x].title} descText={Data[x].desc} />)
// }

//for mapping
// items =Data.map((item) => <Card titleTxt={item.title} descText={item.desc} />);

function App(){
    return <div><h1 className='secondheadingStyle'>To do App</h1>
            {/* <Stylerule /> */}
           {/* {items} */}
           {Data.map((item, index) => <Card key={index} titleTxt={item.title} descText={item.desc} />)};
           <>
           <List />
           </>
    </div>

}

export default App;