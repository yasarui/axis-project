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

  const [recentData,setRecentData] = useState(data);
  const [modalIsOpen,setModalIsOpen] = useState(false);

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

  const openViewDetailsModal = () => {
    console.log("I am inside recent activity ")
    setModalIsOpen(true);
    console.log("Modal state is ",modalIsOpen);
  }

   return (
      <div className="table-wrap recent-activity-table-wrapper">
       <table>
          <thead>
             <tr>
               <th> Batch ID </th>
               <th> 
                  Staff 
                  <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'name')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'name')} className="headerSortDown"></span>
                   </div>
               </th>
               <th> 
                   Created 
                   <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'created')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'created')} className="headerSortDown"></span>
                   </div>
                </th>
               <th> 
                   Accepted 
                   <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'accepted')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'accepted')} className="headerSortDown"></span>
                   </div>
               </th>
               <th> 
                    Put on hold 
                    <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'putOnHold')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'putOnHold')} className="headerSortDown"></span>
                   </div>
               </th>
               <th> 
                   Rejected 
                   <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'rejected')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'rejected')} className="headerSortDown"></span>
                   </div>
               </th>
               <th> 
                   Last Activity date 
                   <div className="sortIconsWrapper">
                     <span onClick={(e)=>sortAssending(e,'date')} className="headerSortUp"></span>
                     <span onClick={(e)=>sortDessending(e,'date')} className="headerSortDown"></span>
                   </div>
               </th>
             </tr>
          </thead>
          <tbody>
              {recentData.map((item,index)=>{
                  return (
                    <tr>
                      <td> 
                        <i class="icon fa fa-eye" aria-hidden="true"></i> {item._id.substr(1,5)}
                      </td>
                      <td> 
                         {item.name} 
                      </td>
                      <td> 
                        {createTd(index,item,setModalIsOpen)}
                      </td>
                      <td> 
                         {(index < 3) ? <EmptyTd />: 
                         (<Fragment>
                            {item.accepted} <a className="view-details" href="#"> View Transactions
                           </a>
                         </Fragment>)}
                        </td>
                      <td> 
                      {(index < 3) ? <EmptyTd /> : 
                         (<Fragment>
                            {item.putOnHold} <a className="view-details" href="#"> View Transactions
                           </a>
                         </Fragment>)}
                      </td>
                      <td> 
                      {(index < 3) ? <EmptyTd /> : 
                         (<Fragment>
                            {item.rejected} <a className="view-details" href="#"> View Transactions
                           </a>
                         </Fragment>)} 
                      </td>
                      <td> 
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