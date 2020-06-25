import React from "react";
import './priceBlock.scss';

export const PriceBlock = (props) => {
    const {header, img, price, list, button} = props;
    return (
        <div className="price-element d-flex flex-column justify-content-center align-items-center">
            <h2 className="title">{header}</h2>
            <img className="img" src={img} alt="img"/>
            <h1 className="price">{price}</h1>
            <ul className="list">
                {list.map(item => <li>{item}</li>)}
            </ul>
            {button}
        </div>

    )
}