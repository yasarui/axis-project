import React, { Component } from 'react';
import './enquire.css';
import EnquireFilter from '../EnquireFilter';
// import EnquireTable from '../EnquireTable';
import EnquireTable from '../EnquireTableNew';
import RouteSelect from '../Utils/RouteSelect'
import { useHistory } from "react-router-dom";

const Enquire = (props) => {
  let history = useHistory();
  const handleChange = (e) => {
    history.push(`${e.target.value}`);
  };
  return(
    <div>
        <div className="mobile-enq-checker">
          <span  onClick={()=>props.setSelectedIndex(0)}><i class="fas fa-chevron-left"></i> Back</span>
          <h1 className="page-title">Transaction</h1>
        </div>
        <div className="payment-header">
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
        </div>
        <EnquireFilter />
        <EnquireTable type="ckecker" />
     </div>    
  )
}

export default Enquire;