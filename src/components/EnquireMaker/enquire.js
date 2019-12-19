import React, { Component } from 'react';
import './enquire.css';
import EnquireFilter from '../EnquireFilter';
import EnquireTable from '../EnquireTableNew';
import RouteSelect from '../Utils/RouteSelect';
class Enquire extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="mobile-enq-checker">
          <span  onClick={()=>this.props.setSelectedIndex(0)}><i class="fas fa-chevron-left"></i> Back</span>
          <h1 className="page-title">Transaction</h1>
        </div>
        <div className="payment-header">
           <RouteSelect />
        </div>
        <EnquireFilter />
        <EnquireTable type="maker" />
      </div>
    )
  }
}

export default Enquire;