import React,{useState,useEffect,useRef} from 'react';
import './button_dropdown.scss';

// function useOutsideAlerter(ref) {
//   function handleClickOutside(event) {
//     if (ref.current && !ref.current.contains(event.target)) {
//       alert("You clicked outside of me!");
//     }
//   }

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   });
// }

const ButtonDropdown = ({varient,hideHeaderFilter}) => {

  function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdownValue(false);
      }
    }
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }

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
      if(hideHeaderFilter) hideHeaderFilter(null);
      setDropdownValue(!dropdownValue);
   }
   function setDropdownStatus(val) {
      setValue(val);
      setDropdownValue(!dropdownValue);
   }

   const wrapperRef = useRef(null);
   useOutsideAlerter(wrapperRef);

   return(
    <div ref={wrapperRef} className={"axis-select-dropdown-wrapper " + (value)}>
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