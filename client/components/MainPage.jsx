import React, { useState } from 'react';


function MainPage() {

return (
    <div id="mainPage">
        <h2>Hello Wilson</h2>
        <button id="sendMessage">View or Send Your Messages<img src="/assets/Bottle.svg"></img></button>
        <button id="replyToMessage">Reply to Someone Else<img src="/assets/Letter.svg"></img></button>
      <div className="island"></div>
    </div>
  )
}

export default MainPage;