import React from 'react';
import PropTypes from 'prop-types';

export default class DroppableTd extends React.Component{
    drop = (e) => {
        console.log("Dropping works");
        e.preventDefault();
        const index = e.dataTransfer.getData('transfer-id');
        const type = e.dataTransfer.getData('transfer-type');
        if(type == "mandatory"){
             console.log("Mandatory");
             this.props.handleMandatory(index)
        }else if(type == "optional"){
             console.log("Optional");
             this.props.handleOptional(index)
        }
    }
    allowDrop = (e) => {
        e.preventDefault();
    }
    render(){
      return(
        <div onDrop={this.drop} onDragOver={this.allowDrop}>
              {this.props.children}
        </div>          
      )
    }
}