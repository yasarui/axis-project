import React from 'react';
import { Tab,Tabs,TabList,TabPanel } from 'react-tabs';
import Dashboard from '../DashboardChecker';
import Initiate from '../InitiateChecker';
import Enquire from '../EnquireChecker';

const Checker = () => {
   return(
    <Tabs className="main-layout">
        <TabList className="sidebar" >
            <Tab> <i className="fas fa-home"></i> Dashboard  </Tab>
            <Tab> <i className="fas fa-check"></i> Approve </Tab>
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

export default Checker