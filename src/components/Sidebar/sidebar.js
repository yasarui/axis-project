import React from 'react';
import './sidebar.scss';

const SideBar = () => {
    return(
      <div className="sidebar">
         <ul>
            <li>  <a href="#"> <i class="fas fa-home"></i> Home </a> </li>
            <li>  <a href="#"> <i class="fas fa-upload"></i> Invite </a> </li>
            <li>  <a href="#"> <i class="fas fa-table"></i> Enquire </a> </li>
         </ul>
      </div>
    )
}

export default SideBar;