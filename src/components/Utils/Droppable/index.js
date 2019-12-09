import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Droppable extends React.Component{
    drop = (e) => {
        console.log("Dropping works");
        e.preventDefault();
        const data = e.dataTransfer.getData('transfer');
        this.props.handleDrop(data);
    }
    allowDrop = (e) => {
        e.preventDefault();
    }
    render(){
       return(
          <div onDrop={this.drop} onDragOver={this.allowDrop} className={"clearfix " + (this.props.addScroll ? 'customVerticalScroll': '')}>
            {this.props.children}
          </div>
       ) 
    }
}

