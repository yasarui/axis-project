import React from 'react';
import enquireTableData from '../fixture/enquire_table_data.json';
import Button from '../Buttons';
import Actions from '../Utils/actions';
import ActionStatus from '../Utils/actionStatus';
import ButtonDropdown from '../ButtonDropdowns';

class EnquireTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedHeader:null,
            hideColumn:{},
            data:[],
            showFilterTooltip:false
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
        let temp = [...this.state.data];
        temp.sort((a,b)=>{
            if(a[key] < b[key]) return -1;
            if(a[key] > b[key]) return 1;
            return 0;
        })
        this.setState({data:temp})
    }
    sortDesending = (key) => {
        let temp = [...this.state.data];
        temp.sort((a,b)=>{
            if(a[key] < b[key]) return 1;
            if(a[key] > b[key]) return -1;
            return 0;
        })
        this.setState({data:temp})
    }
    hideColumn = (value) =>{
       let newObj = {}
       newObj[value] = value;
       let hideColumn = this.state.hideColumn;
          hideColumn = {...hideColumn,...newObj}
       this.setState({
           hideColumn
       })
    }
    filterByCol = (e,col) => {
        e.stopPropagation()
        let searchVal = e.target.value;
        let temp = [...enquireTableData.data];
        if(searchVal.length > 0){
            temp = temp.filter(ele => ele[col].toString().includes(searchVal));
        }
        this.setState({
            data:temp
        })
    }
    handleTdClick(e){
      if (e.nativeEvent.which === 3) {
        this.setState({
          showFilterTooltip:!this.state.showFilterTooltip,
          selectedHeader:null
        })
      }
      if (e.nativeEvent.which === 1) {
        this.setState({
          showFilterTooltip: false,
          selectedHeader:null
        })
      }
      e.preventDefault(); return false;
    }
    render(){
      const actionProps = {
            sortAssending:this.sortAssending,
            sortDesending:this.sortDesending,
            hideColumn:this.hideColumn,
            filterByCol:this.filterByCol
      }
      return(
        <div className="table-wrap">
          <div className="table-wrap-overlay" ></div>
          <table className="enquiry-table" >
            <thead>
                <tr>
                    <th style={{"width":"100px"}} className={(this.props.type=='maker' ? 'hidden': '')}> 
      <div className="select-wrap table-actions"><span onClick={()=>this.openAction(0)} > Action </span></div>
                        {this.state.selectedHeader === 0 ? 
                            <ActionStatus {...actionProps} tableIndex="1" columnName="_id" />: ""}
                    </th>
                    {!this.state.hideColumn._id &&
                        <th className={this.state.selectedHeader === 1 ? "active":""} 
                            onClick={()=>this.openAction(1)} > 
                            Batch ID 
                            {this.state.selectedHeader === 1 ? 
                            <Actions {...actionProps} tableIndex="1" columnName="_id" />: ""}
                        </th>
                    }
                    {!this.state.hideColumn.name &&
                        <th  style={{"width":"250px"}} className={this.state.selectedHeader === 2 ? "active":""} 
                            onClick={()=>this.openAction(2)}> 
                            Staff 
                            {this.state.selectedHeader === 2 ? 
                            <Actions {...actionProps} tableIndex="2" columnName="name" />: ""}
                        </th>
                    }
                    {!this.state.hideColumn.created &&
                        <th className={this.state.selectedHeader === 3 ? "active":""} 
                            onClick={()=>this.openAction(3)} > 
                            Created
                            {this.state.selectedHeader === 3 ? 
                            <Actions {...actionProps} tableIndex="3" columnName="created" />: ""}
                        </th>
                    }
                    {!this.state.hideColumn.accepted &&
                        <th className={this.state.selectedHeader === 4 ? "active":""} 
                            onClick={()=>this.openAction(4)}> 
                            Accepted 
                            {this.state.selectedHeader === 4 ? 
                            <Actions {...actionProps} tableIndex="4" columnName="accepted" />: ""}
                        </th>
                    }
                    {!this.state.hideColumn.rejected &&
                        <th className={this.state.selectedHeader === 5 ? "active":""} 
                            onClick={()=>this.openAction(5)}> 
                            Rejected 
                            {this.state.selectedHeader === 5 ? 
                            <Actions {...actionProps} tableIndex="5" columnName="rejected" />: ""}
                        </th>
                    }
                    {!this.state.hideColumn.putOnHold &&
                        <th className={this.state.selectedHeader === 6 ? "active":""} 
                            onClick={()=>this.openAction(6)}> 
                            Put on Hold 
                            {this.state.selectedHeader === 6 ? 
                            <Actions {...actionProps} tableIndex="6" columnName="putOnHold" />: ""}
                        </th>
                    }
                </tr>
            </thead>
            <tbody>
                {this.state.data.map((item,index)=>{
                    return (
                        <tr>
                            <td className={(this.props.type=='maker' ? 'hidden': '')}> <ButtonDropdown hideHeaderFilter={()=>this.setState({selectedHeader:null})} varient="success" /> </td>
                            { !this.state.hideColumn._id && <td onClick={(e)=>this.handleTdClick(e)} onContextMenu={(e)=>this.handleTdClick(e)} > {item._id} </td> }
                            { !this.state.hideColumn.name && <td onClick={(e)=>this.handleTdClick(e)} onContextMenu={(e)=>this.handleTdClick(e)} > {item.name} </td> }
                            { !this.state.hideColumn.created && <td onClick={(e)=>this.handleTdClick(e)}  onContextMenu={(e)=>this.handleTdClick(e)}> {item.created} </td> }
                            { !this.state.hideColumn.accepted && <td onClick={(e)=>this.handleTdClick(e)} onContextMenu={(e)=>this.handleTdClick(e)} > {item.accepted} </td> }
                            { !this.state.hideColumn.rejected && <td onClick={(e)=>this.handleTdClick(e)} onContextMenu={(e)=>this.handleTdClick(e)} > {item.rejected} </td> }
                            { !this.state.hideColumn.putOnHold && <td onClick={(e)=>this.handleTdClick(e)}  onContextMenu={(e)=>this.handleTdClick(e)}> {item.putOnHold} </td> }
                        </tr>
                    )
                })}
                <tr>
                  <td colspan="7">
                  { this.state.showFilterTooltip && <div className="td-filter-tooltip">
                        <div> Filter on this Value </div>
                        <div> Add to Custom filter </div>
                    </div>}  
                  </td>
                </tr>
            </tbody>
        </table>
      
        </div>
      )
    } 
}

export default EnquireTable;