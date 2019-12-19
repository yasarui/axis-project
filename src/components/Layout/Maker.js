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
    });
    document.getElementById("maker-content-section").scrollTop = 0;
  }

  setSelectedIndex = (index) => {
     this.setState({
       selectedIndex:index
     })
     document.getElementById("maker-content-section").scrollTop = 0;
  }

  render() {
   return(
    <Tabs className="main-layout" selectedIndex={this.state.selectedIndex} >
      <div className={"sidebar " + (this.props.hideMenuMaker ? "open" : "")}>
        <div class="sidebar-menu">
          <span onClick={()=>this.hideMenu(0)} className="mobile-menu-close"><i class="fas fa-times"></i></span>
        <TabList>
            <Tab onClick={()=>this.hideMenu(0)}> 
            <span className="home"><img src="./images/home.svg" /></span>
            <span className="home active-icon"><img src="./images/home-active.svg" /></span>
             Home  </Tab> 
            <Tab className="mobile-initiate" onClick={()=>this.hideMenu(1)}> 
            <span className="initate"><img src="./images/initate.svg" /></span>
            <span className="initate active-icon"><img src="./images/initate-active.svg" /></span>
             Initiate </Tab>
            <Tab onClick={()=>this.hideMenu(2)}> 
            <span className="enquire"><img src="./images/enquire.svg" /></span>
            <span className="enquire active-icon"><img src="./images/enquire-active.svg" /></span>
             Enquire </Tab>
        </TabList>
      </div>
    </div>
        <div className="content-section" id="maker-content-section">
        <TabPanel>
            <Dashboard setSelectedIndex={this.setSelectedIndex} />
        </TabPanel>
        <TabPanel>
            <Initiate setSelectedIndex={this.setSelectedIndex} />
        </TabPanel>
        <TabPanel>
            <Enquire setSelectedIndex={this.setSelectedIndex} />
        </TabPanel>
        </div>
    </Tabs>
   )
  }
}

export default Maker