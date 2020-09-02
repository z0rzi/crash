import React from 'react';

function Comp2(props) {
  return (
    <div style={{height: 100}} className="Comp2">
      <h1 ref={props.scrollRef}>This is a second component!</h1>
      <p>
        Just some content for that component!
      </p>
    </div>
  );
}

export default Comp2;
