import React,{Fragment} from 'react';
import './activity-history.scss';
import moment from 'moment';
import historyJson from '../../fixture/history_data.json';

export default function ActivityHistory(){

    function getIcon(index){
        let icon = "";
        if(index == 0){
        icon = (<i class="fas fa-cloud-upload-alt icon green-clr"></i>);
        }else{
            if(index < 3){
                icon = (<i class="far fa-check-circle icon green-clr"></i>)
            }else{
                icon = (<i class="far fa-check-circle icon grey-clr"></i>)
            }
        }
      return icon;
    }

    return(
        <div className="activity-history-table-wrapper" >
            <h1 className="popup-title"> Activity History - Batch XXX </h1>
            <table className="activity-history-table" >
                <thead>
                <tr>
                    <th> Staff </th>
                    <th> 
                         Created <span className="sub-th" > Transactions (amount) </span>
                    </th>
                    <th> 
                        Accepted <span className="sub-th"> Transactions (amount) </span> 
                    </th>
                    <th> 
                        Put on Hold <span className="sub-th"> Transactions (amount) </span> </th>
                    <th> Rejected <span className="sub-th" > Transactions (amount) </span> </th>
                    <th> Last activity date </th>
                </tr>
                </thead>
                <tbody>
                    {
                      historyJson.data.map((item,index)=>{
                        return(
                           <tr>
                             <td> 
                                {getIcon(index)}
                                {item.name} 
                             </td>
                             <td> 
                                 {(index == 0)?
                                 (<Fragment>
                                     <bold>{item.count}</bold>
                                     ({item.created}) 
                                     <a className="view-details" href="#"> 
                                       View Transactions </a>
                                    </Fragment>) : ""}
                             </td>
                             <td>
                                 {(index == 1 || index == 2) ?
                                 (<Fragment>
                                    <bold>{item.count}</bold>
                                    ({item.accepted})
                                    <a className="view-details" href="#"> 
                                       View Transactions 
                                    </a>
                                 </Fragment>) : "" }
                             </td>
                             <td>
                                 {(index == 2) ? 
                                 <Fragment>
                                   <bold>{item.count}</bold>
                                   ({item.putOnHold})
                                   <a className="view-details" href="#"> 
                                     View Transactions 
                                   </a>
                                 </Fragment>: "" }
                             </td>
                             <td> 

                            </td>
                             <td> 
                                 {(index < 3) ?
                                 <Fragment>
                                    <span className="date" > 
                                        {moment(item.date).format('dddd DD-MM-YY')} 
                                    </span>
                                    <span className="time"> 
                                    {moment(item.date).format('h:mm:ss a')} 
                                    </span> 
                                 </Fragment>:""}                               
                             </td>
                           </tr>
                        )
                     })
                    }
                </tbody>
            </table>
            <div class="maker-remainder-section">
                 <button class="axis-button">  SEND REMINDERS  </button>
                 <span> We will send an email to all the staff members who need to take the correct next action </span>
            </div>
        </div>        
    )
}