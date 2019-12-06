import React from 'react';
import enquireTableData from '../fixture/enquire_table_data.json';
import Button from '../Buttons';
import Actions from '../Utils/actions';

class EnquireTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedHeader:null,
            data:[]
        }
    }
    componentDidMount(){
        this.setState({
            data:enquireTableData.data
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
    sortAssending = (key) =>{
        console.log("Sort Assending Button has been clicked ",key)
        let temp = [...this.state.data];
        temp.sort((a,b)=>{
            if(a[key] < b[key]) return -1;
            if(a[key] > b[key]) return 1;
            return 0;
        })
        this.setState({data:temp})
    }
    sortDesending = (key) => {
        console.log("Sort Assending Button has been clicked ",key)
        let temp = [...this.state.data];
        temp.sort((a,b)=>{
            if(a[key] < b[key]) return 1;
            if(a[key] > b[key]) return -1;
            return 0;
        })
        this.setState({data:temp})
    }
    hideColumn = (index) =>{
        console.log("Hide Column has been Implemented ",index);
    }
    render(){
      const actionProps = {
            sortAssending:this.sortAssending,
            sortDesending:this.sortDesending,
            hideColumn:this.hideColumn
      }
      return(
        <div className="table-wrap">
          <table className="enquiry-table" >
            <thead>
                <tr>
                    <th onClick={()=>this.openAction()} > Action </th>
                    <th className={this.state.selectedHeader === 1 ? "active":""} onClick={()=>this.openAction(1)} > 
                         Batch ID 
                         {this.state.selectedHeader === 1 ? 
                         <Actions {...actionProps} tableIndex="1" columnName="_id" />: ""}
                    </th>
                    <th className={this.state.selectedHeader === 2 ? "active":""} onClick={()=>this.openAction(2)}> 
                        Staff 
                        {this.state.selectedHeader === 2 ? 
                        <Actions {...actionProps} tableIndex="2" columnName="name" />: ""}
                    </th>
                    <th className={this.state.selectedHeader === 3 ? "active":""} onClick={()=>this.openAction(3)} > 
                        Created
                        {this.state.selectedHeader === 3 ? 
                        <Actions {...actionProps} tableIndex="3" columnName="created" />: ""}
                    </th>
                    <th className={this.state.selectedHeader === 4 ? "active":""} onClick={()=>this.openAction(4)}> 
                         Accepted 
                         {this.state.selectedHeader === 4 ? 
                         <Actions {...actionProps} tableIndex="4" columnName="accepted" />: ""}
                    </th>
                    <th className={this.state.selectedHeader === 5 ? "active":""} onClick={()=>this.openAction(5)}> 
                         Rejected 
                         {this.state.selectedHeader === 5 ? 
                         <Actions {...actionProps} tableIndex="5" columnName="rejected" />: ""}
                    </th>
                    <th className={this.state.selectedHeader === 6 ? "active":""} onClick={()=>this.openAction(6)}> 
                         Put on Hold 
                         {this.state.selectedHeader === 6 ? 
                         <Actions {...actionProps} tableIndex="6" columnName="putOnHold" />: ""}
                    </th>
                </tr>
            </thead>
            <tbody>
                {this.state.data.map((item,index)=>{
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
        </div>
      )
    } 
}

export default EnquireTable;