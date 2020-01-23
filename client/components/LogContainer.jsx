import React, { useState } from 'react';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import LogLinks from './LogLinks.jsx';

function LogContainer() {
  const [logDisplay, setLogDisplay] = useState(<LogIn/>);
  const [whichDisplay, setWhichDisplay] = useState('Sign Up Page');

  const changeDisplay = () => {
    if (whichDisplay === 'Sign Up Page') {
      setWhichDisplay('Log In Page');
      setLogDisplay(<SignUp/>);
    }
    else {
      setWhichDisplay('Sign Up Page');
      setLogDisplay(<LogIn/>);
    }
  }

  return (
    
    <div id="logContainer" className="island">
      <h1>Hello Wilson</h1>
      {logDisplay}
      <LogLinks changeDisplay={changeDisplay} page={whichDisplay} />
    </div>
  )
}

export default LogContainer;