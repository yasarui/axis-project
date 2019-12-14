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
        <select className="web-route" onChange={handleChange}>
            <option value="/checker"> Checker </option>
            <option value="/"> Maker </option>
        </select>
        <select className="mobile-route" onChange={handleChange}>
            <option value="/"> Checker </option>
        </select>
    </div>
   )
}

export default RouteSelect;