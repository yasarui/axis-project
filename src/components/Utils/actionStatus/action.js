import React from 'react';
import './actions.scss';

const ActionStatus = ({sortAssending,sortDesending,columnName,hideColumn,filterByCol,tableIndex}) => {
   return(
    <div className="action-status">
        <ul>
          <li className="accept-all"><span></span> Accept All</li>
          <li className="hole-all"><span></span> Hold All</li>
          <li className="reject-all"><span></span> Reject All</li>
          <li className="no-action-all"><span></span> No action on All</li>
        </ul>
        <span className="action-filter"><img src="./images/filter.svg" /> Filter</span>
        <div className="select-wrap">
          <select>
            <option></option>
            <option>Option</option>
          </select>
        </div>
    </div>
   )
}

export default ActionStatus;