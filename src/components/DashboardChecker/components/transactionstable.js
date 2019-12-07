import React, { Fragment } from 'react';
import accounts_data from '../../fixture/accounts_data.json';
import Button from '../../Buttons';
import ButtonDropdown from '../../ButtonDropdowns';

class TransactionsTable extends React.Component{
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
          <div className="transactions-tab-filter" >
              <section>
                  <label> View </label>
                  <select>
                      <option value="default" > Default </option>
                   </select>
              </section>
              <section>
                 <p> <label> Date range </label>
                 <bold> dd-mm-yyyy </bold>
                 <label> to </label>
                 <bold> dd-mm-yyyy </bold> </p>
              </section>
              <section>
                  <label> Account Number </label>
                  <select>
                      <option> XXXX XXXX XXXX </option>
                  </select>
              </section>
              <section>
                  <label> Payment Method </label>
                  <select>
                      <option> ePayment @ Cheque </option>
                  </select>
              </section>              
          </div>
          <div className="table-wrap">
            <table className="fixed-table-header checker-transactions-table">
              <thead>
                  <tr>
                    <th style={{"width":"189px"}} > 
                        Column
                        <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div> 
                    </th>
                    <th style={{"width":"176px"}}> 
                        Column 
                        <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div>
                    </th>
                    <th style={{"width":"164px"}} > 
                        Column 
                        <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div>                
                    </th>
                    <th style={{"width":"165px"}}> 
                        Column
                        <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div> 
                    </th>
                    <th style={{"width":"165px"}} > 
                        Column 
                        <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div>
                    </th>
                    <th style={{"width":"165px"}} > 
                        Column 
                        <div className="sortIconsWrapper">
                            <span className="headerSortUp"></span>
                            <span className="headerSortDown"></span>
                        </div>
                    </th>
                    <th style={{"width":"170px"}} > Actions </th>
                  </tr>
              </thead>
              <tbody style={{"height":"300px"}} className="tbody-shadow">
                  {this.state.data.map((item,index)=>{
                      return(
                        <tr>
                          <td style={{"width":"150px"}} > 
                             <ButtonDropdown varient="success" />
                          </td>
                          <td style={{"width":"170px"}}> XXXXX </td>
                          <td style={{"width":"170px"}}></td>
                          <td style={{"width":"170px"}}></td>
                          <td style={{"width":"170px"}}></td>
                          <td style={{"width":"170px"}}></td>
                          <td style={{"width":"170px"}}></td>
                        </tr>
                      )
                  })}
              </tbody>
            </table> 
          
            <table className="bottom-table" >
                <tbody>
                  <tr>
                    <td>
                      <div className="apply-flex">
                          <div>
                            <span> Transactions (amount)  </span>
                          </div>
                          <div>
                            <span className="green-clr" > XXX </span>
                            <span className="orange-clr"> XX </span>
                            <span className="red-clr"> XX </span>
                            <span className="grey-clr"> X </span>
                          </div>
                          <div>
                            <span className="green-clr"> ₹ XX,XX,XXX </span>
                            <span className="orange-clr"> ₹ XX,XXX </span>
                            <span className="red-clr"> ₹ XX,XXX </span>
                            <span className="grey-clr"> ₹ XX,XXX </span>                          
                          </div>
                          <div>
                            <span className="green-clr" > Accepted </span>
                            <span className="orange-clr"> On Hold </span>
                            <span className="red-clr"> Rejected </span>
                            <span className="grey-clr"> No Action </span>
                          </div>
                      </div>
                    </td>
                    <td> <Button> AUTHORISE </Button> </td>
                  </tr>
                </tbody>
            </table>
          </div>
        </Fragment>
       ) 
    }
}

export default TransactionsTable;