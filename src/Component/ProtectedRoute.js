import {Route,Redirect} from 'react-router-dom';
import React from 'react';

 function  ProtectedRoute (props){
    
    if(!(localStorage.getItem("Token") === null))
    {
        return(
            <Route  path={props.path}  exact={props.exact} component={props.component} />
       );    
    }
    if(localStorage.getItem("Token") === null)        
    {
        return(<Redirect  to="/"  />);
    }
    
    
 } 

export  default  ProtectedRoute;