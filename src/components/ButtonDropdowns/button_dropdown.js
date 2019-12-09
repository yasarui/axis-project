import React,{useState} from 'react';
import './button_dropdown.scss';
const ButtonDropdown = ({varient}) => {
   const [value,setValue] = useState(varient);
   function handleChange(e){
       console.log("value ",e.target.value);
   }
   return(
    <div className="axis-select-dropdown-wrapper">
        <select onChange={(e)=>setValue(e.target.value)} className={value} value={value}>
            <option value="success"> Accept </option>
            <option value="warning" > Put on Hold </option>
            <option value="danger" > Reject </option>
            <option value="disable"> No Action </option>
        </select>
    </div>  
   )
}

export default ButtonDropdown;