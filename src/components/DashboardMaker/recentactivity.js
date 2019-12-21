import React,{ useState,Fragment,useEffect } from 'react';
import moment from 'moment';
import { ProgressBar,SuccessFailureTransactions }  from '../Utils';
import Modal from 'react-modal';
import AxisModal from '../Modal';
import ViewDetails from '../Utils/ViewDetails';

const EmptyTd = () => {
   return (
      <div className="empty-td">
          <span className="empty-td-span"></span>
      </div>
   )
}


const RecentActivity = ({data,setSelectedIndex}) => {
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
     <Fragment>
        <div className="table-scroll-inside-fix">
          <div className="table-wrap recent-activity-table-wrapper">
            <table className="recent-activity-table">
                <thead>
                  <tr>
                    <th> Batch ID</th>
                    <th> 
                        Staff
                        <div className="sortIconsWrapper">
                          <span onClick={(e)=>sortAssending(e,'name')} className="headerSortUp"></span>
                          <span onClick={(e)=>sortDessending(e,'name')} className="headerSortDown"></span>
                        </div>
                        <small></small>
                    </th>
                    <th> 
                        Created
                        <div className="sortIconsWrapper">
                          <span  onClick={(e)=>sortAssending(e,'created')} className="headerSortUp"></span>
                          <span  onClick={(e)=>sortDessending(e,'created')} className="headerSortDown"></span>
                        </div>
                        <small> Transactions (amount) </small>
                    </th>
                    <th> 
                        Accepted
                        <div className="sortIconsWrapper">
                          <span onClick={(e)=>sortAssending(e,'accepted')} className="headerSortUp"></span>
                          <span onClick={(e)=>sortDessending(e,'accepted')} className="headerSortDown"></span>
                        </div>
                        <small> Transactions (amount) </small>
                    </th>
                    <th> 
                        Put on hold 
                        <div className="sortIconsWrapper">
                          <span onClick={(e)=>sortAssending(e,'putOnHold')} className="headerSortUp"></span>
                          <span onClick={(e)=>sortDessending(e,'putOnHold')} className="headerSortDown"></span>
                        </div>
                        <small> Transactions (amount) </small>
                    </th>
                    <th> 
                        Rejected
                        <div className="sortIconsWrapper">
                          <span onClick={(e)=>sortAssending(e,'rejected')} className="headerSortUp"></span>
                          <span onClick={(e)=>sortDessending(e,'rejected')} className="headerSortDown"></span>
                        </div>
                        <small> Transactions (amount) </small>
                    </th>
                    <th> 
                        Last activity date 
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
                              <img onClick={()=>setSelectedIndex(2)}  src="./images/eye.svg" />
                              {/* <i onClick={()=>setSelectedIndex(2)} class="icon fa fa-eye" aria-hidden="true"></i> */}
                              &nbsp;&nbsp;
                              {item._id.substr(1,5)}
                            </td>
                            <td> 
                              {item.name} 
                            </td>
                            <td>
                              {(index % 2 == 0)?  <ProgressBar width={item.uploaded} /> :  <SuccessFailureTransactions handleClick={()=>setModalIsOpen(true)}  /> }
                            </td>
                            <td> 
                              { index < 3 ? ( <EmptyTd /> ) : 
                                  ( (index % 2 == 0 ) ? <td></td> : <Fragment> 
                                    <bold> XX </bold> 
                                    <span className="amount">(₹{item.accepted})</span> 
                                    <a onClick={()=>setSelectedIndex(2)} className="view-details" href="#"> View Transactions </a>  
                                  </Fragment>)
                              }
                            </td>
                            <td> 
                              {
                                index < 3 ? (<EmptyTd />) : 
                                  ( (index % 3 == 0) ? <td></td> : <Fragment>
                                      <bold> XX </bold> 
                                      <span className="amount">(₹{item.putOnHold})</span> 
                                      <a onClick={()=>setSelectedIndex(2)} className="view-details" href="#"> View Transactions </a>         
                                  </Fragment>)
                              }
                            </td>
                            <td> 
                              {
                                index < 3 ? (<EmptyTd />) :
                                  ((index % 4 == 0 ) ? <td></td> : <Fragment>
                                      <bold> XX </bold> 
                                      <span className="amount">(₹{item.rejected})</span> 
                                      <a onClick={()=>setSelectedIndex(2)} className="view-details" href="#"> View Transactions </a>          
                                  </Fragment>)
                              }
                            </td>
                            <td> 
                                  <span className="date" > {moment(item.date).format('dddd DD-MM-YY')} </span>
                                  <span className="time"> {moment(item.date).format('h:mm:ss a')} </span>  
                            </td>
                          </tr>
                        )
                    })} 
                </tbody>
            </table>
         </div>
       </div>
       <AxisModal overlayColor="black" isOpen={modalIsOpen} size="Medium" closeModal={()=>setModalIsOpen(false)}> 
            <ViewDetails />
       </AxisModal>
     </Fragment>
   )
}

export default RecentActivity;