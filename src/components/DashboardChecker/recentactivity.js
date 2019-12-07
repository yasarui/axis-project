import React,{ Fragment,useState } from 'react';
import moment from 'moment';
import { ProgressBar,SuccessFailureTransactions }  from '../Utils';
import AxisModal from '../Modal';
import ViewDetails from '../Utils/ViewDetails';

const EmptyTd = () => {
  return (
     <div className="empty-td">
         <span className="empty-td-span"></span>
     </div>
  )
}

const createTd = (index,item,setModalIsOpen) => {
   if(index == 0){
      return <ProgressBar width="70" />
   }else if (index == 1){
      return <SuccessFailureTransactions handleClick={()=>setModalIsOpen(true)}  />
   }else if (index == 2){
      return <Fragment> {item.created} <a className="view-details" href="#"> View Transactions </a> </Fragment>
   }else{
     return <td></td>
   }
}

const RecentActivity = ({data}) => {

  const [modalIsOpen,setModalIsOpen] = useState(false);

   return (
      <div className="table-wrap">
       <table className="fixed-table-header">
          <thead>
             <tr>
               <th style={{"width":"119px"}} > Batch ID </th>
               <th style={{"width":"194px"}}> Staff </th>
               <th style={{"width":"161px"}}> Created </th>
               <th style={{"width":"162px"}}> Accepted </th>
               <th style={{"width":"162px"}}> Put on hold </th>
               <th style={{"width":"162px"}}> Rejected </th>
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
                        {createTd(index,item,setModalIsOpen)}
                      </td>
                      <td style={{"width":"157px"}}> 
                         {(index < 3) ? <EmptyTd />: 
                         (<Fragment>
                            {item.accepted} <a className="view-details" href="#"> View Transactions
                           </a>
                         </Fragment>)}
                        </td>
                      <td style={{"width":"157px"}}> 
                      {(index < 3) ? <EmptyTd /> : 
                         (<Fragment>
                            {item.putOnHold} <a className="view-details" href="#"> View Transactions
                           </a>
                         </Fragment>)}
                      </td>
                      <td style={{"width":"157px"}} > 
                      {(index < 3) ? <EmptyTd /> : 
                         (<Fragment>
                            {item.rejected} <a className="view-details" href="#"> View Transactions
                           </a>
                         </Fragment>)} 
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
       <AxisModal isOpen={modalIsOpen} overlayColor="black" size="Medium" closeModal={()=>setModalIsOpen(false)}> 
            <ViewDetails />
       </AxisModal>
      </div>
   )
}

export default RecentActivity;