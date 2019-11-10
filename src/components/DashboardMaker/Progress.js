import React from 'react';

const Progress = () => {
   return(
    <div className="progress-tiles-wrapper">
        <div className="progress-tile">
            <span className="text"> BATCHES </span>
            <span className="count"> 15 </span>
        </div>
        <div className="progress-tile">
            <span className="text"> APPROVED TRANSACTIONS </span>
            <span className="count"> 1300 </span>              
        </div>
        <div className="progress-tile">
            <span className="text"> TRANSACTIONS ON HOLD </span>
            <span className="count"> 130 </span>              
        </div>
        <div className="progress-tile">
            <span className="text"> REJECTED TRANSACTIONS </span>
            <span className="count"> 235 </span>              
        </div>
    </div>
   )
}

export default Progress;