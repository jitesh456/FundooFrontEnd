import React from 'react';
import './App.css';
import CreateAccount from './Component/CreateAccount';
import Login from './Component/Login';
import ForgotPassword from './Component/ForgotPassword';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';

function App() {
  return (
    <div className="App">      
      <Router>        
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/CreateAccount" exact component={CreateAccount}/>
          <Route path="/ForgotPassword" exact component={ForgotPassword}/>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
