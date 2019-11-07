import React,{Fragment} from 'react';
import './sidebar.scss';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return(
      <div className="sidebar">
         <ul>
            <li>  
               <NavLink to="/" exact activeClassName="active"> 
                  <Fragment> 
                     <i class="fas fa-home"></i> Home 
                  </Fragment> 
               </NavLink> 
            </li>
            <li> 
               <NavLink to="/initiate" exact activeClassName="active"> 
                  <Fragment> 
                     <i class="fas fa-upload"></i>  Initiate 
                  </Fragment> 
               </NavLink>
            </li>
            <li> 
               <NavLink to="/enquire" exact activeClassName="active"> 
                   <Fragment> 
                      <i class="fas fa-table"></i> Enquire 
                   </Fragment> 
               </NavLink> 
            </li>
         </ul>
      </div>
    )
}

export default SideBar;