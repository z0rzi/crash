import React from 'react';
import {Link} from 'react-router-dom';

function Comp1(props) {
  return (
    <div style={{height: 500}} className="Comp1">
      <h1 ref={props.scrollRef}>This is a component!</h1>
      <Link to={'/about'}>about page!</Link>
    </div>
  );
}

export default Comp1;
