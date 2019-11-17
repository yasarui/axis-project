import React, { Component } from 'react';
import './enquireFilter.scss';

class EnquireFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="enquire-wrap clearfix">
        <div class="enquire-filter clearfix">
          <label>Date Range</label>
          <div className="enquire-filters">
            <input type="text" placeholder="dd-mm-yyyy" />
            <span>to</span>
            <input type="text" placeholder="dd-mm-yyyy" />
            <p className="error-msg">Lorem ipsum dolor sit</p>
          </div>
          <i class="fas fa-calendar-alt"></i>
        </div>
        <div class="enquire-filter">
          <label>Account Number</label>
          <div className="enquire-filters">
            <select>
              <option>XXXX XXXX XXXX</option>
              <option>XXXX XXXX XXXX</option>
              <option>XXXX XXXX XXXX</option>
              <option>XXXX XXXX XXXX</option>
            </select>
          </div>
        </div>
        <div class="enquire-filter">
          <label>Payment Method</label>
          <div className="enquire-filters">
            <select>
              <option>epaymrnt @ Cheque</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default EnquireFilter;