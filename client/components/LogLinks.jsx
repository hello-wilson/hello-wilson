import React from 'react';

export default function LogLinks(props) {
  return (
    <div>
      <button onClick={props.changeDisplay}>{props.page}</button>
    </div>
  )
}