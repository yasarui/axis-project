import React from 'react';
import './actions.scss';

const Actions = ({sortAssending,sortDesending,columnName,hideColumn,tableIndex}) => {
   return(
    <div className="actions">
        <ul>
            <li onClick={()=>sortAssending(columnName)} > 
                <i class="fas fa-sort-amount-up"></i> Sort Assending 
            </li>
            <li onClick={()=>sortDesending(columnName)}> 
                <i class="fas fa-sort-amount-down"></i> Sort Desending </li>
            <li> 
                <i class="fa fa-filter" aria-hidden="true"></i> 
                 Filter 
                <input type="text" /> <br/>
            </li>
            <li onClick={()=>hideColumn(tableIndex)} >  
                <i class="fa fa-eye-slash" aria-hidden="true"></i> 
                Hide 
            </li>
            <li> 
                <i class="fa fa-lock" aria-hidden="true"></i> 
                Freeze 
            </li>
        </ul>
    </div>
   )
}

export default Actions;