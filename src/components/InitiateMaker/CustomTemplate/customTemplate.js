import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Upload from '../../Upload';
import './customTemplate.scss';

class CustomTemplate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      uploadSuccess: false
    };
  }

  callbackFunction = (dataFromChild) => {
    if (dataFromChild) {
      this.setState(state => ({
        currentStep: 2
      }));
    }
  }

  nextStep = () => {
    this.setState(state => ({
      currentStep: this.state.currentStep + 1
    }));
  }

  previousStep = () => {
    this.setState(state => ({
      currentStep: this.state.currentStep - 1
    }));
  }

  paymentPage = () => {
    this.props.callbackFromParent('payment');
  }

  render() {
    let currentStep;
    let configData;
    if (this.state.currentStep == 1) {
      currentStep =
        <div className="new-upload">
          <h3>Upload sample file</h3>
          <Upload pageType='customTemplate' callbackFromParent={this.callbackFunction} />
        </div>
    }
    if (this.state.currentStep == 2) {
      currentStep =
        <div className="new-upload data-fields">
          <h3>Identify Data-Fileds</h3>
          <div className="data-fields-wrap clearfix">
            <div className="data-fields">
              <table class="custom-field-tabel">
                <thead>
                  <tr>
                    <th>Your Data</th>
                    <th>Set Format</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span className="custom-data-count">1</span> Custom data 1</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><span className="custom-data-count">2</span> Custom data 2</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><span className="custom-data-count">3</span> Custom data 3</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><span className="custom-data-count">4</span> Custom data 4</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><span className="custom-data-count">5</span> Custom data 5</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><span className="custom-data-count">5</span> Custom data 6</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="data-fields-lists">
              <p>Choose format (Drag and drop or click on "+")</p>
              <h3>Mandatory</h3>
              <ul>
                <li><span className="plus-btn"><i className="fas fa-plus"></i></span>Mandatory filed 1</li>
                <li><span className="plus-btn"><i className="fas fa-plus"></i></span>Mandatory filed 2</li>
                <li><span className="plus-btn"><i className="fas fa-plus"></i></span>Mandatory filed 3</li>
                <li><span className="plus-btn"><i className="fas fa-plus"></i></span>Mandatory filed 4</li>
                <li><span className="plus-btn"><i className="fas fa-plus"></i></span>Mandatory filed 5</li>
              </ul>
              <h3>Optional</h3>
              <ul>
                <li><span className="plus-btn"><i className="fas fa-plus"></i></span>Create your own</li>
                <li><span className="plus-btn"><i className="fas fa-plus"></i></span>Optional field 1</li>
                <li><span className="plus-btn"><i className="fas fa-plus"></i></span>Optional field 2</li>
                <li><span className="plus-btn"><i className="fas fa-plus"></i></span>Optional field 3</li>
                <li><span className="plus-btn"><i className="fas fa-plus"></i></span>Optional field 4</li>
              </ul>
            </div>
          </div>
          <div className="data-field-btn">
            <span className="common-btn3" onClick={this.nextStep}>Procude</span>
            <span className="common-btn2" onClick={this.previousStep}>Back</span>
          </div>
        </div>
    }
    if (this.state.currentStep == 3) {
      currentStep =
        <div className="new-upload finalise-detail">
          <h3>Finalise Details</h3>
          <div className="finalise-detail-data">
            <form class="finalise-detail-form">
              <div class="form-group clearfix">
                <label>Template Name</label>
                <input type="text" />
              </div>
              <div class="form-group clearfix">
                <label>No. of footers</label>
                <input type="text" />
              </div>
              <div class="form-group clearfix">
                <label>No. of headers</label>
                <input type="text" />
              </div>
              <div class="form-group clearfix">
                <label>File extension</label>
                <select>
                  <option>Choose</option>
                  <option>Choose 1</option>
                  <option>Choose 2</option>
                </select>
              </div>
              <div class="form-group clearfix">
                <label>Delimiter</label>
                <select>
                  <option></option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <div class="form-group clearfix">
                <label>Date format</label>
                <select>
                  <option>dd-mm-yyyy</option>
                  <option>mm-dd-yyyy</option>
                  <option>yyyy-mm-dd</option>
                </select>
              </div>
              <div className="data-field-btn">
                <span className="common-btn" onClick={this.paymentPage}>Create</span>
                <span className="common-btn2" onClick={this.previousStep}>Back</span>
              </div>
            </form>
          </div>
        </div>
    }
    if (this.state.currentStep == 1 || this.state.currentStep == 2) {
      configData =
        <div className="config-custom-format open">
          <h3>How to configure a custom format
          <span class="slide-arrow">
              <i class="fas fa-chevron-up"></i>
              {/* <i class="fas fa-chevron-down"></i> */}
            </span>
          </h3>
          <div className="config-custom-text clearfix">
            <p>You can use your own format to upload salary transactions. For us process this, we need to understand what each of your column contain.</p>
            <h4>Next steps</h4>
            <ul>
              <li>Column for your sample file are shown on the left under "Your data"</li>
              <li>Match one of the mandatory or optional from the extreme right under "Choose format" to "Your Data" by dragging-and-dropping or clicking on "+"</li>
              <li>If one of the optional fields match the meaning of your data, you can click "Create your own"</li>
              <li>You can edit the name of any optional fields</li>
              <li>You can only proceed when you have assigned all the mandatory fields under Choose Format to your data</li>
            </ul>
            <span className="common-btn2">Ok, Got It </span>
          </div>
        </div>
    }

    return (
      <div className="custom-template">
        <div className="custom-template-head clearfix">
          <h2>Create custom upload format</h2>
          <span className="common-btn2" onClick={this.paymentPage}>Cancel</span>
        </div>
        <div className="template-steps clearfix">
          <div className={"template-steps-col " + (this.state.currentStep == 1 ? "active" : "")}>
            <span className="step-count">1</span>
            Upload Sample File
        </div>
          <div className={"template-steps-col " + (this.state.currentStep == 2 ? "active" : "")}>
            <span className="step-count">2</span>
            Identify Data-fields
        </div>
          <div className={"template-steps-col " + (this.state.currentStep == 3 ? "active" : "")}>
            <span className="step-count">3</span>
            Finalise Details
        </div>
        </div>
        {configData}
        {currentStep}
      </div>
    )
  }
}
export default CustomTemplate;