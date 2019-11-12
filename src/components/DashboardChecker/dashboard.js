import React from 'react';
import './dashboard.scss';
import { NavLink } from 'react-router-dom';
import Progress from './Progress';
import AdminMessagesData from '../fixture/maker_admin_alerts.json';
import RecentActivityData from '../fixture/maker_recent_activity.json';
import AdminAlerts from '../AdminAlerts';
import RecentActivity from './recentactivity';

const Dashboard = () => {
    return (
       <div className="checker-dashboard" >
           <h1 className="page-title" > Salary Payments </h1> 
           <NavLink to="/" > Maker </NavLink>
           <h2 className="sub-heading" > PENDING </h2>
           <div className="checker-dashboard-progress-wrapper" >
              <Progress />
           </div>
           <h2 className="sub-heading"  > RECENT ACTIVITY </h2>
           <RecentActivity data={RecentActivityData.data} />
           <h2 className="sub-heading" > ADMIN ALERTS </h2>
           <AdminAlerts messages={AdminMessagesData.messages} />
       </div>
    )
}

export default Dashboard