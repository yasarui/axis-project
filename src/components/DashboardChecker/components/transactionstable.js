import React, { Fragment } from 'react';
import accounts_data from '../../fixture/accounts_data.json';
import Button from '../../Buttons';

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
          <table className="fixed-table-header">
             <thead>
                <tr>
                  <th style={{"width":"189px"}} > 
                      Column
                      <div className="sortIconsWrapper">
                          <span className="headerSortUp"></span>
                          <span className="headerSortDown"></span>
                      </div> 
                  </th>
                  <th style={{"width":"170px"}}> 
                       Column 
                       <div className="sortIconsWrapper">
                          <span className="headerSortUp"></span>
                          <span className="headerSortDown"></span>
                      </div>
                  </th>
                  <th style={{"width":"160px"}} > 
                      Column 
                      <div className="sortIconsWrapper">
                          <span className="headerSortUp"></span>
                          <span className="headerSortDown"></span>
                      </div>                
                  </th>
                  <th style={{"width":"160px"}}> 
                      Column
                      <div className="sortIconsWrapper">
                          <span className="headerSortUp"></span>
                          <span className="headerSortDown"></span>
                      </div> 
                  </th>
                  <th style={{"width":"158px"}} > 
                      Column 
                      <div className="sortIconsWrapper">
                          <span className="headerSortUp"></span>
                          <span className="headerSortDown"></span>
                      </div>
                  </th>
                  <th style={{"width":"161px"}} > 
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
                         <td style={{"width":"150px"}} > <button className="axis-success-button"> accept </button> </td>
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
        </Fragment>
       ) 
    }
}

export default TransactionsTable;