import React from 'react';
import './actions.scss';

const Actions = ({sortAssending,sortDesending,columnName,hideColumn,filterByCol,tableIndex}) => {
   return(
    <div className="actions">
        <ul>
            <li onClick={()=>sortAssending(columnName)} > 
                <i class="fas fa-sort-amount-up"></i> Sort Assending 
            </li>
            <li onClick={()=>sortDesending(columnName)}> 
                <i class="fas fa-sort-amount-down"></i> Sort Desending </li>
            <li onClick={(e)=> e.stopPropagation() } > 
                <i class="fa fa-filter" aria-hidden="true"></i> 
                 Filter 
                <input type="text" onChange={(e)=>filterByCol(e,columnName)} /> <br/>
            </li>
            <li onClick={()=>hideColumn(columnName)} >  
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