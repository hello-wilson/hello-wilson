import React, { useState } from 'react';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';
import LogLinks from './LogLinks.jsx';

function LogContainer(props) {
  console.log('From Log Container', props)

  const [logDisplay, setLogDisplay] = useState(<LogIn setDisplay={props.setDisplay}/>);
  const [whichDisplay, setWhichDisplay] = useState('Sign Up Page');
  const [whichId, setWhichId] = useState('logIn');

  const changeDisplay = () => {
    if (whichDisplay === 'Sign Up Page') {
      setWhichDisplay('Log In Page');
      setWhichId('signUp');
      setLogDisplay(<SignUp setDisplay={props.setDisplay}/>);
    }
    else {
      setWhichDisplay('Sign Up Page');
      setWhichId('logIn');
      setLogDisplay(<LogIn setDisplay={props.setDisplay}/>);
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
    </div>
  )
}

export default LogContainer;