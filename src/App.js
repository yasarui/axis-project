import React,{Fragment, Component} from 'react';
import './App.scss';
import Header from './components/Header';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Maker from './components/Layout/Maker';
import Checker from './components/Layout/Checker';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: false,
      isMobile: window.innerWidth <= 0
    }
  }

  callbackFromHeader = (data) => {
    this.setState({
      showMenu: data
    });
  }

  callbackFromMaker = (data) => {
    this.setState({
      showMenu: data
    });
  }

  callbackFromChecker = (data) => {
    this.setState({
      showMenu: data
    });
  }

  renderRoute(){
     if(this.state.isMobile){
        return (
           <Route path='/' render={(props) => <Checker {...props} hideMenuChecker={this.state.showMenu}
            callbackFromChecker={this.callbackFromChecker} />} />
        )
     }else{
        return <Fragment>
            <Route path='/' exact render={(props) => <Maker {...props} hideMenuMaker={this.state.showMenu} callbackFromMaker={this.callbackFromMaker} />} />
            <Route path='/checker' render={(props) => <Checker {...props} hideMenuChecker={this.state.showMenu}
            callbackFromChecker={this.callbackFromChecker} />} />
        </Fragment>
     }
  }

  render() {
    let mainRoute = '';
    if(this.state.isMobile){
      mainRoute = <div>
      </div>
    } else {
      mainRoute = <div></div>
    }
   return(
    <Router>
      <div className="whole-wrapper">
        <Header callbackFromHeader={this.callbackFromHeader} />
          <Switch>
            {this.renderRoute()};
            {/* <Route path="/" exact component={Maker} />
            <Route path="/checker" component={Checker} />  */}
          </Switch>
      </div>
    </Router>
   )
  }
}

export default App;