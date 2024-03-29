import React,{useState} from 'react';
import './dashboard.scss';
import { NavLink } from 'react-router-dom';
import Progress from './Progress';
import ProgressEmpty from './ProgressEmpty';
import AdminMessagesData from '../fixture/maker_admin_alerts.json';
import RecentActivityData from '../fixture/maker_recent_activity.json';
import AdminAlerts from '../AdminAlerts';
import RecentActivity from './recentactivity';
import { useHistory } from "react-router-dom";
import moment from 'moment';

const Dashboard = (props) => {

    const [showTab,setShowTab] = useState(false)

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
                <select className="web-route" onChange={handleChange}>
                    <option value="/checker"> Checker </option>
                    <option value="/"> Maker </option>
                </select>
                <select className="mobile-route" onChange={handleChange}>
                    <option value="/"> Checker </option>
                </select>
           </div>
           <p className="last-updated-time" > 
              <span>Last updated</span> { lastUpdatedTime } <i class="fas fa-redo"></i> 
           </p>
           <h2 className="sub-heading" > PENDING </h2>
           <div className="checker-dashboard-progress-wrapper clearfix">
              { (props.tab) ? <Progress approveTabIndex={props.approveTabIndex} /> : <ProgressEmpty setTabIndex={props.setTabIndex} /> }
           </div>
           <h2 className="sub-heading recent-activity"  > RECENT ACTIVITY </h2>
           <RecentActivity {...props} data={RecentActivityData.data} />
           <h2 style={{"marginTop":"20px"}} className="sub-heading" > ADMIN ALERTS </h2>
           <AdminAlerts messages={AdminMessagesData.messages} />
       </div>
    )
}

export default Dashboard