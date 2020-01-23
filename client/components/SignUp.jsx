import React, { useState } from 'react';

function SignUp() {

  return (
    <div>
      <h2>Sign Up</h2>
      Username:<br/>
      <input type="text" name="username" placeholder="username"></input><br/>
      Password:<br/>
      <input type="password" name="Password" placeholder="password"></input><br/>
      <button>SIGN UP</button>
    </div>
  )
}

export default SignUp;