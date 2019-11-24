import React,{ useState } from 'react';
import moment from 'moment';
import './admin.scss'

const AdminAlerts = ({messages}) => {
   
   const [adminMessages,setAdminMessages] = useState(messages);

   const sortTableAssending = () => {
      let temp = [...adminMessages];
      temp.sort((a,b)=>{
          if(moment(a["date"]) < moment(b["date"])) return -1;
          if(moment(a["date"]) > moment(b["date"])) return 1;
          return 0;
      })
      setAdminMessages(temp)
   }

   const sortTableDesending = () => {
      let temp = [...adminMessages];
      temp.sort((a,b)=>{
          if(moment(a["date"]) < moment(b["date"])) return 1;
          if(moment(a["date"]) > moment(b["date"])) return -1;
          return 0;
      })
      setAdminMessages(temp);
   }
   
   return(
      <div>
        <table className="admin-alerts-table fixed-table-header">
           <thead>
              <tr>
                <th style={{"width":"84.15%"}}> 
                   Message
                </th>
                <th style={{"width":"10%"}}> 
                  <div className="sortIconsWrapper">
                     <span className="headerSortUp" onClick={()=>sortTableAssending()} ></span>
                     <span className="headerSortDown" onClick={()=>sortTableDesending()} ></span>
                   </div>
                  Date 
                </th>
              </tr>
           </thead>
           <tbody>
              {adminMessages.map((item,index)=>{
                 return(
                    <tr>
                      <td style={{"width":"90%"}} > {item.message} </td>
                      <td style={{"width":"10%"}}> 
                         <span className="date" > {moment(item.date).format('dddd DD-MM-YY')} </span>
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