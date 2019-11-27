import React,{Fragment}from 'react';
import batches_data from '../../fixture/batches_data.json';
import Button from '../../Buttons';
import moment from 'moment';

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
           <table className="fixed-table-header has-bottom">
             <thead>
                <tr>
                  <th style={{"width":"113px"}}> Batch ID </th>
                  <th style={{"width":"184px"}}> 
                     Created
                     <div className="sortIconsWrapper">
                          <span className="headerSortUp"></span>
                          <span className="headerSortDown"></span>
                      </div>
                  </th>
                  <th style={{"width":"164px"}}> 
                     Last action 
                      <div className="sortIconsWrapper">
                          <span className="headerSortUp"></span>
                          <span className="headerSortDown"></span>
                      </div>
                  </th>
                  <th style={{"width":"201px"}}> 
                      Last action date 
                      <div className="sortIconsWrapper">
                          <span className="headerSortUp"></span>
                          <span className="headerSortDown"></span>
                      </div>
                  </th>
                  <th style={{"width":"133px"}}> 
                      Transactions Pending 
                      <div className="sortIconsWrapper">
                          <span className="headerSortUp"></span>
                          <span className="headerSortDown"></span>
                      </div>
                  </th>
                  <th style={{"width":"165px"}}> 
                       Amount Pending approval
                       <div className="sortIconsWrapper">
                          <span className="headerSortUp"></span>
                          <span className="headerSortDown"></span>
                      </div>
                  </th>
                  <th style={{"width":"181px"}}> Actions </th>
                </tr>
             </thead>
             <tbody style={{"height":"300px"}} className="tbody-shadow" >
                 {this.state.data.map((item,index)=>{
                    return(
                       <tr>
                          <td style={{"width":"101px"}} >  
                              <i class="fas fa-eye icon"></i> {item._id.substr(1,5)} 
                          </td>
                          <td style={{"width":"162px"}} >  
                            <span className="date" > 
                                  {moment(item.date).format('dddd DD-MM-YY')} 
                            </span>
                            <span className="time"> 
                                  {moment(item.date).format('h:mm:ss a')} 
                            </span>   
                          </td>
                          <td style={{"width":"177px"}} > 
                              {item.name}
                              <a class="view-details" href="#"> View Transactions </a>
                          </td>
                          <td style={{"width":"180px"}} > 
                           <span className="date" > 
                                  {moment(item.lastDate).format('dddd DD-MM-YY')} 
                            </span>
                            <span className="time"> 
                                  {moment(item.lastDate).format('h:mm:ss a')} 
                            </span>  
                          </td>
                          <td style={{"width":"164px"}} className="textalign-right"> 
                             {item.pending} 
                          </td>
                          <td style={{"width":"191px"}}> ₹​{item.amount} 
                              <span className={item.iconClr} > <i class="fas fa-circle small-icon"></i> </span> 
                          </td>
                          <td style={{"width":"181px"}}> <Button variant={item.button} > Accept </Button> </td>
                       </tr>
                    )
                 })}
             </tbody>
           </table>
           <table className="bottom-table">
                <tbody>
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
                </tbody>
            </table>
         </Fragment>
      )
    }
}

export default BatchTable;