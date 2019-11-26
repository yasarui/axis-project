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
                                <td style={{"width":"181px"}}> ₹​{item.amount} </td>
                                <td style={{"width":"245px"}}> ₹​{item.amount} </td>
                                <td style={{"width":"245px"}} > <Button variant={item.button} > {item.button} </Button> </td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
                <table className="bottom-table">
                    <tbody>
                       <tr>
                         <td style={{"width":"233px"}} ></td>
                         <td style={{"width":"174px"}}></td>
                         <td style={{"width":"140px"}} >
                            <span> Sufficient 2 </span>
                            <span> Insufficient 1 </span> 
                         </td>
                         <td style={{"width":"204px"}} >
                            <span className="green-clr" > ₹​ XX,XX,XXX </span>
                            <span className="orange-clr"> ₹​ XX,XXX </span>
                            <span className="red-clr"> ₹​ XX,XXX </span> 
                         </td>
                         <td>
                            <Button> AUTHORISE </Button>                             
                         </td>
                       </tr>
                    </tbody>
                </table>
          </Fragment>
       ) 
    }
}

export default AccountsTable;