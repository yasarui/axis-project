import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import './style.css';

const ListStyle = {

}

export default class Draggable extends React.Component{
   constructor(props){
     super(props);
   }
   drag = (e) => {
       e.dataTransfer.setData('transfer',e.target.dataset.id);
   }
   notAllowDrop = (e) =>{
       e.stopPropagation();
   }
   render(){
     return(
        <li data-id={this.props.data} className="draggable-li" id={this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.notAllowDrop} >
          {this.props.children}
        </li>
     )
   }
}

Draggable.propTypes = {
    id:PropTypes.string,
    style:PropTypes.object,
    children:PropTypes.node
}