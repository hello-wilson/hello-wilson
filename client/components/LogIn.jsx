import React, { useState } from 'react';
import InputText from './InputText.jsx';

function LogIn() {
  return (
    <div>
      <h2>Log In</h2>
      <InputText class='username'>Username:</InputText>
      <InputText class='password'>Password:</InputText>
      <button>LOG IN</button>
    </div>
  )
}

export default LogIn;