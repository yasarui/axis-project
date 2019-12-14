import React from 'react';
import PropTypes from 'prop-types';

export default class DraggableLi extends React.Component{
    constructor(props){
      super(props);
    }
    drag = (e) => {
        console.log("Dragging");
        e.dataTransfer.setData('transfer-id',e.target.dataset.id);
        e.dataTransfer.setData('transfer-type',e.target.dataset.type);
    }
    notAllowDrop = (e) =>{
        e.stopPropagation();
    }
    render(){
      return(
         <li draggable="true" data-id={this.props.id} data-type={this.props.type} onDragStart={this.drag} 
             onDragOver={this.notAllowDrop}>
             {this.props.children}
         </li>
      )
    }
 }
