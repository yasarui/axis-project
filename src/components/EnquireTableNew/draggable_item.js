import React from 'react';
import Draggable from '../Utils/Draggable';

export default class DraggableItem extends React.Component{
    render(){
        return(
          <Draggable data={this.props.data} index={this.props.index} >
               {this.props.children}
          </Draggable>
        )
    }
}