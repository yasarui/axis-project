import React,{ Component } from 'react';
import './button.scss';

const Button = (props) => {   
    switch(props.variant){
        case 'outline':
           return (
            <button className="axis-button-outline"> {props.children} </button>
           )
        case 'outline-full':
            return (
            <button className="axis-button-outline-full-size"> {props.children} </button>
            )
        case 'success':
            return (
             <button className="axis-success-button"> accept </button>
            )          
        case 'warning':
           return(
            <button className="axis-warning-button"> on hold </button>
           )
        case 'danger':
           return(
             <button className="axis-danger-button"> reject </button>
           )
        case 'disable':
           return(
             <button className="axis-disable-button"> No Action </button>
           )
        case 'axis-multi-line-text':
            return(
              <button className="axis-button-multi-text"> {props.children} </button>
            )
        default :
           return(
            <button className="axis-button"> {props.children} </button>
           )
     }    
}

export default Button