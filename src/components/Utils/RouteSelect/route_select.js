import React from 'react';
import { useHistory } from "react-router-dom";

const RouteSelect = () => {
    let history = useHistory();

    const handleChange = (e) => {
      history.push(`${e.target.value}`);
    };
  
   return(
    <div className="route-select">
        <span> Viewing as </span> 
        <select onChange={handleChange}>
            <option value="/"> Maker </option>
            <option value="/checker"> Checker </option>
        </select>
    </div>
   )
}

export default RouteSelect;