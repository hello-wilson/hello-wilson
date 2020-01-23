import React, { useState, useEffect } from 'react';

import LogContainer from './components/LogContainer.jsx';
import MainPage from './components/MainPage.jsx'
import ViewMessages from './components/ViewMessages.jsx'
import Answer from './components/Answer.jsx'

import './style.scss';


function App() {
  const [pageDisplay, setDisplay] = useState(undefined);

  useEffect(() => {
    if (pageDisplay === undefined) {
      setDisplay(<LogContainer setDisplay={setDisplay}/>);
    }
  },[])


  return (
    <div>
      {pageDisplay}
    </div>
  );
}

export default App;
