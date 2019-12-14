import React,{Fragment,useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import batchesJson from '../fixture/batches_data.json';
import moment from 'moment';
import Button from '../Buttons';
import { ProgressBar,SuccessFailureTransactions }  from '../Utils';
import AxisModal from '../Modal';
import ActivityHistory from '../Utils/ActivityHistory';

const Progress = (props) => {

   const [ batchesData , setBatchesData ] = useState(batchesJson.data)

   const [ batchesTable,showBatchesTable ] = useState(false);

   const [ isHistoryPopup,setHistoryPopup ] = useState(false);

   const [selectAll,setSelectAll] = useState(false)

   const sortAssending = (e,key) => {
        let temp = [...batchesData];
        temp.sort((a,b)=>{
            if(a[key] < b[key]) return -1;
            if(a[key] > b[key]) return 1;
            return 0;
        })
        setBatchesData(temp)
   }

    const sortDessending = (e,key) => {
        let temp = [...batchesData];
        temp.sort((a,b)=>{
            if(a[key] < b[key]) return 1;
            if(a[key] > b[key]) return -1;
            return 0;
        })
        setBatchesData(temp)
    }

   return(
        <Fragment>
             <div className="progress-tiles-wrapper clearfix">
                <div className={"progress-tile " + (batchesTable ? 'active':'')} onClick={()=>showBatchesTable(true)} >
                    <span className="text"> BATCHES </span>
                    <span className="count"> 15 </span>
                </div>
                <div onClick={()=>props.setSelectedIndex(2)} className="progress-tile">
                    <span className="text"> APPROVED TRANSACTIONS </span>
                    <span className="count"> 1,300 </span>              
                </div>
                <div onClick={()=>props.setSelectedIndex(2)} className="progress-tile">
                    <span className="text"> TRANSACTIONS ON HOLD </span>
                    <span className="count"> 130 </span>              
                </div>
                <div onClick={()=>props.setSelectedIndex(2)} className="progress-tile">
                    <span className="text"> REJECTED TRANSACTIONS </span>
                    <span className="count"> 235 </span>              
                </div>
             </div>
           {batchesTable &&  
           <Fragment>
              <div className="table-wrap">
                <table className="fixed-table-header batches-table">
                    <thead>
                        <tr>
                            <th style={{"width":"120px"}}> 
                                Batch ID
                                <div className="sortIconsWrapper">
                                    <span className="headerSortUp"></span>
                                    <span className="headerSortDown"></span>
                                </div>
                                <a onClick={()=>setSelectAll(!selectAll)} className="select-all" href="#"> Select All </a>
                            </th>
                            <th style={{"width":"200px"}}> 
                                Created
                                <div className="sortIconsWrapper">
                                    <span onClick={(e)=>sortAssending(e,'created')} className="headerSortUp"></span>
                                    <span onClick={(e)=>sortDessending(e,'created')} className="headerSortDown"></span>
                                </div>
                            </th>
                            <th style={{"width":"187px"}}> 
                                Last action 
                                <div className="sortIconsWrapper">
                                    <span onClick={(e)=>sortAssending(e,'name')} className="headerSortUp"></span>
                                    <span onClick={(e)=>sortDessending(e,'name')} className="headerSortDown"></span>
                                </div>
                            </th>
                            <th style={{"width":"215px"}}> 
                                Last action date 
                                <div className="sortIconsWrapper">
                                    <span onClick={(e)=>sortAssending(e,'lastDate')} className="headerSortUp"></span>
                                    <span onClick={(e)=>sortDessending(e,'lastDate')} className="headerSortDown"></span>
                                </div>
                            </th>
                            <th style={{"width":"177px"}}> 
                                Transactions Pending 
                                <div className="sortIconsWrapper">
                                    <span className="headerSortUp"></span>
                                    <span className="headerSortDown"></span>
                                </div>
                            </th>
                            <th style={{"width":"189px"}}> 
                                Amount <br/> Pending approval 
                                <div className="sortIconsWrapper">
                                    <span onClick={(e)=>sortDessending(e,'amount')} className="headerSortUp"></span>
                                    <span onClick={(e)=>sortDessending(e,'amount')} className="headerSortDown"></span>
                                </div>
                            </th>
                            <th style={{"width":"86px"}}> 
                                Action 
                            </th>
                        </tr>
                    </thead>
                    <tbody style={{"height":"300px"}} >
                        {batchesData.map((item,index)=>{
                            return (
                                <tr>
                                    <td style={{"width":"113px"}} >  
                                        <label className="checkbox-wrapper" >
                            {selectAll ? <input type="checkbox" className="checkbox" checked={true}/> : <input type="checkbox" className="checkbox" /> }
                                            <span className="label-text"> 
                                                {item._id.substring(1,5)} 
                                            </span>
                                        </label>
                                    </td>
                                    <td style={{"width":"183px"}} >  
                                        <span className="date"> 
                                            {moment(item.created).format('dddd DD-MM-YY')} 
                                        </span>
                                        <span className="time"> 
                                            {moment(item.created).format('h:mm:ss a')} 
                                        </span> 
                                    </td>
                                    <td style={{"width":"196px"}} >
                                        {item.name}
                                        <a class="view-details" onClick={()=>setHistoryPopup(true)} href="#"> 
                                           View History 
                                        </a>
                                    </td>
                                    <td style={{"width":"200px"}} >
                                        <span className="date"> 
                                            {moment(item.lastDate).format('dddd DD-MM-YY')} 
                                        </span>
                                        <span className="time"> 
                                            {moment(item.lastDate).format('h:mm:ss a')} 
                                        </span>                                 
                                    </td>
                                    <td style={{"width":"183px"}} >
                                        {(index % 2 == 0)?  <ProgressBar width={`${(index)}0`} /> :  <SuccessFailureTransactions /> }
                                    </td>
                                    <td style={{"width":"213px"}} >
                                        {item.amount}
                                    </td>
                                    <td className="text-right" style={{"width":"86px"}} >
                                        {
                                          (index === 0) ? <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i class="fas fa-times icon"></i> </span> : (
                                          (index === 1) ? (<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                            <img src="./images/delete.svg" /> </span>) :
                                          <Fragment>
                                                <span> <img src="./images/send.svg" /> </span>
                                                &nbsp;&nbsp;
                                                <span> <img src="./images/delete.svg" /> </span>  
                                           </Fragment>                                            
                                          )
                                        }
                                    </td> 
                                </tr>
                            )
                        })}
                    </tbody>
                    </table> 
                  </div>
                    <div className="maker-remainder-section">
                       <Button varient="outline" > SEND REMINDERS </Button>
                       <span> We will send an email to all the staff members who need to take the correct next action </span>
                    </div> 
                    <div className="maker-filter-section">
                       <span> View </span>
                       <div className="select-wrap">
                        <select>
                            <option> 5 </option>
                            <option> 10 </option>
                            <option> 15 </option>
                            <option> 20 </option>
                        </select>
                      </div>
                       <span> rows at a time </span>
                    </div>           
            </Fragment>}
            <AxisModal isOpen={isHistoryPopup} size="Extra-Large" overlayColor="black" closeModal={()=>setHistoryPopup(false)} >
               <ActivityHistory />
            </AxisModal>
    </Fragment>
   )
}

export default Progress;