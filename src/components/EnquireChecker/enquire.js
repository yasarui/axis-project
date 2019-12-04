import React, { Component } from 'react';
import './enquire.css';
import EnquireFilter from '../EnquireFilter';
import EnquireTable from '../EnquireTable';
import RouteSelect from '../Utils/RouteSelect'

class Enquire extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="payment-header">
          <RouteSelect />
        </div>
        <EnquireFilter />
        <EnquireTable pageType="checker" tabType="standard"/>
        <EnquireTable pageType="checker" tabType="custom"/>
        <EnquireTable pageType="checker" tabType="custom" selectedFilter="2" />
        <EnquireTable pageType="checker" tabType="custom" selectedFilter="3" />
      </div>
    )
  }
}

export default Enquire;