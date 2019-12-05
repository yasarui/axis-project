import React, { Component } from 'react';
import './enquire.css';
import EnquireFilter from '../EnquireFilter';
// import EnquireTable from '../EnquireTable';
import EnquireTable from '../EnquireTableNew';
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
        <EnquireTable />
      </div>
    )
  }
}

export default Enquire;