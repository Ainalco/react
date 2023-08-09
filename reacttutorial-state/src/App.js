import React from 'react';
import STATE from './State'
import CONDITIONAL_RENDERING from './Conditional_Rendering/index'
import EVENTHANDLER_CLASS from './EventHandler_Class/index'
import EVENTBINDING from './EventBinding/index'
import HOOKSUSESTATE from './HooksUsestate/index1'
import HOOKSUSESTATE2 from './HooksUsestate/index2'
import FORM from './components/Form/Form'
import FORM2 from './components/Form/Form2'

export default function App() {
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
    </div>
  )
}
