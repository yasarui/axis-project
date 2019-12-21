import React,{Fragment}from 'react';
import batches_data from '../../fixture/batches_data.json';
import Button from '../../Buttons';
import moment from 'moment';
import ButtonDropdown from '../../ButtonDropdowns';
import ActionStatus from '../../Utils/actionStatus';

class BatchTable extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          data:[],
          selectedHeader:null,
          isMobile: window.innerWidth <= 766
      }
    }
    componentDidMount(){
        this.setState({
            data:batches_data.data
        })
    }
    openAction(index){
      if(index === this.state.selectedHeader){
          this.setState({
              selectedHeader:null
          })
      }else{
         this.setState({
           selectedHeader:index
         })
      }
   }
    render(){
      let mobileAuthoriseBtn='';
      let mobileMinTotal='';
      let mobileTotal='';
      let webAuthoriseBtn='';
      let webMinTotal='';
      let webTotal='';
      if(this.state.isMobile){
        mobileAuthoriseBtn =<div><Button> AUTHORISE </Button></div>;
        mobileMinTotal = <div><span className="green-clr"> XXXX  </span> 
        <span className="orange-clr"> XX  </span>
        <span className="red-clr"> XX </span>
        <span className="grey-clr"> X </span></div>;
        mobileTotal = <div><span className="green-clr" > ₹ XX,XX,XXX <i class="fas fa-circle small-icon"></i> </span>
        <span className="orange-clr"> ₹ XX,XXX <i class="fas fa-circle small-icon"></i> </span>
        <span className="red-clr"> ₹ XX,XXX <i class="fas fa-circle small-icon"></i> </span>
        <span className="grey-clr"> ₹ X,XXX <i class="fas fa-circle small-icon"></i> </span></div>;
      } else {
        webAuthoriseBtn =<div><Button> AUTHORISE </Button></div>;
        webMinTotal = <div><span className="green-clr"> XXXX  </span> 
        <span className="orange-clr"> XX  </span>
        <span className="red-clr"> XX </span>
        <span className="grey-clr"> X </span></div>;
        webTotal = <div><span className="green-clr" > ₹ XX,XX,XXX <i class="fas fa-circle small-icon"></i> </span>
        <span className="orange-clr"> ₹ XX,XXX <i class="fas fa-circle small-icon"></i> </span>
        <span className="red-clr"> ₹ XX,XXX <i class="fas fa-circle small-icon"></i> </span>
        <span className="grey-clr"> ₹ X,XXX <i class="fas fa-circle small-icon"></i> </span></div>;
      }
      return(
         <Fragment>
          <div className="table-wrap checker-batches-table-wrapper">
            <table className="checker-batches-table">
              <thead>
                  <tr>
                    <th> Batch ID </th>
                    <th> 
                      Created
                      <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div>
                    </th>
                    <th> 
                      Last action 
                        <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div>
                    </th>
                    <th> 
                        Last action date 
                        <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div>
                    </th>
                    <th> 
                        Transactions Pending 
                        <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div>
                    </th>
                    <th> 
                        Amount Pending approval
                        <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div>
                    </th>
                    <th style={{"width":"100px"}}> <div className="select-wrap table-actions"><span onClick={()=>this.openAction(0)} > Action </span></div>
                        {this.state.selectedHeader === 0 ? 
                            <ActionStatus tableIndex="1" columnName="_id" />: ""}</th>
                  </tr>
              </thead>
              <tbody onClick={()=>this.setState({selectedHeader:null})}className="tbody-shadow" >
                  {this.state.data.map((item,index)=>{
                      return(
                        <tr>
                            <td>  
                              <img src="/images/eye.svg" /> {item._id.substr(1,5)} 
                            </td>
                            <td>  
                              <span className="date" > 
                                    {moment(item.date).format('dddd DD-MM-YY')} 
                              </span>
                              <span className="time"> 
                                    {moment(item.date).format('h:mm:ss a')} 
                              </span>   
                            </td>
                            <td> 
                                {item.name}
                                <a class="view-details" href="#"> View history </a>
                            </td>
                            <td> 
                            <span className="date" > 
                                    {moment(item.lastDate).format('dddd DD-MM-YY')} 
                              </span>
                              <span className="time"> 
                                    {moment(item.lastDate).format('h:mm:ss a')} 
                              </span>  
                            </td>
                            <td style={{"textAlign":"right"}} className="textalign-right"> 
                              {item.pending} 
                            </td>
                            <td style={{"textAlign":"right"}}> ₹​{item.amount} 
                                <span className={item.iconClr} > <i class="fas fa-circle small-icon"></i> </span> 
                            </td>
                            <td> 
                                <ButtonDropdown hideHeaderFilter={()=>this.setState({selectedHeader:null})} varient={item.button} />
                            </td>
                        </tr>
                      )
                  })}
              </tbody>
              <tfoot className="table-footer">
                <tr>
                        <td style={{"width":"73px", "vertical-align": "middle"}} >{mobileAuthoriseBtn}</td>
                        <td style={{"width":"135px"}}>{mobileMinTotal}</td>
                        <td style={{"width":"125px"}}></td>
                        <td style={{"width":"159px"}}></td>
                        <td style={{"width":"90px"}} > 
                            {webMinTotal}
                        </td>
                        <td style={{"width":"122px"}} >
                            {webTotal}
                        </td>
                        <td style={{"vertical-align": "middle"}}> 
                        {mobileTotal}
                        {webAuthoriseBtn}
                        </td>
                 </tr>
              </tfoot>
            </table>
          </div>
          <div className="maker-filter-section maker-filter-custom">
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
         </Fragment>
      )
    }
}

export default BatchTable;