import React,{ useState } from 'react';
import moment from 'moment';
import { ProgressBar,SuccessFailureTransactions }  from '../Utils';
const RecentActivity = ({data}) => {
   
   const [ recentData,setRecentData ] = useState(data);

   const sortAssending = (e,key) => {
        let temp = [...recentData];
        temp.sort((a,b)=>{
            if(a[key] < b[key]) return -1;
            if(a[key] > b[key]) return 1;
            return 0;
        })
        setRecentData(temp)
   }

   const sortDessending = (e,key) => {
        let temp = [...recentData];
        temp.sort((a,b)=>{
            if(a[key] < b[key]) return 1;
            if(a[key] > b[key]) return -1;
            return 0;
        })
        setRecentData(temp)
   }

   return (
       <table className="fixed-table-header">
          <thead>
             <tr>
               <th style={{"width":"118px"}} > Batch ID </th>
               <th style={{"width":"188px"}}> 
                   Staff
                   <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'name')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'name')} className="headerSortDown"></span>
                   </div>
              </th>
               <th style={{"width":"159px"}}> 
                   Created
                   <div className="sortIconsWrapper">
                     <span  onClick={(e)=>sortAssending(e,'created')} className="headerSortUp"></span>
                     <span  onClick={(e)=>sortDessending(e,'created')} className="headerSortDown"></span>
                   </div> 
              </th>
               <th style={{"width":"159px"}}> 
                   Accepted
                   <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'accepted')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'accepted')} className="headerSortDown"></span>
                   </div>
               </th>
               <th style={{"width":"159px"}}> 
                   Put on hold 
                   <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'putOnHold')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'putOnHold')} className="headerSortDown"></span>
                   </div>
               </th>
               <th style={{"width":"159px"}}> 
                   Rejected
                   <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'rejected')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'rejected')} className="headerSortDown"></span>
                   </div>
               </th>
               <th style={{"width":"200px"}}> 
                   Last Activity date 
                   <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'date')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'date')} className="headerSortDown"></span>
                   </div>
               </th>
             </tr>
          </thead>
          <tbody style={{"height":"400px"}} >
              {recentData.map((item,index)=>{
                  return (
                    <tr>
                      <td style={{"width":"104px"}} > 
                        <i class="icon fa fa-eye" aria-hidden="true"></i>
                        &nbsp;&nbsp;
                        {item._id.substr(1,5)}
                      </td>
                      <td style={{"width":"202px"}} > 
                         {item.name} 
                      </td>
                      <td style={{"width":"157px"}}> 
                      {(index % 2 == 0)?  <ProgressBar width={`${(index)}0`} /> :  <SuccessFailureTransactions /> }
                      </td>
                      <td style={{"width":"157px"}}> 
                      ₹{item.accepted} <a className="view-details" href="#"> View Transactions </a>
                      </td>
                      <td style={{"width":"157px"}}> 
                      ₹{item.putOnHold} <a className="view-details" href="#"> View Transactions </a>
                      </td>
                      <td style={{"width":"157px"}} > 
                      ₹{item.rejected} <a className="view-details" href="#"> View Transactions </a>
                      </td>
                      <td style={{"width":"222px"}} > 
                         <span className="date" > {moment(item.date).format('dddd DD-MM-YY')} </span>
                         <span className="time"> {moment(item.date).format('h:mm:ss a')} </span>    
                      </td>
                    </tr>
                  )
              })} 
          </tbody>
       </table>
   )
}

export default RecentActivity;