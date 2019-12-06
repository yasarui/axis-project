import React, { Component } from 'react';
import './enquireFilter.scss';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import moment from 'moment';

const CalenderIcon = () => {
   return(
    <i class="fas fa-calendar-alt"></i> 
   )
}

class EnquireFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: [new Date(), new Date()],
    }
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="enquire-wrap clearfix">
        <div class="enquire-filter clearfix">
          <label>Date Range</label>
          {/* <div className="enquire-filters">
            <input type="text" placeholder="dd-mm-yyyy" />
            <span>to</span>
            <input type="text" placeholder="dd-mm-yyyy" />
          </div> */}
          <div>
             {/* <i class="fas fa-calendar-alt"></i> */}
             <DateRangePicker
              name="Yasar Arafat"
              onChange={this.onChange}
              value={this.state.date}
              calendarIcon={<CalenderIcon />}
           />
          </div>
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