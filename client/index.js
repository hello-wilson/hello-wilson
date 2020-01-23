import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

document.body.innerHTML = '<div id="app"></div>';

render(
    <App />,
  document.getElementById('app')
);
