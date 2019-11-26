import React,{ Component,Fragment } from 'react';
import Modal from 'react-modal';
import './modal.scss';
import Button from '../Buttons';

class AxisModal extends Component{
    constructor(props){
       super(props)
    }
    render(){
        return(
            <Modal isOpen={this.props.isOpen} 
            className={`Axis-modal ${this.props.size}`} 
            onRequestClose={this.props.closeModal}
            overlayClassName={ (this.props.overlayColor == "black") ? 'axis-black-overlay':'axis-transparent-overlay'}>
                {this.props.children}
                <button onClick={this.props.closeModal} className="close"> <i class="fa fa-times" aria-hidden="true"></i> </button>
            </Modal>
        )
    }
}

Modal.setAppElement('#root')

export default AxisModal;