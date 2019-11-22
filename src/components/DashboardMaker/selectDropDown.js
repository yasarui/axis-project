import React, { Component } from 'react';
import { BrowserRouter, Route, withRouter } from "react-router-dom";

class SelectDropDown extends Component{
   onChange = (e) => {
        this.props.history.push(`/${e.target.value}`);
   }
   render(){
     return(
        <select onChange={this.onChange} >
            <option value="checker" > Checker </option>
            <option value="/" > Maker</option>
        </select>         
     )
   }
}

export default withRouter(SelectDropDown)