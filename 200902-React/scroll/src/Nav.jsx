import React from 'react';
import './Nav.scss';
import {Link} from 'react-router-dom';

function Nav(props) {
    return (
        <>
            <div className="offset"></div>
            <div className="Nav">
                <Link to={'#comp1'}>
                    <div className="link" onClick={() => props.onClick(0)}>comp1</div>
                </Link><Link to={'#comp2'}>
                    <div className="link" onClick={() => props.onClick(1)}>comp2</div>
                </Link><Link to={'#comp3'}>
                    <div className="link" onClick={() => props.onClick(2)}>comp3</div>
                </Link>
            </div>
        </>
    );
}

export default Nav;
