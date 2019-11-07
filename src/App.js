import React,{Fragment} from 'react';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/Sidebar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Initiate from './components/Initiate';
import Enquire from './components/Enquire';


const App = () => {
   return(
     <Router>
        <div className="whole-wrapper">
            <Header />
            <div className="main-section">
              <SideBar />
              <div className="content-section">
                 <Switch>
                     <Route path="/"  component={Dashboard} exact />
                     <Route path="/initiate" component={Initiate} />
                     <Route path="/enquire"  component={Enquire} /> 
                 </Switch>
              </div>
            </div>
        </div>
     </Router>
   )
}

export default App;