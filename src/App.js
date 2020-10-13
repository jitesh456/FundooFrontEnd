import React from 'react';
import './App.css';
import CreateAccount from './Component/CreateAccount';
import Login from './Component/Login';
import ForgotPassword from './Component/ForgotPassword';
import ResetPassword from './Component/ResetPassword';
import DashBoard from './Component/DashBoard';
import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';
import ProtectedRoute from './Component/ProtectedRoute';
import Trash from './Component/Trash';

function App() {
  return (
    <div className="App">           
      <Router>        
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/createaccount" exact component={CreateAccount}/>
          <Route path="/forgotpassword" exact component={ForgotPassword}/>
          <Route path="/resetpassword/:token"  component={ResetPassword}/>
          <ProtectedRoute path="/dashboard"  exact component={DashBoard}/>
          <ProtectedRoute path="/dashboard/trash"  exact component={Trash}/>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
