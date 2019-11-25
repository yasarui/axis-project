import React,{Fragment}from 'react';
import batches_data from '../../fixture/batches_data.json';
import Button from '../../Buttons';

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
           <div className="table-wrap">
           <table>
             <thead>
                <tr>
                  <th> Batch ID </th>
                  <th> Created </th>
                  <th> Last action </th>
                  <th> Last action date </th>
                  <th> Transactions Pending </th>
                  <th> Amount Pending approval </th>
                  <th> Actions </th>
                </tr>
             </thead>
             <tbody>
                 {this.state.data.map((item,index)=>{
                    return(
                       <tr>
                          <td> {item._id} </td>
                          <td> {item.created} </td>
                          <td> {item.name} </td>
                          <td> {item.lastDate} </td>
                          <td> {item.pending} </td>
                          <td> {item.amount} </td>
                          <td> <Button variant={item.button} > Accept </Button> </td>
                       </tr>
                    )
                 })}
             </tbody>
           </table>
           </div>
         </Fragment>
      )
    }
}

export default BatchTable;