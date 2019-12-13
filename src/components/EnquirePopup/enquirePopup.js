import React, { Component } from 'react';
import './enquirePopup.scss';

class EnquirePopup extends Component {
  constructor(props) {
    super(props);

  }

  closePopup = () => {
    this.props.callbackFromParent(true);
  }

  render() {
    let mailData;
    if (this.props.type == 'mail') {
      mailData = <div className="popup-overlay">
        <div className="custom-popup send-mail">
          <div className="custom-popup-head clearfix">
            <h3>Send report by email</h3>
            <span className="popup-close" onClick={this.closePopup}><img src="./images/close.svg" /></span>
          </div>
          <div className="form-group">
            <label>Email IDs</label>
            <input type="text" />
          </div>
          <div className="mail-type">
            <p>Frequency</p>
            <div className="custom-radio-btn clearfix">
              <label class="radio-button-wrap">Just once
                <input type="radio" name="radio" />
                <span class="checkmark"></span>
              </label>
              <label class="radio-button-wrap">Every day at
                <input type="radio" name="radio" />
                <div className="select-wrap">
                  <select>
                    <option>08:00</option>
                    <option>09:00</option>
                    <option>10:00</option>
                  </select>
                </div>
                <span class="checkmark"></span>
              </label>
              <label class="radio-button-wrap">Every month on
                <input type="radio" name="radio" checked="checked" />
                <div className="select-wrap">
                  <select>
                    <option>1st</option>
                    <option>2nd</option>
                    <option>3rd</option>
                  </select>
                </div>
                <span class="checkmark"></span>
              </label>
              <label class="radio-button-wrap">Every
                <input type="radio" name="radio" />
                <div className="select-wrap">
                  <select>
                    <option>1st</option>
                    <option>2nd</option>
                    <option>3rd</option>
                  </select>
                </div>
                days starting
                <div className="select-wrap">
                  <select>
                    <option>tomorrow</option>
                  </select>
                </div>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <span className="common-btn">Send</span>
        </div>
      </div>
    }
    if (this.props.type == 'create') {
      mailData = <div className="popup-overlay">
        <div className="custom-popup send-mail create-new">
          <div className="custom-popup-head clearfix">
            <h3>Create New Report</h3>
            <span className="popup-close" onClick={this.closePopup}><img src="./images/close.svg" /></span>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="mail-type">
            <div className="custom-checkbox clearfix">
              <label class="checkbox-wrap">Create columns and rows
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-wrap">Current filters
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <span className="common-btn">Create New Report</span>
        </div>
      </div>
    }
    if (this.props.type == 'update') {
      mailData = <div className="popup-overlay">
        <div className="custom-popup send-mail update">
          <div className="custom-popup-head clearfix">
            <h3>Update Current Report</h3>
            <span className="popup-close" onClick={this.closePopup}><img src="./images/close.svg" /></span>
          </div>
          <div className="form-group">
            <label>(Default)</label>
          </div>
          <div className="mail-type">
            <div className="custom-checkbox clearfix">
              <label class="checkbox-wrap">Create columns and rows
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="checkbox-wrap">Current filters
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <span className="common-btn">Update</span>
        </div>
      </div>
    }
    return (
      <div>{mailData}</div>
    )
  }
}

export default EnquirePopup;