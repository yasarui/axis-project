import React,{useState} from 'react';
import './dashboard.scss';
import { NavLink } from 'react-router-dom';
import Progress from './Progress';
import AdminMessagesData from '../fixture/maker_admin_alerts.json';
import RecentActivityData from '../fixture/maker_recent_activity.json';
import AdminAlerts from '../AdminAlerts';
import RecentActivity from './recentactivity';
import { useHistory } from "react-router-dom";
import moment from 'moment';

const Dashboard = () => {

    const [ lastUpdatedTime,setLastUpdatedTime ] = useState(moment().format('hh:mm a, dddd Do-MMM-YYYY'))

    let history = useHistory();
    const handleChange = (e) => {
      history.push(`${e.target.value}`);
    };
  
    return (
       <div className="checker-dashboard" >
           <h1 className="page-title" > Salary Payments </h1> 
            <div className="route-select">
               <span> Viewing as </span>
                <select onChange={handleChange}>
                    <option value="/checker"> Checker </option>
                    <option value="/"> Maker </option>
                </select>
           </div>
           <p className="last-updated-time" > 
              <span>Last updated</span> { lastUpdatedTime } <i class="fas fa-redo"></i> 
           </p>
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