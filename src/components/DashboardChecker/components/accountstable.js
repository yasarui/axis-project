import React,{ Fragment } from 'react';
import accounts_data from '../../fixture/accounts_data.json';
import Button from '../../Buttons';
import ButtonDropdown from '../../ButtonDropdowns';
import ActionStatus from '../../Utils/actionStatus';

class AccountsTable extends React.Component{
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
            data:accounts_data.data
        })
    }
    sortAssending = (e,key) => {
        let temp = [...this.state.data];
        temp.sort((a,b)=>{
            if(a[key] < b[key]) return -1;
            if(a[key] > b[key]) return 1;
            return 0;
        })
        this.setState({data:temp})
   }

   sortDessending = (e,key) => {
        let temp = [...this.state.data];
        temp.sort((a,b)=>{
            if(a[key] < b[key]) return 1;
            if(a[key] > b[key]) return -1;
            return 0;
        })
        this.setState({data:temp})
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
        mobileMinTotal = <div><span> <img src="/images/gray-green-tick.svg" /> &nbsp;&nbsp;&nbsp;&nbsp;Sufficient &nbsp;&nbsp; 4  </span>
        <span> <img src="/images/warning.svg" /> &nbsp;Insufficient &nbsp;&nbsp; 2   </span> </div>;
        mobileTotal = <div><span className="green-clr" > ₹​ XX,XX,XXX <i class="fas fa-circle small-icon"></i> </span>
        <span className="orange-clr"> ₹​ XX,XXX <i class="fas fa-circle small-icon"></i> </span>
        <span className="red-clr"> ₹​ XX,XXX <i class="fas fa-circle small-icon"></i> </span> </div>;
      } else {
        webAuthoriseBtn =<div><Button> AUTHORISE </Button></div>;
        webMinTotal = <div><span> <img src="/images/gray-green-tick.svg" /> &nbsp;&nbsp;&nbsp;&nbsp;Sufficient &nbsp;&nbsp; 4  </span>
        <span> <img src="/images/warning.svg" /> &nbsp;Insufficient &nbsp;&nbsp; 2   </span> </div>;
        webTotal = <div><span className="green-clr" > ₹​ XX,XX,XXX <i class="fas fa-circle small-icon"></i> </span>
        <span className="orange-clr"> ₹​ XX,XXX <i class="fas fa-circle small-icon"></i> </span>
        <span className="red-clr"> ₹​ XX,XXX <i class="fas fa-circle small-icon"></i> </span> </div>;
      }
       return(
          <Fragment>
            <div className="table-scroll-inside-fix remove-white-space">
                <div className="table-wrap checker-accounts-table has-bottom-table">
                    <table className="has-bottom">
                        <thead style={{"borderBottom":"1px solid #e7e7e7"}} >
                            <tr>
                            <th> 
                                Debit Account 
                                <div className="sortIconsWrapper">
                                    <span onClick={(e)=>this.sortAssending(e,'account_number')} className="headerSortUp"></span>
                                    <span onClick={(e)=>this.sortDessending(e,'account_number')} className="headerSortDown"></span>
                                </div>
                            </th>
                            <th> 
                                Debit Account Name 
                                <div className="sortIconsWrapper">
                                    <span onClick={(e)=>this.sortAssending(e,'name')} className="headerSortUp"></span>
                                    <span onClick={(e)=>this.sortDessending(e,'name')} className="headerSortDown"></span>
                                </div>
                            </th>
                            <th> 
                                Current Balance 
                                <div className="sortIconsWrapper">
                                    <span onClick={(e)=>this.sortAssending(e,'balance')} className="headerSortUp"></span>
                                    <span onClick={(e)=>this.sortDessending(e,'balance')}className="headerSortDown"></span>
                                </div>
                            </th>
                            <th> 
                                Amount Under Approval 
                                <div className="sortIconsWrapper">
                                    <span onClick={(e)=>this.sortAssending(e,'amount')} className="headerSortUp"></span>
                                    <span onClick={(e)=>this.sortDessending(e,'amount')}className="headerSortDown"></span>
                                </div>
                            </th>
                            <th style={{"width":"100px"}}>  <div className="select-wrap table-actions"><span onClick={()=>this.openAction(0)} > Action </span></div>
                            {this.state.selectedHeader === 0 ? 
                                <ActionStatus tableIndex="1" columnName="_id" />: ""}</th>
                            </tr>
                        </thead>
                        <tbody onClick={()=>this.setState({selectedHeader:null})} className="tbody-shadow" >
                            {this.state.data.map((item,index)=>{
                                return(
                                <tr>
                                    <td> 
                                        <img src="/images/eye.svg" /> {item.account_number}</td>
                                    <td> {item.name} </td>
                                    <td style={{"textAlign":"right"}}> 
                                    ₹​{item.amount} &nbsp;&nbsp;
                                    {(item.button == "danger") ?                                   <img src="/images/warning.svg" /> : 
                                    <img src="/images/gray-green-tick.svg" /> }
                                    <a className="refresh-link" href="#"> Refresh </a>
                                    </td>
                                    <td style={{"textAlign":"right"}}> 
                                        ₹​{item.amount} 
                                        <span className={item.iconClr}> <i class="fas fa-circle small-icon"></i> </span> 
                                    </td>
                                    <td> 
                                        <ButtonDropdown hideHeaderFilter={()=>this.setState({selectedHeader:null})} varient={item.button} />
                                    </td>
                                </tr>
                                )
                            })}

                        </tbody>
                        <tfoot className="table-footer" >
                            <tr>
                                <td>{mobileAuthoriseBtn}</td>
                                <td></td>
                                <td>
                                {webMinTotal}
                                </td>
                                <td>
                                    {webTotal}
                                </td>
                                <td>
                                    {webAuthoriseBtn}   
                                    {mobileTotal}                         
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
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

export default AccountsTable;