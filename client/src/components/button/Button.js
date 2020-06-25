import React from "react";
import {Link} from "react-router-dom";

import './button.scss';

export const Button = (props) => {
    let button;
    switch (props.type) {
        case 1:
            button = <button className="Button1">{props.text}</button>;
            break;
        case 2:
            button = <button className="Button2">{props.text}</button>;
            break;
        case 3:
            button = <button className="Button3">{props.text}</button>;
            break;
        default:
            button = <button className="firstButton">{props.text}</button>
    }

    return (
        <span>
            <Link to={props.to}>{button}</Link>
        </span>
    )
}

