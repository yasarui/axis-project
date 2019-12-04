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
                        <select>
                            <option>Default</option>
                            <option>Custom</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

class EnquireTable extends React.Component{
     render(){
         return(
            <div className="enquire-table-wrap">
                <Tabs>
                    <div className="main-nav-tabs">
                        <TabList>
                            <Tab> Standard  </Tab>
                            <Tab> Custom </Tab>
                        </TabList>
                    </div>
                    <div className="clearfix"></div>
                    <TabPanel>
                        <div className="enquire-table-filter">
                           <DefaultFilter />
                        </div>
                        <Table />
                    </TabPanel>
                    <TabPanel>
                        <CustomFilter />
                        <Table />
                    </TabPanel>
                </Tabs>
            </div>
         )
     }
}

export default EnquireTable;