import React from 'react';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../Css/Login.css';
import '../Css/register.css';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useHistory } from 'react-router';

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

    const classes = useStyles();
    const history=useHistory();
    const changePage=()=>{
        history.push('/');
    }
    return(
        <div className="register">
           <Card className="card-register">
            <div className="create-account-text">
                <div>
                    <img height="27px" src={require('../Assets/FundooLogo.PNG')}/>    
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
                                id="filled"
                                label="First Name"
                                helperText=""
                                size="small"
                                variant="outlined"
                                color="secondary"
                                
                                />
                            </div>
                            <div>
                                <TextField                
                                id="filled"
                                label="Last Name"
                                helperText=""
                                size="small"
                                variant="outlined"
                                color="secondary"
                                />
                            </div>                    
                        </div>
                        <div >
                            <div style={{display:"flex",height:"43px",paddingLeft:"2%",paddingRight:"2%"}}>                    
                                <OutlinedInput                
                                    id="outlined-adornment-weight"                                                
                                    endAdornment={<InputAdornment position="end">@gmail.com</InputAdornment>}                        
                                    placeholder="Username"
                                    size="small"
                                    lable="Username"
                                    style={{width:"100%"}}
                                    color="secondary"
                                    />                                
                            </div>
                            <p className="helperText">You can use letters,numbers & periods</p>
                        </div>
                        <div>
                            <div className="name">
                                <div>
                                    <TextField                
                                    id="filled"
                                    label="Password"
                                    helperText=""
                                    type="Password"
                                    variant="outlined"
                                    size="small"
                                    color="secondary"
                                    />
                                </div>
                                <div >
                                    <TextField                                           
                                    id="filled"
                                    label="Confirm "
                                    type="Password"
                                    size="small"                            
                                    variant="outlined"
                                    color="secondary"
                                    />
                                </div>
                                
                            </div>
                            <p className="helperText">Use 8 or more characters with a mix of letters, numbers & symbols</p>                    
                        </div>
                    </div>
                    <div style={{display:"flex" ,justifyContent:"space-between",margin:"9px",marginTop:"5%"}}>  
                            <p className="create-account"onClick={()=>{changePage()}}>Sign In</p>                
                                <Button variant="contained" size="medium" color="primary" 
                                style={{margin:"6px",background:"#1F45FC"}} >
                                Create Account
                                </Button>
                    </div>            
                </form>
            </ThemeProvider>        
        </Card>
        </div>
    );
}