import React,{Fragment} from 'react';
import './success-failure-transactions.scss';

const SuccessFailureTransactions = () => {
    return (
       <Fragment>
            <div className="transactions-details" >
                <span className="success-count" > <i class="fas fa-check-circle"></i> XXXX </span>
                <span className="failure-count" > <i class="fas fa-exclamation-triangle"></i> XXX </span>
            </div>
            <a class="view-details" href="#"> View Transactions </a>            
       </Fragment>
    )
}

export default SuccessFailureTransactions;