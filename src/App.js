import React from 'react';
import './App.css';
import CreateAccount from './Component/CreateAccount';
import Login from './Component/Login';
import ForgotPassword from './Component/ForgotPassword';
import ResetPassword from './Component/ResetPassword';
import DashBoard from './Component/DashBoard';
import {BrowserRouter as Router,Route,Switch}from 'react-router-dom';
import ProtectedRoute from './Component/ProtectedRoute';
import history from './Component/history'



function App() {

  
  return (
    <div className="App">           
      <Router history={history}>        
          <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/createaccount" exact component={CreateAccount}/>
          <Route path="/forgotpassword" exact component={ForgotPassword}/>
          <Route path="/resetpassword/:token"  component={ResetPassword}/>
          <ProtectedRoute path="/dashboard"   component={DashBoard}/>          
          {/*Child routing is on dashboard.js */}
          </Switch> 
      </Router>
    </div>
  );
}

export default App;
