import React from 'react';

const ProgressEmpty = () => {
   return (
      <div className="progress-tiles-wrapper">
            <div className="progress-tile">
                <span className="text"> BATCHES </span>
                <span className="count"> 15 </span>
            </div> 
            <div className="progress-tile">
                <span className="text"> ACCOUNTS </span>
                <span className="count"> 3 </span>              
            </div>   
            <div className="progress-tile">
                <span className="text"> TRANSACTIONS </span>
                <span className="count"> 1300 </span>              
             </div>    
      </div>
   )
}

export default ProgressEmpty;