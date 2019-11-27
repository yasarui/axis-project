import React, {useState} from 'react';
import { Tab,Tabs,TabList,TabPanel } from 'react-tabs';
import Dashboard from '../DashboardChecker';
import Initiate from '../InitiateChecker';
import Enquire from '../EnquireChecker';

const Checker = () => {
   
   const [tabIndex,setTabIndex] = useState(0);
  
   return(
    <Tabs className="main-layout" selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex) }> >
        <TabList className="sidebar" >
            <Tab> <i className="fas fa-home"></i> Dashboard  </Tab>
            <Tab> <i className="fas fa-check"></i> Approve </Tab>
            <Tab> <i className="fas fa-table"></i> Enquire </Tab>
        </TabList>
        <div className="content-section">
        <TabPanel>
            <Dashboard setTabIndex={setTabIndex} />
        </TabPanel>
        <TabPanel>
            <Dashboard tab={true} />
        </TabPanel>
        <TabPanel>
            <Enquire />
        </TabPanel>
        </div>
    </Tabs>
   )
}

export default Checker