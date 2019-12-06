import React,{ Fragment } from 'react';
import accounts_data from '../../fixture/accounts_data.json';
import Button from '../../Buttons';

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
    render(){
       return(
          <Fragment>
            <div className="table-wrap">
                <table className="has-bottom fixed-table-header">
                    <thead style={{"borderBottom":"1px solid #e7e7e7"}} >
                        <tr>
                        <th style={{"width":"252px"}} > 
                            Debit Account 
                            <div className="sortIconsWrapper">
                                <span className="headerSortUp"></span>
                                <span className="headerSortDown"></span>
                            </div>
                        </th>
                        <th style={{"width":"219px"}} > 
                            Debit Account Name 
                            <div className="sortIconsWrapper">
                                <span className="headerSortUp"></span>
                                <span className="headerSortDown"></span>
                            </div>
                        </th>
                        <th style={{"width":"192px"}} > 
                            Current Balance 
                            <div className="sortIconsWrapper">
                                <span className="headerSortUp"></span>
                                <span className="headerSortDown"></span>
                            </div>
                        </th>
                        <th style={{"width":"239px"}} > 
                            Amount Under Approval 
                            <div className="sortIconsWrapper">
                                <span className="headerSortUp"></span>
                                <span className="headerSortDown"></span>
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
                                <td style={{"width":"181px"}}> 
                                  ₹​{item.amount} &nbsp;&nbsp;
                                  {(item.button == "danger") ?                                   <span className="red-clr"> 
                                    <i class="fas fa-exclamation-triangle"></i>
                                  </span> : 
                                  <span className="green-clr"> 
                                    <i class="far fa-check-circle"></i> 
                                  </span> }

                                </td>
                                <td style={{"width":"245px"}}> 
                                    ₹​{item.amount} 
                                    <span className={item.iconClr}> <i class="fas fa-circle small-icon"></i> </span> 
                                </td>
                                <td style={{"width":"245px"}} > <Button variant={item.button} > {item.button} </Button> </td>
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
                            <span> Sufficient 4 <i class="far fa-check-circle green-clr"></i> </span>
                            <span> Insufficient 2  <i class="fas fa-exclamation-triangle red-clr"></i> </span> 
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