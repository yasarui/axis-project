import React,{ Component } from 'react';
import './button.css';

const Button = (props) => {   
    switch(props.variant){
        case 'outline':
           return (
            <button className="axis-button-outline"> {props.children} </button>
           )
        default :
           return(
            <button className="axis-button"> {props.children} </button>
           )
     }    
}

export default Button