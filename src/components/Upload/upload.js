import React, { Component } from 'react';
import './upload.scss';

class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errorInUpload: false,
      successInUpload: false,
      currentStep: 1,
      uploadFile: []
    };
  }

  componentDidMount() {
    this.dragAndDrop();
    this.props.callbackFromParent(false);
  }

  dragAndDrop() {
    var _this = this;
    function $id(id) {
      return document.getElementById(id);
    }
    function Output(msg) {
      var m = $id("messages");
      m.innerHTML = msg + m.innerHTML;
    }
    if (window.File && window.FileList && window.FileReader) {
      Init();
    }
    function Init() {
      var fileselect = $id("fileselect"),
        filedrag = $id("filedrag"),
        submitbutton = $id("submitbutton");
      fileselect.addEventListener("change", FileSelectHandler, false);
      var xhr = new XMLHttpRequest();
      if (xhr.upload) {
        filedrag.addEventListener("dragover", FileDragHover, false);
        filedrag.addEventListener("dragleave", FileDragHover, false);
        filedrag.addEventListener("drop", FileSelectHandler, false);
        filedrag.style.display = "block";
        submitbutton.style.display = "none";
      }
    }
    function FileDragHover(e) {
      e.stopPropagation();
      e.preventDefault();
      e.target.className = (e.type == "dragover" ? "hover" : "");
    }
    function FileSelectHandler(e) {
      FileDragHover(e);
      var files = e.target.files || e.dataTransfer.files;
      for (var i = 0, f; f = files[i]; i++) {
        ParseFile(f);
      }
    }
    function ParseFile(file) {
      _this.uploadFileList(file.name);
      Output(
        "<div class='upload-list-wrap clearfix'><div class='upload-file-name'>" + file.name +
        "<span class='close-upload-file'><i class='fas fa-times-circle'></i></span></div></div>"
      );
    }
  }

  uploadFileList = (file) => {
    var arrayList = [];
    arrayList = this.state.uploadFile;
    arrayList.push(file);
    this.setState(state => ({
      uploadFile: arrayList
    }));
  };

  uploadFiles = () => {
    this.setState(state => ({
      errorInUpload: false,
      successInUpload: true
    }));
  }

  hidePopup = () => {
    this.setState(state => ({
      errorInUpload: false,
      successInUpload: false
    }));
  }

  nextStep = () => {
    this.props.callbackFromParent(true);
  }

  triggerClick() {
    document.getElementById("fileselect").click()
  }

  render() {
    let popupData;
    let uploadButton;
    if (this.state.errorInUpload) {
      popupData =
        <div className="popup-overlay">
          <div className="custom-popup">
            <span className="popup-close"><i class="far fa-window-close" onClick={this.hidePopup}></i></span>
            <p className="warning-txt clearfix"><img src="./images/error.svg" /> <span>Error: Wrong file format!</span></p>
            <p>Please re-upload with the correct format</p>
            <span class="common-btn">Ok</span>
          </div>
        </div>
    }
    if (this.state.successInUpload) {
      popupData =
        <div className="popup-overlay">
          <div className="custom-popup">
            <span className="popup-close"><i class="far fa-window-close" onClick={this.hidePopup}></i></span>
            <p className="success-txt clearfix"><img src="./images/success.svg" /> <span>Batch Accepted</span></p>
            <span className="common-btn" onClick={()=>this.props.setSelectedIndex(0)}>Ok</span>
            <span className="file-status" onClick={()=>this.props.setSelectedIndex(0)}>View file status</span>
          </div>
        </div>
    }

    if (this.props.pageType == 'uploadPage' && this.state.uploadFile.length > 0) {
      uploadButton = <div><span className="common-btn" onClick={this.uploadFiles}>Upload</span>
      <p className="success-upload-msg"><span><i class="fas fa-check"></i></span>NEFT/RTGS/IMPS Accounts</p></div>
    }
    if (this.props.pageType == 'customTemplate' && this.state.uploadFile.length > 0) {
      uploadButton = <div><span className="common-btn" onClick={this.nextStep}>Upload</span>
      <p className="success-upload-msg"><span><i class="fas fa-check"></i></span>NEFT/RTGS/IMPS Accounts</p>
      </div>
    }

    return (
      <div className="upload-wrap">
        <div id="filedrag" className="new-upload-wrap">
          <div id="upload-tex">
            <div id="messages"></div>
            {uploadButton}
            <form id="upload">
              <input type="hidden" id="MAX_FILE_SIZE" name="MAX_FILE_SIZE" value="300000" />
              <p>Drag-and-drop salary payment file here</p>
              <p className="upload-or-txt">OR</p>
              <div class="custom-upload-wrap" onClick={this.triggerClick}>
                <input type="file" id="fileselect" name="fileselect[]" multiple="multiple" />
                <span>Browse</span>
              </div>
              <div>
              </div>
              <div id="submitbutton">
                <button type="submit">Upload Files</button>
              </div>
            </form>
          </div>
        </div>
        {popupData}
      </div>
    )
  }
}

export default Upload;