import React, { useState } from 'react';
import InputText from './InputText.jsx';

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <InputText class='username'>Username:</InputText>
      <InputText class='password'>Password:</InputText>
      <button>SIGN UP</button>
    </div>
  )
}

export default SignUp;