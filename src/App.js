import React,{Fragment} from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import UploadPayment from './components/UploadPayment';
import CreateCustomTemplate from './components/CreateCustomTemplate';

const App = () => {
   return(
    
     <Fragment>
        <div className="whole-wrapper clearfix">
            <Header />
            <div className="main-section">
              <SideBar />
              <div className="content-section">
              <Router>
                <Route exact path="/upload-payment" component={UploadPayment} />
                <Route exact path="/custom-template" component={CreateCustomTemplate} />
              </Router>
              </div>
            </div>
        </div>
     </Fragment>
   )
}

export default App;