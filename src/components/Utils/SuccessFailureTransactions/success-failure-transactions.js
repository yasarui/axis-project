import React,{Fragment} from 'react';
import './success-failure-transactions.scss';

const SuccessFailureTransactions = (props) => {
    const handleClick = (e) => {
        console.log("Link has been clicked");
        e.preventDefault();
        props.handleClick();
    }
    return (
       <Fragment>
            <div className="transactions-details" >
                <span className="success-count" > <i class="fas fa-check-circle"></i> XXXX </span>
                <span className="failure-count" > <i class="fas fa-exclamation-triangle"></i> XXX </span>
            </div>
            <a class="view-details" onClick={(e)=>handleClick(e)} href="#"> View Details </a>            
       </Fragment>
    )
}

export default SuccessFailureTransactions;