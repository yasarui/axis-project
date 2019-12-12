import React,{useState} from 'react';
import './button_dropdown.scss';
const ButtonDropdown = ({varient}) => {
   const [value,setValue] = useState(varient);
   function handleChange(e){
       console.log("value ",e.target.value);
   }
   var dropdownText;
   if(value) {
    dropdownText = 'Accept';
   }
   switch(value) {
    case 'success':
      dropdownText = 'Accept'
      break;
    case 'warning':
      dropdownText = 'Put on Hold'
      break;
    case 'danger':
      dropdownText = 'Reject'
      break;
    case 'disable':
      dropdownText = 'No Action'
      break;
   }
   return(
    <div className={"axis-select-dropdown-wrapper " + (value)}>
        <span className="value">{dropdownText}</span>
        <ul>
          <li className="accept-txt" onClick={(e)=>setValue('success')}>Accept</li>
          <li className="warning-txt" onClick={(e)=>setValue('warning')}>Put on Hold</li>
          <li className="danger-txt" onClick={(e)=>setValue('danger')}>Reject</li>
          <li className="disable-txt" onClick={(e)=>setValue('disable')}>No Action</li>
        </ul>
    </div>  
   )
}

export default ButtonDropdown;