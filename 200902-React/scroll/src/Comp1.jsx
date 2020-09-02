import React from 'react';

function Comp1(props) {
  return (
    <div style={{height: 500}} className="Comp1">
      <h1 ref={props.scrollRef}>This is a component!</h1>
    </div>
  );
}

export default Comp1;
