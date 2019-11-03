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
      <div className="template-steps">
        <div className="template-steps-col">
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
      <div className="new-upload">
        <h3>Upload sample file</h3>
        <UploadComponent />
      </div>
    </div>
  )
}

export default CreateCustomTemplate;