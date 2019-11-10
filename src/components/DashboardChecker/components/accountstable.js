import React from 'react';
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
          <table>
             <thead>
                <tr>
                  <th> Debit Account </th>
                  <th> Debit Account Name </th>
                  <th> Current Balance </th>
                  <th> Amount Under Approval </th>
                  <th> Action </th>
                </tr>
             </thead>
             <tbody>
                {this.state.data.map((item,index)=>{
                    return(
                      <tr>
                         <td> {item._id} </td>
                         <td> {item.name} </td>
                         <td> {item.current} </td>
                         <td> {item.amount} </td>
                         <td> <Button variant={item.button} > {item.button} </Button> </td>
                      </tr>
                    )
                })}
             </tbody>
          </table> 
       ) 
    }
}

export default AccountsTable;