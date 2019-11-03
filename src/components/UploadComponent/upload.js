import React from 'react';
import './upload.scss';

const UploadComponent = () => {
  return (
    <div className="new-upload-wrap">
      <div className="upload-tex">
        <p>Drag-and-drop salary payment file here</p>
        <p className="upload-or-txt">OR</p>
        <div class="custom-upload-wrap">
          <input type="file" />
          <span>Browse</span>
        </div>
      </div>
    </div>
  )
}

export default UploadComponent;