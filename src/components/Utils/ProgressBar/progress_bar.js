import React from 'react';
import './progress_bar.scss';

const ProgressBar = ({width}) => {
    let percentage = (width > 100) ? 100 : width;
    return (
        <div className="progress-wrapper">
            <div style={{width:`${percentage}%`}} className="progress-bar">
                <p className="uploaded-percentage" > {(percentage > 0 ? (`${percentage}%`) : "0%" )} </p>
                <p className="uploaded-text" > {(width >= 100) ? "Uploaded":"Uploading..."} </p>
            </div>
        </div>        
    )
}

export default ProgressBar;