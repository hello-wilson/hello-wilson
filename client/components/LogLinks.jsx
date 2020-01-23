import React from 'react';

export default function LogLinks(props) {
  return (
    <div className="toggleCard">
      <button onClick={props.changeDisplay}>{props.page}</button>
    </div>
  )
}