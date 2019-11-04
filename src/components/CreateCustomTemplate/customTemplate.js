import React from 'react';
import UploadComponent from '../UploadComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './customTemplate.scss';

const CreateCustomTemplate = () => {
  return (
    <div className="custom-template">
      <div className="custom-template-head clearfix">
        <h2>Create custom upload format</h2>
        <Link to="/upload-payment" className="common-btn2">Cancel</Link>
      </div>
      <div className="template-steps clearfix">
        <div className="template-steps-col active">
          <span className="step-count">1</span>
          Upload Sample File
        </div>
        <div className="template-steps-col">
          <span className="step-count">2</span>
          Identify Data-fields
        </div>
        <div className="template-steps-col">
          <span className="step-count">3</span>
          Finalise Details
        </div>
      </div>
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
            <li>Column for your sample file are shown on the left under "Your data"</li>
            <li>Column for your sample file are shown on the left under "Your data"</li>
            <li>Column for your sample file are shown on the left under "Your data"</li>
          </ul>
          <span className="common-btn2">Ok, Got It </span>
        </div>
      </div>
      {/* <div className="new-upload">
        <h3>Upload sample file</h3>
        <UploadComponent pageType='customTemplate' />
      </div> */}
      <div className="new-upload data-fields">
        <h3>Identify Data-Fileds</h3>
        <div className="data-fields-wrap clearfix">
          <div className="data-fields">
            <table class="custom-field-tabel">
              <tr>
                <th>Your Data</th>
                <th>Set Format</th>
              </tr>
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
          <span className="common-btn3">Procude</span>
          <span className="common-btn2">Back</span>
        </div>
      </div>
    </div>
  )
}

export default CreateCustomTemplate;