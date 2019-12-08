import React, { Component } from 'react';
import { Tab,Tabs,TabList,TabPanel } from 'react-tabs';
import Dashboard from '../DashboardMaker';
import Initiate from '../InitiateMaker';
import Enquire from '../EnquireMaker';

class Maker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideMenu: false,
      selectedIndex: 0
    }
  }

  hideMenu = (index) => {
    this.props.callbackFromMaker(false);
    this.setState({
      selectedIndex:index
    })
  }

  setSelectedIndex = (index) => {
     console.log("Set selected index function is running");
     this.setState({
       selectedIndex:index
     })
  }

  render() {
   return(
    <Tabs className="main-layout" selectedIndex={this.state.selectedIndex} >
      <div className={"sidebar " + (this.props.hideMenuMaker ? "open" : "")}>
        <div class="sidebar-menu">
          <span onClick={this.hideMenu} className="mobile-menu-close"><i class="fas fa-times"></i></span>
        <TabList>
            <Tab onClick={()=>this.hideMenu(0)}> <i className="fas fa-home"></i> Home  </Tab>
            <Tab onClick={()=>this.hideMenu(1)}> <i className="fas fa-upload"></i> Initiate </Tab>
            <Tab onClick={()=>this.hideMenu(2)}> <i className="fas fa-table"></i> Enquire </Tab>
        </TabList>
      </div>
    </div>
        <div className="content-section" id="maker-content-section">
        <TabPanel>
            <Dashboard setSelectedIndex={this.setSelectedIndex} />
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
}

export default Maker