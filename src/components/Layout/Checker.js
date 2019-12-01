import React, { Component, useState } from 'react';
import { Tab,Tabs,TabList,TabPanel } from 'react-tabs';
import Dashboard from '../DashboardChecker';
import Initiate from '../InitiateChecker';
import Enquire from '../EnquireChecker';

class Checker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideMenu: false
    }
    const [tabIndex,setTabIndex] = useState(0);
  }

  hideMenu = () => {
    this.props.callbackFromChecker(false);
  }

  render() {
   return(
    <Tabs className="main-layout" selectedIndex={tabIndex} onSelect={tabIndex => setTabIndex(tabIndex) }>
      <div className={"sidebar " + (this.props.hideMenuChecker ? "open" : "")}>
        <div class="sidebar-menu">
          <span onClick={this.hideMenu} className="mobile-menu-close"><i class="fas fa-times"></i></span>
          <TabList>
              <Tab onClick={this.hideMenu}> <i className="fas fa-home"></i> Dashboard  </Tab>
              <Tab onClick={this.hideMenu}> <i className="fas fa-check"></i> Approve </Tab>
              <Tab onClick={this.hideMenu}> <i className="fas fa-table"></i> Enquire </Tab>
          </TabList>
        </div>
      </div>
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
}

export default Checker