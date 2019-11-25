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
                <th className="head-message"> 
                   Message
                </th>
                <th className="head-date"> 
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
                      <td className="body-message"> {item.message} </td>
                      <td className="body-date"> 
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