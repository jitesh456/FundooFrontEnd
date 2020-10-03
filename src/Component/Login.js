import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../Css/Login.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {useHistory} from  'react-router-dom'
import DataService from '../Service/DataService';
import CustomToast from './CustomToast'


const theme = createMuiTheme({
    palette: {        
        secondary: {
            main: '#1a73e8',
        },
    },
});

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),     
      width:'93%', 
      color:"#1F45FC",
    },
  },
}));



export default function Login () {
    
    var emailPattern = /^[a-zA-Z]{3,}([-|+|.|_]?[a-zA-Z0-9]+)?[@]{1}[A-Za-z0-9]+[.]{1}[a-zA-Z]{2,4}([.]{1}[a-zA-Z]+)?$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    const classes=useStyles();
    const history=useHistory();
    const[emailId,setEmailId]=useState('');
    const[password,setPassword]=useState('');
    const[emailError,setEmailError]=useState('');
    const[passwordError,setPasswordError]=useState('');
    const[emailState,setEmailState]=useState(false);
    const[passwordState,setPasswordState]=useState(false);
    const[toastMessage,setToastMessage]=useState('');
    const[toastDisplay,setToastDisplay]=useState(false);

    const changePage=()=>{
        history.push('/createAccount');
    }

    const validate=()=>{
        var result=true;

        if(!emailPattern.test(emailId)){
            setEmailError('plz provide valid email');
            setEmailState(true);
            result=false;
        }
        if(!passwordPattern.test(password)){
            setPasswordError('plz provide valid password');
            setPasswordState(true);
            result=false;
        }
        return result
    }
    const login=()=>{
        var data={            
            "email":emailId,
            "password":password,
            "cartId":""
        }
        DataService.login(data).then(response=>{
            console.log(response.data);
            setToastDisplay(true);
            setToastMessage("Login Success");
        }).catch(error=>{
            console.log(error);
            setToastDisplay(true);
            setToastMessage("Login Failed");
        });
    }
    const handleSubmit=()=>{
        console.log(emailId,password) 
        var result=validate();               
        if(result){
            setEmailError('');
            setEmailState(false);
            setPasswordError('');
            setPasswordState(false)
            login();
        }        
    }

    return (
        <div className="form">
        <Card className="card">
         <div style={{paddingBottom:"7%"}}>
             <img height="27px" alt="fandooLogo" src={require('../Assets/FundooLogo.PNG')}/>                
             <p className="sign">Sign in</p>
             <p>Use your fundoo account</p>
         </div>
         <ThemeProvider theme={theme} >
             <form className={classes.root}  noValidate autoComplete="off">   
             <div className="Login-form">         
                 <div>
                     <TextField 
                     error={emailState}               
                     id="filled"
                     label="Email"
                     name="emai"                     
                     helperText={emailError}
                     size="small"
                     variant="outlined"
                     onChange={e=>setEmailId(e.target.value)}
                     color="secondary"
                     />
                 </div>
                
                 <div>
                     <TextField                
                     id="filled"
                     error={passwordState}
                     label="Password"
                     helperText={passwordError}
                     onChange={e=>setPassword(e.target.value)}
                     size="small"
                     type="Password"
                     variant="outlined"
                     color="secondary"
                     />
                 </div>      
                 </div>
                 <p className="forgot-Password" onClick={()=>{history.push("/forgotpassword")}}>Forgot Password?</p>               
                 <div style={{display:"flex" ,justifyContent:"space-between",margin:"9px"}}> 
                    <p className="create-account"onClick={()=>{changePage()}}>Create Account</p>                       
                     <Button variant="contained" size="medium" color="primary" 
                     style={{margin:"6px",background:"#1F45FC",outline:"none"}}
                     onClick={()=>{handleSubmit()}} >
                     Login
                     </Button>
                 </div>
             </form>             
         </ThemeProvider>        
     </Card>
           <div
                style={{
                position: 'absolute',
                top: 3,
                right: 0,
                width:"500px"
                }}
            >
             <CustomToast  message={toastMessage} display={toastDisplay}/>
            </div>
     </div>
    );
           
}

