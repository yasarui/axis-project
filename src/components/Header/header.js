import React,{Component} from 'react';
import './header.scss';

class Header extends Component {
  constructor(props){
    super(props);
    this.props.callbackFromHeader(false);
  }

  showMenu = () => {
    this.props.callbackFromHeader(true);
  }
  
  render() {
    return (
        <header>
           <div className="header-inner">
             <div onClick={this.showMenu} className="mobile-menu">
               <span></span>
               <span></span>
               <span></span>
             </div>
              <div className="logo">
                 <img src="./images/logo-white.png" />
              </div>
              <div className="white-section">

              </div>
           </div>
        </header>
    )
  }
}

export default Header;