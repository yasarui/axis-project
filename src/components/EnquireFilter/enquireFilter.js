import React, { Component } from 'react';
import './enquireFilter.scss';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import moment from 'moment';

const CalenderIcon = () => {
   return(
    <img src="./images/calender.svg" />
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

  componentDidMount(){
     //document.getElementsByClassName('react-daterange-picker__range-divider').innerHTML = 'to';
     console.log("Component has been Mounted ",document.getElementsByClassName('react-daterange-picker__range-divider').innerHTML);
  }

  componentDidUpdate(){
    //document.getElementsByClassName('react-daterange-picker__range-divider').innerHTML = 'to';
    console.log("Component has been Mounted ",document.getElementsByClassName('react-daterange-picker__range-divider').innerHTML);
  }

  render() {
    return (
      <div className="enquire-wrap clearfix">
        <div class="enquire-filter clearfix">
          <label className='date-range-label'>Date Range</label>
          {/* <div className="enquire-filters">
            <input type="text" placeholder="dd-mm-yyyy" />
            <span>to</span>
            <input type="text" placeholder="dd-mm-yyyy" />
          </div> */}
          <div className="date-range-wrapper">
             {/* <i class="fas fa-calendar-alt"></i> */}
             <DateRangePicker
              onChange={(value) => alert('New date is: ', value)}
              format="dd-MM-yyyy"
              onChange={this.onChange}
              value={this.state.date}
              calendarIcon={<CalenderIcon />}
           />
          </div>
        </div>
        <div class="enquire-filter">
          <label>Account Number</label>
          <div className="enquire-filters">
            <div className="select-wrap">
              <select>
                <option>XXXX XXXX XXXX</option>
                <option>XXXX XXXX XXXX</option>
                <option>XXXX XXXX XXXX</option>
                <option>XXXX XXXX XXXX</option>
              </select>
            </div>
          </div>
        </div>
        <div class="enquire-filter">
          <label>Payment Method</label>
          <div className="enquire-filters">
            <div className="select-wrap">
              <select>
                <option>epaymrnt @ Cheque</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EnquireFilter;