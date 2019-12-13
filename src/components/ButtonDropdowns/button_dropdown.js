import React,{useState} from 'react';
import './button_dropdown.scss';
const ButtonDropdown = ({varient}) => {
   const [value,setValue] = useState(varient);
   const [dropdownValue,setDropdownValue] = useState(false);
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
   function showDropdown() {
    setDropdownValue(!dropdownValue);
   }
   function setDropdownStatus(val) {
    setValue(val);
    setDropdownValue(!dropdownValue);
   }
   return(
    <div className={"axis-select-dropdown-wrapper " + (value)}>
        <span className="value" onClick={()=>showDropdown()}>{dropdownText}</span>
        <ul className={dropdownValue? "show-dropdown" : "hide-dropdown"}>
          <li className="accept-txt" onClick={(e)=>setDropdownStatus('success')}>Accept</li>
          <li className="warning-txt" onClick={(e)=>setDropdownStatus('warning')}>Put on Hold</li>
          <li className="danger-txt" onClick={(e)=>setDropdownStatus('danger')}>Reject</li>
          <li className="disable-txt" onClick={(e)=>setDropdownStatus('disable')}>No Action</li>
        </ul>
    </div>  
   )
}

export default ButtonDropdown;