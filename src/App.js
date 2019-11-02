import React,{Fragment} from 'react';
import './App.scss';
import Header from './components/Header';
import SideBar from './components/Sidebar';

const App = () => {
   return(
     <Fragment>
        <div className="whole-wrapper">
            <Header />
            <div className="main-section">
              <SideBar />
              <div className="content-section">
              </div>
            </div>
        </div>
     </Fragment>
   )
}

export default App;