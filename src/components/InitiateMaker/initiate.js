import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UploadPayment from './UploadPayment';
import CustomTemplate from './CustomTemplate';
import './initiate.scss';

class Initiate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'payment'
    };
    console.log(this.state.currentTab)
  }

  callbackFunction = (dataFromChild) => {
    if (dataFromChild) {
      this.setState(state => ({
        currentTab: dataFromChild
      }));
    }
  }

  render() {
    let htmlData;
    if (this.state.currentTab == 'payment') {
      htmlData = <UploadPayment callbackFromParent={this.callbackFunction} />
    }
    if (this.state.currentTab == 'template') {
      htmlData = <CustomTemplate callbackFromParent={this.callbackFunction} />
    }

    return (
      <div>
        {htmlData}
      </div>
      // <UploadPayment />
      // <CustomTemplate />
    )
  }
}

export default Initiate;