import React,{Fragment}from 'react';
import batches_data from '../../fixture/batches_data.json';
import Button from '../../Buttons';
import moment from 'moment';
import ButtonDropdown from '../../ButtonDropdowns';

class BatchTable extends React.Component{
    constructor(props){
      super(props);
      this.state = {
          data:[]
      }
    }
    componentDidMount(){
        this.setState({
            data:batches_data.data
        })
    }
    render(){
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
                    <th> Actions </th>
                  </tr>
              </thead>
              <tbody style={{"height":"300px"}} className="tbody-shadow" >
                  {this.state.data.map((item,index)=>{
                      return(
                        <tr>
                            <td>  
                                <i class="fas fa-eye icon"></i> {item._id.substr(1,5)} 
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
                            <td style={{"width":"181px"}}> 
                                <ButtonDropdown varient={item.button} />
                            </td>
                        </tr>
                      )
                  })}
              </tbody>
              <tfoot className="table-footer">
                <tr>
                        <td style={{"width":"73px"}} ></td>
                        <td style={{"width":"135px"}}></td>
                        <td style={{"width":"125px"}}></td>
                        <td style={{"width":"159px"}}></td>
                        <td style={{"width":"90px"}} > 
                            <span className="green-clr"> XXXX  </span> 
                            <span className="orange-clr"> XX  </span>
                            <span className="red-clr"> XX </span>
                            <span className="grey-clr"> X </span>
                        </td>
                        <td style={{"width":"122px"}} >
                            <span className="green-clr" > ₹ XX,XX,XXX <i class="fas fa-circle small-icon"></i> </span>
                            <span className="orange-clr"> ₹ XX,XXX <i class="fas fa-circle small-icon"></i> </span>
                            <span className="red-clr"> ₹ XX,XXX <i class="fas fa-circle small-icon"></i> </span>
                            <span className="grey-clr"> ₹ X,XXX <i class="fas fa-circle small-icon"></i> </span>
                        </td>
                        <td> 
                            <Button> AUTHORISE </Button>
                        </td>
                 </tr>
              </tfoot>
            </table>
          </div>
         </Fragment>
      )
    }
}

export default BatchTable;