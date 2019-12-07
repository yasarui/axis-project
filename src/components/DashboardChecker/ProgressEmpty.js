import React from 'react';

const ProgressEmpty = (props) => {
   return (
      <div className="progress-tiles-wrapper">
            <div className="progress-tile" onClick={()=>props.setTabIndex(1,0)} >
                <span className="text"> BATCHES </span>
                <span className="count"> 15 </span>
            </div> 
            <div className="progress-tile" onClick={()=>props.setTabIndex(1,1)}>
                <span className="text"> ACCOUNTS </span>
                <span className="count"> 3 </span>              
            </div>   
            <div className="progress-tile" onClick={()=>props.setTabIndex(1,2)}>
                <span className="text"> TRANSACTIONS </span>
                <span className="count"> 1300 </span>              
             </div>    
      </div>
   )
}

export default ProgressEmpty;