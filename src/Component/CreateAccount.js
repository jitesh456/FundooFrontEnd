import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../Css/Login.css';
import '../Css/register.css';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useHistory } from 'react-router';
import DataService from '../Service/DataService';
import CustomToast from './CustomToast'

const theme = createMuiTheme({
    palette: {        
        secondary: {
            main: '#1F45FC',
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

export default function CreateAccount(){

    const namePattern = /[a-zA-Z]{1,}$/;
    const userNamePattern=/^[a-zA-Z]{3,}([-|+|.|_]?[a-zA-Z0-9]+)?$/;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@|.|!|#])(?=.*[a-zA-Z]).{8,}$/;
    
    const classes = useStyles();
    const history=useHistory();
    const [firstName,setFirstName]=useState('');
    const [firstNameErrorStatus,setFirstNameErrorStatus]=useState(false);
    const [firstNameError,setFirstNameError]=useState('');
    const [lastName,setLastName]=useState('');
    const [lastNameErrorStatus,setLastNameErrorStatus]=useState(false);
    const [lastNameError,setLastNameError]=useState('');
    const [userName,setEmail]=useState('');
    const [userNameErrorStatus,setUsernameErrorStatus]=useState(false);
    const [userNameError,setUsernameError]=useState('');
    const [password,setPassword]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [passwordErrorState,setPasswordErrorState]=useState(false);
    const [confirmPassword,setConfirmPassword]=useState('');
    const [confirmPasswordError,setConfirmPasswordError]=useState('');
    const [confirmPasswordErrorState,setConfirmPasswordErrorState]=useState('');
    const[toastMessage,setToastMessage]=useState('');
    const[toastDisplay,setToastDisplay]=useState(false);

    const createAccount=()=>{
        const Data=
            {
                "firstName": firstName,
                "lastName": lastName, 
                "phoneNumber": "",
                "imageUrl": "",
                "password":password,
                "service": "advance",
                "email": userName+"@gmail.com",
                "cartId": ""
            }        
        DataService.addUser(Data).then(response=>{
            console.log(response);
            setToastMessage(response.data.data.message)
            setToastDisplay(true);
        }).catch(error=>{
            console.log(error);        
            setToastDisplay(true);
        });
        
        
    }
    const validate=()=>{
        var result=true;
        if(!namePattern.test(firstName)){
            setFirstNameError('Name must not include number')
            setFirstNameErrorStatus(true);
            result=false
        }
        if(!namePattern.test(lastName)){
            setLastNameError('Name must not include number')
            setLastNameErrorStatus(true);
            result =false;
        }
        if(!userNamePattern.test(userName)){
            setUsernameError('User Name Must Not Start with number')
            setUsernameErrorStatus(true);
            result=false;
        }
        if(!passwordPattern.test(password)){
            setPasswordError('Invalid Password')
            setPasswordErrorState(true);
            result=false;
        }
        if(confirmPassword!==password || confirmPassword===""){
            setConfirmPasswordError('Confirm password and password must be same')
            setConfirmPasswordErrorState(true);
            result=false;
        }
        return result        
    }

    const handleSubmit=()=>{
        console.log(firstName);
        const result=validate();
        
        if(result){
            setFirstNameError('')
            setFirstNameErrorStatus(false); 
            setLastNameError('')
            setLastNameErrorStatus(false);
            setUsernameError('')
            setUsernameErrorStatus(false);
            setPasswordError('')
            setPasswordErrorState(false);
            setConfirmPasswordError('')
            setConfirmPasswordErrorState(false);
            createAccount();
        }
                  
    }
    const changePage=()=>{
        history.push('/');
    }
    return(
        <div className="register">
           <Card className="card-register">
            <div className="create-account-text">
                <div>
                    <img height="27px" alt="fandooLogo" src={require('../Assets/FundooLogo.PNG')}/>    
                </div>       
                <div>     
                 <p className="register-text">Create your Fandoo Account</p>
                 </div>
            </div>
            <ThemeProvider theme={theme} >
                <form className={classes.root}  noValidate autoComplete="off">  
                    <div className="input-field">
                        <div className="name">
                            <div>
                                <TextField   
                                error={firstNameErrorStatus}             
                                id="filled"
                                label="First Name"
                                helperText={firstNameError}
                                size="small"
                                variant="outlined"
                                color="secondary"
                                onChange={e=>{setFirstName(e.target.value)}}
                                />
                            </div>
                            <div>
                                <TextField               
                                error={lastNameErrorStatus} 
                                id="filled"
                                label="Last Name"
                                helperText={lastNameError}
                                size="small"
                                variant="outlined"
                                color="secondary"
                                onChange={e=>{setLastName(e.target.value)}}
                                />
                            </div>                    
                        </div>
                        <div >
                            <div className="email-field">                    
                                <OutlinedInput   
                                    error={userNameErrorStatus}             
                                    id="outlined-adornment-weight"                                                
                                    helperText={userNameError}
                                    endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}                        
                                    placeholder="Username"                                    
                                    size="small"
                                    lable="Username"
                                    fullWidth="true"
                                    color="secondary"
                                    onChange={e=>{setEmail(e.target.value)}}
                                    />                                
                            
                            </div>
                            <p className="helperTextForError">{userNameError}</p>
                            <p className="helperText">You can use letters,numbers & periods</p>
                        </div>
                        <div>
                            <div className="name">
                                <div>
                                    <TextField                
                                    id="filled"
                                    error={passwordErrorState}
                                    label="Password"                                    
                                    type="Password"
                                    variant="outlined"
                                    size="small"
                                    helperText={passwordError}
                                    color="secondary"
                                    onChange={e=>{setPassword(e.target.value)}}
                                    />
                                </div>
                                <div >
                                    <TextField                                           
                                    id="filled"
                                    error={confirmPasswordErrorState}
                                    label="Confirm "
                                    type="Password"
                                    size="small" 
                                    helperText={confirmPasswordError}                           
                                    variant="outlined"
                                    color="secondary"
                                    onChange={e=>{setConfirmPassword(e.target.value)}}
                                    />
                                </div>                                
                            </div>
                            <p className="helperText">Use 8 or more characters with a mix of letters, numbers & symbols</p>                    
                        </div>
                    </div>
                    <div style={{display:"flex" ,justifyContent:"space-between",margin:"9px",marginTop:"5%"}}>  
                            <p className="create-account"onClick={()=>{changePage()}}>Sign In</p>                
                            <Button variant="contained" size="medium" color="primary" 
                                style={{margin:"6px",background:"#1F45FC",outline:"none"}}
                                onClick={()=>{handleSubmit()}}
                                >
                                Create Account
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
             <CustomToast onClose={()=>{setToastDisplay(false)}} message={toastMessage} display={toastDisplay}/>
            </div>
        </div>
    );
}