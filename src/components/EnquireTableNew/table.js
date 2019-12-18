import React,{Fragment} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Table from './enquire_table';
import CustomFilter from './custom_filter';
import './table.scss';

const DefaultFilter = () => {
    return (
        <div className="custom-filter-wrap clearfix">
            <div className="custom-filter-col1 clearfix">
                <div className="custom-filter-top clearfix">
                    <div className="view-type">
                        <label>View</label>
                        <div className="select-wrap">
                          <select>
                              <option>Default</option>
                              <option>Custom</option>
                          </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

class EnquireTable extends React.Component{
     constructor(props){
        super(props);
        this.state = {
           overlay:false,
           selectedIndex:0
        }
     }
     toggleOverlay(state,index,e){

         if(e.target.type == "input") return;
         if(index == this.state.selectedIndex){
            this.setState({
                overlay:false,
                selectedIndex:0
            })
         }else{
            this.setState({
                overlay:state,
                selectedIndex:index
            })
         }
         e.stopPropagation();
     }
     render(){
         return(
            <div className="enquire-table-wrap">
                <Tabs>
                    <div className="main-nav-tabs">
                        <TabList>
                            <Tab> Standard  <span></span></Tab>
                            <Tab> Custom <span></span></Tab>
                        </TabList>
                    </div>
                    <div className="clearfix"></div>
                    <TabPanel>
                        <div className="enquire-table-filter">
                           <DefaultFilter />
                        </div>
                        <Table type={this.props.type} />
                    </TabPanel>
                    <TabPanel>
                        <CustomFilter selectedIndex={this.state.selectedIndex} toggleOverlay={(val,index,e)=>this.toggleOverlay(val,index,e)} />
                        <div className={this.state.overlay ? "table-overlay":""}>
                           <Table type={this.props.type} />
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
         )
     }
}

export default EnquireTable;