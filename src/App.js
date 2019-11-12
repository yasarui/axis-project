import React,{Fragment} from 'react';
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Maker from './components/Layout/Maker';
import Checker from './components/Layout/Checker';

const App = () => {
   return(
    <Router>
    <div className="whole-wrapper">
        <Header />
        <Switch>
           <Route path="/" exact component={Maker} />
           <Route path="/checker" component={Checker} />
        </Switch>
    </div>
    </Router>
   )
}

export default App;