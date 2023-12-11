import React from 'react';

function Button(props) {
  return (
    <button className={props.className} style={props.style} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;