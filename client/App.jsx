import React, { useState } from 'react';

import LogContainer from './components/LogContainer.jsx';
import Main from './components/MainPage.jsx'
import ViewMessages from './components/ViewMessages.jsx'
import Answer from './components/Answer.jsx'


function App() {
  const [pageDisplay, setDisplay] = useState(<LogContainer/>);
  

  return (
    <div>
      {pageDisplay}
    </div>
  );
}

export default App;
