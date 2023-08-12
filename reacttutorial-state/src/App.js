import React from 'react';

import STATE from './State';
import CONDITIONAL_RENDERING from './Conditional_Rendering/index';
import EVENTHANDLER_CLASS from './EventHandler_Class/index';
import EVENTBINDING from './EventBinding/index';
import HOOKSUSESTATE from './HooksUsestate/index1';
import HOOKSUSESTATE2 from './HooksUsestate/index2';
import FORM from './components/Form/Form';
import FORM2 from './components/Form/Form2';
import CHILD from './components/StateLifting/Child';
import HOME from './components/StateLifting/Home';
import CHILDTODO from './ChildTodo';

const Todo=(props)=>{
  return(
    <div>{props.title}</div>
  );
};

export default function App() {
  const data="I am from Parent (App)";
  const handleChildData=(childData)=>{
      console.log("App:"+childData);
  }
  const handleChildTodo=(childData)=>{
    console.log("App2:"+childData);
}
  return (
    <div>
      <STATE />
      <CONDITIONAL_RENDERING />
      <EVENTHANDLER_CLASS />
      <EVENTBINDING />
      <HOOKSUSESTATE />
      <HOOKSUSESTATE2 />
      <FORM />
      <FORM2 />
      <CHILD data={data} onChildData={handleChildData}/>
      <Todo title="Learn React.ja"/>
      <CHILDTODO onChildTodaData={handleChildTodo}/>
      <HOME />
    </div>
  )
}
