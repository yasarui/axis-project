import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UploadPayment from './UploadPayment';
import CustomTemplate from './CustomTemplate';
import './initiate.scss';

class Initiate extends Component {

  render() {
    return (
      <UploadPayment />
      // <CustomTemplate />
    )
  }
}

export default Initiate;