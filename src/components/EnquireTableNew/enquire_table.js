import React from 'react';
import enquireTableData from '../fixture/enquire_table_data.json';
import Button from '../Buttons';

class EnquireTable extends React.Component{
    render(){
      return(
        <table>
            <thead>
                <tr>
                    <th> Action </th>
                    <th> Batch ID </th>
                    <th> Staff </th>
                    <th> Created </th>
                    <th> Accepted </th>
                    <th> Rejected </th>
                    <th> Put on Hold </th>
                </tr>
            </thead>
            <tbody>
                {enquireTableData.data.map((item,index)=>{
                    return (
                        <tr>
                        <td> <Button variant="success"> Accept </Button> </td>
                        <td> {item._id} </td>
                        <td> {item.name} </td>
                        <td> {item.created} </td>
                        <td> {item.accepted} </td>
                        <td> {item.rejected} </td>
                        <td> {item.putOnHold} </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>        
      )
    }
}

export default EnquireTable;