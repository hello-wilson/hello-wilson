import React, { useState } from 'react';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import LogLinks from './LogLinks.jsx';

function LogContainer() {
  const [logDisplay, setLogDisplay] = useState(<LogIn/>);
  const [whichDisplay, setWhichDisplay] = useState('Sign Up Page');
  const [whichId, setWhichId] = useState('logIn');

  const changeDisplay = () => {
    if (whichDisplay === 'Sign Up Page') {
      setWhichDisplay('Log In Page');
      setWhichId('signUp');
      setLogDisplay(<SignUp/>);
    }
    else {
      setWhichDisplay('Sign Up Page');
      setWhichId('logIn');
      setLogDisplay(<LogIn/>);
    }
  }

  return (
    
    <div id="logContainer">
    <div className="island"></div>
      <h1>Hello Wilson</h1>
      <div id={whichId}>
        {logDisplay}
        <LogLinks changeDisplay={changeDisplay} page={whichDisplay} />
      </div>
      <div className="island"></div>
    </div>
  )
}

export default LogContainer;