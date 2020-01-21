import React, { useState } from 'react';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';

function LogContainer() {
  const [logDisplay, setLogDisplay] = useState(<LogIn/>);
  
  return (
    
    <div id="logContainer">
      <h1>Hello Wilson</h1>
      {logDisplay}
    </div>
  )
}

export default LogContainer;