import React,{ Fragment } from 'react';
import accounts_data from '../../fixture/accounts_data.json';
import Button from '../../Buttons';
import ButtonDropdown from '../../ButtonDropdowns';

class AccountsTable extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           data:[]
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

    render(){
       return(
          <Fragment>
            <div className="table-wrap checker-accounts-table">
                <table className="has-bottom fixed-table-header">
                    <thead style={{"borderBottom":"1px solid #e7e7e7"}} >
                        <tr>
                        <th style={{"width":"260px"}} > 
                            Debit Account 
                            <div className="sortIconsWrapper">
                                <span onClick={(e)=>this.sortAssending(e,'account_number')} className="headerSortUp"></span>
                                <span onClick={(e)=>this.sortDessending(e,'account_number')} className="headerSortDown"></span>
                            </div>
                        </th>
                        <th style={{"width":"224px"}} > 
                            Debit Account Name 
                            <div className="sortIconsWrapper">
                                <span onClick={(e)=>this.sortAssending(e,'name')} className="headerSortUp"></span>
                                <span onClick={(e)=>this.sortDessending(e,'name')} className="headerSortDown"></span>
                            </div>
                        </th>
                        <th style={{"width":"196px"}} > 
                            Current Balance 
                            <div className="sortIconsWrapper">
                                <span onClick={(e)=>this.sortAssending(e,'balance')} className="headerSortUp"></span>
                                <span onClick={(e)=>this.sortDessending(e,'balance')}className="headerSortDown"></span>
                            </div>
                        </th>
                        <th style={{"width":"245px"}} > 
                            Amount Under Approval 
                            <div className="sortIconsWrapper">
                                <span onClick={(e)=>this.sortAssending(e,'amount')} className="headerSortUp"></span>
                                <span onClick={(e)=>this.sortDessending(e,'amount')}className="headerSortDown"></span>
                            </div>
                        </th>
                        <th style={{"width":"245px"}} > Action </th>
                        </tr>
                    </thead>
                    <tbody style={{"height":"300px"}} className="tbody-shadow" >
                        {this.state.data.map((item,index)=>{
                            return(
                            <tr>
                                <td style={{"width":"274px"}} > 
                                    <i class="fas fa-eye icon"></i> {item.account_number}</td>
                                <td style={{"width":"215px"}}> {item.name} </td>
                                <td style={{"width":"181px","textAlign":"right"}}> 
                                  ₹​{item.amount} &nbsp;&nbsp;
                                  {(item.button == "danger") ?                                   <span className="red-clr"> 
                                    <i class="fas fa-exclamation-triangle"></i>
                                  </span> : 
                                  <span className="green-clr"> 
                                    <i class="far fa-check-circle"></i> 
                                  </span> }
                                  <a className="refresh-link" href="#"> Refresh </a>
                                </td>
                                <td style={{"width":"245px","textAlign":"right"}}> 
                                    ₹​{item.amount} 
                                    <span className={item.iconClr}> <i class="fas fa-circle small-icon"></i> </span> 
                                </td>
                                <td style={{"width":"245px"}} > 
                                    <ButtonDropdown varient={item.button} />
                                </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="table-wrap">
                <table className="bottom-table">
                    <tbody>
                       <tr>
                         <td style={{"width":"233px"}} ></td>
                         <td style={{"width":"174px"}}></td>
                         <td style={{"width":"140px"}} >
                            <span> <i class="far fa-check-circle green-clr"></i> &nbsp;&nbsp;&nbsp;&nbsp; Sufficient &nbsp;&nbsp; 4  </span>
                            <span> <i class="fas fa-exclamation-triangle red-clr"></i> &nbsp;Insufficient &nbsp;&nbsp; 2   </span> 
                         </td>
                         <td style={{"width":"204px"}} >
                            <span className="green-clr" > ₹​ XX,XX,XXX <i class="fas fa-circle small-icon"></i> </span>
                            <span className="orange-clr"> ₹​ XX,XXX <i class="fas fa-circle small-icon"></i> </span>
                            <span className="red-clr"> ₹​ XX,XXX <i class="fas fa-circle small-icon"></i> </span> 
                         </td>
                         <td>
                            <Button> AUTHORISE </Button>                             
                         </td>
                       </tr>
                    </tbody>
                </table>
            </div>
          </Fragment>
       ) 
    }
}

export default AccountsTable;