import React,{ Component,Fragment } from 'react';
import Modal from 'react-modal';
import './style.css';

class AxisModal extends Component{
    constructor(props){
        super();
        this.state = {
            modalIsOpen:false
        }
    }
    openModal(){
        this.setState({modalIsOpen:true})
    }
    closeModal(){
        this.setState({modalIsOpen:false})
    }
    render(){
       return(
         <Fragment>
             <button onClick={()=>this.openModal()} > Open Modal </button>
             <h1> I am a Modal Component </h1>
             <Modal isOpen={this.state.modalIsOpen} className="Axis-modal Small" >
                 <button className="close" onClick={()=>this.closeModal()} > <i class="fas fa-times"></i> </button>
                 <h1> I am a Modal </h1>
             </Modal>
         </Fragment>
       ) 
    }
}

export default AxisModal;