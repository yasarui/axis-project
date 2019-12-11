import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Upload from '../../Upload';
import './payment.scss';
import RouteSelect from '../../Utils/RouteSelect';

class UploadPayment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listDataFromChild: null,
      standardTemplates: [
        {
          id: 1,
          name: 'Axis Bank Account',
          isFavorite: false
        },
        {
          id: 2,
          name: 'NEFT/RTGS/IMPS',
          isFavorite: true
        },
      ],
      customTemplate: this.getCustomTemplate()
    };
  }

  getCustomTemplate = () => {
    var customTemplate = JSON.parse(sessionStorage.getItem('custom_template'));
    var returnData = [];
    if(customTemplate) {
      returnData = customTemplate;
    }
    return returnData;
  }

  callbackFunction = (dataFromChild) => {
    console.log(dataFromChild)
    this.setState({ listDataFromChild: dataFromChild });
  }

  customTemplate = () => {
    this.props.callbackFromParent('template');
  }

  customTemplateFavorite = (index) => {
    this.state.customTemplate[index].isFavorite = !this.state.customTemplate[index].isFavorite;
    this.setState({ customTemplate: this.state.customTemplate });
  }

  customstandardTemplates = (index) => {
    this.state.standardTemplates[index].isFavorite = !this.state.standardTemplates[index].isFavorite;
    this.setState({ standardTemplates: this.state.standardTemplates });
  }

  removecustomTemplate(index) {
    this.state.customTemplate.splice(index, 1);
    this.setState({ customTemplate: this.state.customTemplate });
  }

  render() {
    let customTemplateDefaultMsg;
    if(this.state.customTemplate.length==0){
      customTemplateDefaultMsg = <p className="no-template-msg">No custom template has been created</p>;
    }
    return (
      <div className="upload-payment">
        <div className="payment-header">
          <h2>Upload Payments</h2>
          <RouteSelect />
        </div>
        <div className="new-upload">
          <h3>New Upload</h3>
          <Upload pageType="uploadPage" callbackFromParent={this.callbackFunction} />
        </div>
        <div className="templates clearfix">
          <div className="templates-col">
            <h3>Standard Templates <span>{this.state.standardTemplates.length}</span></h3>
            <div className="templates-content">
              <ul>
              {this.state.standardTemplates.map((data, i) => {
                return <li key={data} className={((i+1)%2==0 ? "grey" : "")}>
                  {data.name}
                  <span onClick={this.customstandardTemplates.bind(this, i)} className={"star " + (data.isFavorite ? "selected" : "")}>
                    <i className={(data.isFavorite ? "fas fa-star" : "far fa-star")}></i></span>
                    <div className="template-actions">
                      <a href="./images/logo-white.png" title="Download" download>
                        <img src="./images/download1.png" />
                      </a>
                    </div>
                </li>
                })}
              </ul>
            </div>
          </div>
          <div className="templates-col">
            <h3>Custom Templates <span>{this.state.customTemplate.length}</span></h3>
            <div className="templates-content">
              {customTemplateDefaultMsg}
              <ul>
              {this.state.customTemplate.map((data, i) => {
                return <li key={data} className={((i+1)%2==0 ? "grey" : "")}>
                  {data.name}
                  <span onClick={this.customTemplateFavorite.bind(this, i)} className={"star " + (data.isFavorite ? "selected" : "")}>
                    <i className={(data.isFavorite ? "fas fa-star" : "far fa-star")}></i></span>
                  <div className="template-actions">
                    <a href="./images/logo-white.png" title="Download" download>
                      <img src="./images/download1.png" />
                    </a>
                    <span onClick={this.customTemplate} title="Edit">
                      <img src="./images/edit1.png" />
                    </span>
                    <span onClick={this.removecustomTemplate.bind(this, i)} title="Delete">
                    <img src="./images/delete1.png" />
                    </span>
                  </div>
                </li>
                })}
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
          <span className="common-btn" onClick={this.customTemplate}>Create</span>
        </div>
      </div>
    )
  }
}

export default UploadPayment;