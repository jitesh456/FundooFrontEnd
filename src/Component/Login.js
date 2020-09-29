import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import '../Css/Login.css';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useHistory} from  'react-router-dom'


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



export default function Login () {
    const classes=useStyles();

    const history=useHistory();

    const changePage=()=>{
        history.push('/CreateAccount');
    }

    return (
        <div className="form">
        <Card className="card">
         <div style={{paddingBottom:"7%"}}>
             <img height="27px" src={require('../Assets/FundooLogo.PNG')}/>                
             <p className="sign">Sign in</p>
             <p>Use your fundoo account</p>
         </div>
         <ThemeProvider theme={theme} >
             <form className={classes.root}  noValidate autoComplete="off">            
                 <div>
                     <TextField                
                     id="filled"
                     label="Email"
                     helperText=""
                     size="small"
                     variant="outlined"
                     color="secondary"
                     />
                 </div>
                
                 <div>
                     <TextField                
                     id="filled"
                     label="Password"
                     helperText=""
                     size="small"
                     type="Password"
                     variant="outlined"
                     color="secondary"
                     />
                 </div>                     
                 <div style={{display:"flex" ,justifyContent:"space-between",margin:"9px"}}> 
                    <p className="create-account"onClick={()=>{changePage()}}>Create Account</p>                       
                     <Button variant="contained" size="medium" color="primary" 
                     style={{margin:"6px",background:"#1F45FC"}} >
                     Login
                     </Button>
                 </div>
             </form>
         </ThemeProvider>        
     </Card>
     </div>
    );
           
}

