import React, { useState } from 'react';

function LogIn() {

  return (
    <div>
      <h2>Log In</h2>
      Username:<br/>
      <input type="text" name="username" placeholder="username"></input><br/>
      Password:<br/>
      <input type="password" name="Password" placeholder="password"></input><br/>
      <button>LOG IN</button>
    </div>
  )
}

export default LogIn;