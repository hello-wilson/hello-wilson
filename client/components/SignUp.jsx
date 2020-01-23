import React, { useState } from 'react';
import MainPage from './MainPage.jsx';

function SignUp(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  console.log("From Signup", props)
  
  return (
    <div>
      <h2>Sign Up</h2>
      Username:<br/>
      <input type="text" name="username" placeholder="username" onChange={e => setUsername(e.target.value)}></input><br/>
      Password:<br/>
      <input type="password" name="Password" placeholder="password" onChange={e => setPassword(e.target.value)}></input><br/>
      <button onClick={() => {
        fetch('/signup', {
          method: 'POST',
          body: JSON.stringify({username, password}),
          headers: {'Content-Type': 'application/json'}
          })
      // .then(response => response.json())
      .then(response => {
        console.log(response.status)
          if (response.status === 200){
              props.setDisplay(<MainPage setDisplay={props.setDisplay}/>);
          }
          else console.log("Error Signing Up");
      })
      }}>Sign Up</button>
    </div>
  )
}

export default SignUp;