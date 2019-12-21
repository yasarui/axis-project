import React, { Fragment } from 'react';
import accounts_data from '../../fixture/accounts_data.json';
import Button from '../../Buttons';
import ButtonDropdown from '../../ButtonDropdowns';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import ActionStatus from '../../Utils/actionStatus';

const CalenderIcon = () => {
    return(
      <img src="./images/calender.svg" />
    )
 }
 

class TransactionsTable extends React.Component{
    constructor(props){
       super(props);
       this.state = {
           data:[],
            date: [new Date(), new Date()],
            selectedHeader:null
       }
    }
    onChange = date => this.setState({ date })
    componentDidMount(){
        this.setState({
            data:accounts_data.data
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
       return(
        <Fragment>
          <div className="transactions-tab-filter" >
              <section className="default-view">
                  <label> View </label>
                  <div className="select-wrap">
                    <select>
                        <option value="default" > Default </option>
                    </select>
                  </div>
              </section>
              <section>
                    <DateRangePicker
                        format="dd-MM-yyyy"
                        onChange={this.onChange}
                        value={this.state.date}
                        calendarIcon={<CalenderIcon />}
                    />
              </section>
              <section>
                  <label> Account Number </label>
                  <div className="select-wrap">
                    <select>
                        <option> XXXX XXXX XXXX </option>
                    </select>
                  </div>
              </section>
              <section>
                  <label> Payment Method </label>
                  <div className="select-wrap">
                    <select>
                        <option> ePayment @ Cheque </option>
                    </select>
                  </div>
              </section>              
          </div>
          <div>
            <div className="table-wrap checker-transactions-table-wrapper">
                <table className="checker-transactions-table has-table-bottom">
                <thead>
                    <tr>
                        <th style={{"width":"189px"}} > 
                        <div className="select-wrap table-actions"><span onClick={()=>this.openAction(0)} > Action </span></div>
                            {this.state.selectedHeader === 0 ? 
                                <ActionStatus tableIndex="1" columnName="_id" />: ""}
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
                <tbody onClick={()=>this.setState({selectedHeader:null})}className="tbody-shadow">
                    {this.state.data.map((item,index)=>{
                        return(
                            <tr>
                            <td style={{"width":"150px"}} > 
                                <ButtonDropdown hideHeaderFilter={()=>this.setState({selectedHeader:null})} varient="success" />
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
                </tbody>
                <tfoot className="table-footer">
                <tr>
                        <td colSpan="6">
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

export default TransactionsTable;