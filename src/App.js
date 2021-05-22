import './App.css';
import React from 'react';
import Login from './Login';
import Forgot from './Forgot';
import Home from './Home';
import Register from './Register';
import {Route, Switch} from 'react-router-dom';
import Navbar from './Components/Navbar'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login.html" component={Login}/>
        <Route exact path="/forgot.html" component={Forgot}/>
        <Route exact path="/signup.html" component={Register}/>
      </Switch>
    </React.Fragment>
  );
}

export default App;
