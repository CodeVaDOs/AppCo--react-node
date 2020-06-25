import React from "react";
import './infoBlock.scss';

export const InfoBlock = (props) => {

    return (
        <div className="card-block flex-nowrap d-flex flex-column justify-content-center align-items-center">
            <img className="img" src={props.img} alt="img"/>
            <h2 className="title">{props.title}</h2>
            <p className="desc">{props.desc}</p>
        </div>
    )
}