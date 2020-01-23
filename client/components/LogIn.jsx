import React, { useState } from 'react';
import MainPage from './MainPage.jsx';

function LogIn(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <h2>Log In</h2>
      <label htmlFor="username">Username:</label><br/>
      <input type="text" name="username" placeholder="username" onChange={e => setUsername(e.target.value)}></input><br/>
      <label htmlFor="password">Password:</label><br/>
      <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)}></input><br/>
      <button onClick={() => {
        fetch('/login', {
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
          else console.log("Error Logging In");
      })
      }}>Log In</button>
    </div>
  )
}

export default LogIn;