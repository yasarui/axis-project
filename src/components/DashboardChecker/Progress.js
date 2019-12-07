import React,{useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BatchesTable from './components/batchtable';
import AccountsTable from './components/accountstable';
import TransactionsTable from './components/transactionstable';

const Progress = (props) => {
   const [ showTab , setShowTab ] = useState(false);
   const handleClick = () => {
       console.log("Product tile has been clicked");
   }
   return(
    <Tabs defaultIndex={props.approveTabIndex} >
        <TabList>
            <div className="progress-tiles-wrapper clearfix">
                <Tab>
                    <div className="progress-tile">
                        <span className="text"> BATCHES </span>
                        <span className="count"> 15 </span>
                    </div>
                </Tab>
                <Tab>
                    <div className="progress-tile">
                        <span className="text"> ACCOUNTS </span>
                        <span className="count"> 3 </span>              
                    </div>
                </Tab>
                <Tab>
                    <div className="progress-tile">
                        <span className="text"> TRANSACTIONS </span>
                        <span className="count"> 1300 </span>              
                    </div>
                </Tab>
            </div>
        </TabList>
        <TabPanel>
            <BatchesTable />
        </TabPanel>
        <TabPanel>
            <AccountsTable/> 
        </TabPanel>
        <TabPanel>
            <TransactionsTable />
        </TabPanel>
    </Tabs>
   )
}

export default Progress;