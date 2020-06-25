import React from 'react';
import "./loaders.scss";

export const RoundLoader = () => {
    return (
        <div className="lds-ellipsis">
            <div> </div>
            <div> </div>
            <div> </div>
            <div> </div>
        </div>
    )
}