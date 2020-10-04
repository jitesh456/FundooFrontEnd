import React from 'react';
import './App.css';
import CreateAccount from './Component/CreateAccount';
import Login from './Component/Login';
import ForgotPassword from './Component/ForgotPassword';
import ResetPassword from './Component/ResetPassword';
import DashBoard from './Component/DashBoard';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';

function App() {
  return (
    <div className="App">      
      <Router>        
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/createaccount" exact component={CreateAccount}/>
          <Route path="/forgotpassword" exact component={ForgotPassword}/>
          <Route path="/resetpassword/:token"  component={ResetPassword}/>
          <Route path="/dashboard"  exact component={DashBoard}/>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
