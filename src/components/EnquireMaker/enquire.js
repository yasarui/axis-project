import React, { Component } from 'react';
import './enquire.css';
import EnquireFilter from '../EnquireFilter';
import EnquireTable from '../EnquireTable';

class Enquire extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="payment-header">
          <div className="viewing">
            Viewing as
            <select>
              <option>Marker</option>
              <option>Checker</option>
            </select>
          </div>
        </div>
        <EnquireFilter />
        <EnquireTable pageType="maker" tabType="standard"/>
        <EnquireTable pageType="maker" tabType="custom"/>
        <EnquireTable pageType="maker" tabType="custom" selectedFilter="2" />
        <EnquireTable pageType="maker" tabType="custom" selectedFilter="3" />
      </div>
    )
  }
}

export default Enquire;