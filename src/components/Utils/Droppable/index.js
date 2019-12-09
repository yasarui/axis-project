import React from 'react';
import PropTypes from 'prop-types'

export default class Draggable extends React.Component{
   constructor(props){
     super(props);
   }
   drag = (e) => {
       e.dataTransfer.setData('transfer',e.target.id);
   }
   notAllowDrop = (e) =>{
       e.stopPropagation();
   }
   render(){
     return(
        <div id={this.props.id} draggable="true" onDragStart={this.drag} onDragOver={this.notAllowDrop} >
          {this.props.children}
        </div>
     )
   }
}

Draggable.propTypes = {
    id:PropTypes.string,
    style:PropTypes.object,
    children:PropTypes.node
}