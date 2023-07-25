import React from 'react';
// import Stylerule from './components/Stylerule';
import Card from './components/Card';


function App(){
    return <div><h1 className='secondheadingStyle'>To do App</h1>
            {/* <Stylerule /> */}
            <Card titleTxt="Call Mother" descText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Card titleTxt="Call Father" descText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Card titleTxt="Call Brother" descText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
            <Card titleTxt="Call Sister" descText="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />

    </div>

}

export default App;