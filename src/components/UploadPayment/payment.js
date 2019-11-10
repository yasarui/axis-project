import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import UploadComponent from '../UploadComponent';
import './payment.scss';

class UploadPayment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: null
    };
  }

  callbackFunction = (dataFromChild) => {
    console.log(dataFromChild)
    this.setState({ listDataFromChild: dataFromChild });
  }

  render() {
    return (
      <div className="upload-payment">
        <div className="payment-header">
          <h2>Upload Payments</h2>
          <div className="viewing">
            Viewing as
            <select>
              <option>Marker</option>
              <option>Checker</option>
            </select>
          </div>
        </div>
        <div className="new-upload">
          <h3>New Upload</h3>
          {/* callbackFunction: {this.callbackFunction} */}
          {/* <p> {this.state.message} </p> */}
          <UploadComponent pageType="uploadPage" callbackFromParent={this.callbackFunction} />
        </div>
        <div className="templates clearfix">
          <div className="templates-col">
            <h3>Standard Templates <span>2</span></h3>
            <div className="templates-content">
              <ul>
                <li><span className="star"><i className="far fa-star"></i></span> Axis Bank Account</li>
                <li className="grey"><span className="star selected"><i className="fas fa-star"></i></span> NEFT/RTGS/IMPS</li>
              </ul>
            </div>
          </div>
          <div className="templates-col">
            <h3>Custom Templates <span>5</span></h3>
            <div className="templates-content">
              <ul>
                <li>
                  <span className="star"><i className="far fa-star"></i></span>
                  Custom format 1
                <div className="template-actions">
                    <span title="Download"><i className="fas fa-download"></i></span>
                    <span title="Edit"><i className="fas fa-edit"></i></span>
                    <span title="Delete"><i className="far fa-trash-alt"></i></span>
                  </div>
                </li>
                <li className="grey">
                  <span className="star"><i className="far fa-star"></i></span>
                  Custom format 2
                <div className="template-actions">
                    <span title="Download"><i className="fas fa-download"></i></span>
                    <span title="Edit"><i className="fas fa-edit"></i></span>
                    <span title="Delete"><i className="far fa-trash-alt"></i></span>
                  </div>
                </li>
                <li>
                  <span className="star"><i className="far fa-star"></i></span>
                  Custom format 3
                <div className="template-actions">
                    <span title="Download"><i className="fas fa-download"></i></span>
                    <span title="Edit"><i className="fas fa-edit"></i></span>
                    <span title="Delete"><i className="far fa-trash-alt"></i></span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="custom-tamplate-wrap">
          Choose format for custom template
        <select>
            <option>ePayment & cheque</option>
            <option>ePayment & cheque</option>
          </select>
          <Link to="/custom-template" className="common-btn">Create</Link>
        </div>
      </div>
    )
  }
}

export default UploadPayment;