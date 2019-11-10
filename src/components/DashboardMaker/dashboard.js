import React from 'react';
import './dashboard.css';
import Progress from './Progress';
import AdminAlerts from '../AdminAlerts';
import { NavLink } from 'react-router-dom';
import AdminMessagesData from '../fixture/maker_admin_alerts.json';
import RecentActivityData from '../fixture/maker_recent_activity.json';
import RecentActivity from './recentactivity';
 
const Dashboard = () => {
    return (
       <div className="maker-dashboard" >
           <h1 className="page-title" > Salary Payments </h1>
           <NavLink to="/checker"> Checker </NavLink>
           <h2 className="sub-heading" > PENDING </h2>
           <Progress />
           <h2 className="sub-heading"  > RECENT ACTIVITY </h2>
           <RecentActivity data={RecentActivityData.data} />
           <h2 className="sub-heading" > ADMIN ALERTS </h2>
           <AdminAlerts messages={AdminMessagesData.messages} />
       </div>
    )
}

export default Dashboard