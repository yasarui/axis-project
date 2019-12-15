import React, { Component, useState } from 'react';
import { Tab,Tabs,TabList,TabPanel } from 'react-tabs';
import Dashboard from '../DashboardChecker';
import Initiate from '../InitiateChecker';
import Enquire from '../EnquireChecker';

class Checker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideMenu: false,
      tabIndex:0,
      approveTabIndex:0
    }
    //sconst [tabIndex,setTabIndex] = useState(0);
  }

  hideMenu = () => {
    this.props.callbackFromChecker(false);
    document.getElementById("checker-content-section").scrollTop = 0;
  }

  handleTabSelect = (index,approveTabIndex) => {
    this.setState({tabIndex:index,approveTabIndex})
  }

  setSelectedIndex = (index) => {
    this.setState({
      tabIndex:index
    });
    document.getElementById("checker-content-section").scrollTop = 0;
 }

  render() {
   return(
    <Tabs className="main-layout" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({tabIndex:tabIndex}) }>
      <div className={"sidebar " + (this.props.hideMenuChecker ? "open" : "")}>
        <div class="sidebar-menu">
          <span onClick={this.hideMenu} className="mobile-menu-close"><i class="fas fa-times"></i></span>
          <TabList>
              <Tab onClick={this.hideMenu}> 
              <span className="home"><img src="./images/home.svg" /></span>
              <span className="home active-icon"><img src="./images/home-active.svg" /></span>
              Home  </Tab>
              <Tab onClick={this.hideMenu}> 
              <span className="approve"><img src="./images/approve.svg" /></span>
              <span className="approve active-icon"><img src="./images/approve-active.svg" /></span>
               Approve </Tab>
              <Tab onClick={this.hideMenu}> 
              <span className="enquire"><img src="./images/enquire.svg" /></span>
              <span className="enquire active-icon"><img src="./images/enquire-active.svg" /></span>
              Enquire </Tab>
          </TabList>
        </div>
      </div>
        <div className="content-section" id="checker-content-section">
        <TabPanel>
            <Dashboard setSelectedIndex={this.setSelectedIndex}  setTabIndex={this.handleTabSelect} />
        </TabPanel>
        <TabPanel>
            <Dashboard setSelectedIndex={this.setSelectedIndex} tab={true} approveTabIndex={this.state.approveTabIndex} />
        </TabPanel>
        <TabPanel>
            <Enquire setSelectedIndex={this.setSelectedIndex} />
        </TabPanel>
        </div>
    </Tabs>
   )
  }
}

export default Checker