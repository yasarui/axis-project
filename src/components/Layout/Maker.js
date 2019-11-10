import React from 'react';
import { Tab,Tabs,TabList,TabPanel } from 'react-tabs';
import Dashboard from '../DashboardMaker';
import Initiate from '../InitiateMaker';
import Enquire from '../EnquireMaker';

const Maker = () => {
   return(
    <Tabs className="main-layout">
        <TabList className="sidebar" >
            <Tab> <i className="fas fa-home"></i> Dashboard  </Tab>
            <Tab> <i className="fas fa-upload"></i> Initiate </Tab>
            <Tab> <i className="fas fa-table"></i> Enquire </Tab>
        </TabList>
        <div className="content-section">
        <TabPanel>
            <Dashboard />
        </TabPanel>
        <TabPanel>
            <Initiate />
        </TabPanel>
        <TabPanel>
            <Enquire />
        </TabPanel>
        </div>
    </Tabs>
   )
}

export default Maker