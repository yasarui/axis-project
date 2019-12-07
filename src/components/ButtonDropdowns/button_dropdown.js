import React from 'react';
import './button_dropdown.scss';
const ButtonDropdown = ({varient}) => {
   return(
    <div className="axis-select-dropdown-wrapper">
        <select className={varient} value={varient}>
            <option value="success"> Accept </option>
            <option value="warning" > Put on Hold </option>
            <option value="danger" > Reject </option>
            <option value="disable"> No Action </option>
        </select>
    </div>  
   )
}

export default ButtonDropdown;