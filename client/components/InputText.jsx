import React from 'react';

export default function LogLinks(props) {
  return (
    <div>
    <label>
      {props.children}
      <input type='text'/>
    </label>
    </div>
  )
};