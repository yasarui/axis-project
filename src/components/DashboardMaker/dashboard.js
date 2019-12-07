import React,{ useState,useEffect }from "react";
import "./dashboard.scss";
import Progress from "./Progress";
import AdminAlerts from "../AdminAlerts";
import { NavLink } from "react-router-dom";
import AdminMessagesData from "../fixture/maker_admin_alerts.json";
import RecentActivityData from "../fixture/maker_recent_activity.json";
import RecentActivity from "./recentactivity";
import SelectDropDown from "./selectDropDown";
import RouteSelect from '../Utils/RouteSelect';
import { useHistory } from "react-router-dom";
import moment from 'moment';

const Dashboard = (props) => {
  
  const [ lastUpdatedTime,setLastUpdatedTime ] = useState(moment().format('hh:mm a, dddd Do-MMM-YYYY'))
  return (
    <div className="maker-dashboard">
      <h1 className="page-title"> Salary Payments </h1>
      <RouteSelect />
      <p className="last-updated-time" > 
          <span>Last updated</span> { lastUpdatedTime } <i class="fas fa-redo"></i> 
      </p>
      <h2 className="sub-heading"> PENDING </h2>
      <Progress {...props} />
      <h2 className="sub-heading"> RECENT ACTIVITY </h2>
      <RecentActivity {...props} data={RecentActivityData.data} />
      <h2 style={{"marginTop":"20px"}}className="sub-heading"> ADMIN ALERTS </h2>
      <AdminAlerts messages={AdminMessagesData.messages} />
    </div>
  );
};

export default Dashboard;