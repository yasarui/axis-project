import React from 'react';
import moment from 'moment';
const RecentActivity = ({data}) => {
   return (
       <table className="fixed-table-header">
          <thead>
             <tr>
               <th style={{"width":"110px"}} > Batch ID </th>
               <th style={{"width":"198px"}}> Staff </th>
               <th style={{"width":"157px"}}> Created </th>
               <th style={{"width":"157px"}}> Accepted </th>
               <th style={{"width":"157px"}}> Put on hold </th>
               <th style={{"width":"157px"}}> Rejected </th>
               <th style={{"width":"200px"}}> Last Activity date </th>
             </tr>
          </thead>
          <tbody style={{"height":"400px"}} >
              {data.map((item,index)=>{
                  return (
                    <tr>
                      <td style={{"width":"104px"}} > 
                        <i class="icon fa fa-eye" aria-hidden="true"></i> {item._id.substr(1,5)}
                      </td>
                      <td style={{"width":"210px"}} > 
                         {item.name} 
                      </td>
                      <td style={{"width":"157px"}}> 
                        {item.created} <a className="view-details" href="#"> View Transactions </a>
                      </td>
                      <td style={{"width":"157px"}}> 
                         {item.accepted} <a className="view-details" href="#"> View Transactions </a>
                      </td>
                      <td style={{"width":"157px"}}> 
                         {item.putOnHold} <a className="view-details" href="#"> View Transactions </a>
                      </td>
                      <td style={{"width":"157px"}} > 
                        {item.rejected} <a className="view-details" href="#"> View Transactions </a>
                      </td>
                      <td style={{"width":"222px"}} > 
                         <span className="date" > {moment(item.date).format('dddd MM-DD-YY')} </span>
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