import React from 'react';
import moment from 'moment';
import './admin.scss'

const AdminAlerts = ({messages}) => {
   return(
      <div>
        <table className="admin-alerts-table fixed-table-header">
           <thead>
              <tr>
                <th style={{"width":"85%"}} > Message </th>
                <th style={{"width":"10%"}}> Date </th>
              </tr>
           </thead>
           <tbody>
              {messages.map((item,index)=>{
                 return(
                    <tr>
                      <td style={{"width":"90%"}} > {item.message} </td>
                      <td style={{"width":"10%"}}> 
                         <span className="date" > {moment(item.date).format('dddd MM-DD-YY')} </span>
                         <span className="time"> {moment(item.date).format('h:mm:ss a')} </span>
                      </td>
                    </tr>
                 )
              })}
           </tbody>
        </table>
      </div>
   )
}

export default AdminAlerts;