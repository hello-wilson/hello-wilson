import React, { useState } from 'react';

function LogIn() {

  return (
    <div>
      <h2>Log In</h2>
      <label htmlFor="username">Username:</label><br/>
      <input type="text" name="username" placeholder="username"></input><br/>
      <label htmlFor="password">Password:</label><br/>
      <input type="password" name="password" placeholder="password"></input><br/>
      <button>Log In</button>
    </div>
  )
}

export default LogIn;