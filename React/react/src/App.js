import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Switch,NavLink,HashRouter,Route} from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Jobs from './Jobs';


class App extends React.Component{
  render() {
    return(
      <HashRouter>
        <div>
          <div>
            <h1>assignment8</h1>
            <ul className = 'header'>
              <li><NavLink to = "/">Home</NavLink></li>
              <li><NavLink to = "/AboutUs">About US</NavLink></li>
              <li><NavLink to = "/Jobs">Jobs</NavLink></li>
              <li><NavLink to = "/ContactUs">Contact</NavLink></li>
            </ul>
          </div>
          <div className = 'content'>
            <Switch>
              <Route exact path = '/' component = {Home}></Route>
              <Route exact path = '/Jobs' component = {Jobs}></Route>
              <Route exact path = '/AboutUs' component = {AboutUs}></Route>
              <Route exact path = '/ContactUs' component = {ContactUs}></Route>
            </Switch>
          </div>
        </div>
      </HashRouter>
    )
  }
}


export default App;
