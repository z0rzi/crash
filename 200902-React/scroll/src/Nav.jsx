import React from 'react';
import { useWindowScroll } from "react-use";
import './Nav.scss';

function scrollTo(comp) {
    console.log(comp);
}

function Nav(props) {
    return (
        <>
            <div className="offset"></div>
            <div className="Nav">
                <div className="link" onClick={() => props.onClick(0)}>comp1</div>
                <div className="link" onClick={() => props.onClick(1)}>comp2</div>
                <div className="link" onClick={() => props.onClick(2)}>comp3</div>
            </div>
        </>
    );
}

export default Nav;
