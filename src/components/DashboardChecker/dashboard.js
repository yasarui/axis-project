import React from 'react';
import './dashboard.css';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
       <div className="checker-dashboard" >
           <h1> Checker - Dashboard </h1> 
           <NavLink to="/maker" > Maker </NavLink>
       </div>
    )
}

export default Dashboard