import React,{useState} from 'react';
import {InputGroup,FormControl,Card,Button,Form} from 'react-bootstrap';
import DataService from '../Service/DataService'
import CustomToast from './CustomToast'

export default function ResetPassword(props){

    const passwordPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@|.|!|#])(?=.*[a-zA-Z]).{8,}$/;    
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');    
    const [passwordErrorStatus, setPasswordErrorStatus] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [confirmPasswordErrorStatus, setConfirmPasswordErrorStatus] = useState(true);
    const[toastMessage,setToastMessage]=useState('');
    const[toastDisplay,setToastDisplay]=useState(false);

    const validate=()=>{
        var result =true;
        if(!passwordPattern.test(password)){
            setPasswordError('Not a valid Password');
            setPasswordErrorStatus(false);  
            result=false;     
        }
        if(confirmPassword !== password || !passwordPattern.test(password) ){
          setConfirmPasswordError('user is not authorized');
          setConfirmPasswordErrorStatus(false);  
                 
          result=false;
       }
       return result;
    }

    const reset=()=>{
        const data={
            "newPassword":password
        }
        DataService.reset(data).then(response=>{
            console.log(response.data.message);
            setToastMessage(response.data.message)
            setToastDisplay(true);
        }).catch(error=>{
            console.log(error);
            setToastMessage('User is unauthorized');
            setToastDisplay(true);
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
    let token=props.match.params.token;
    localStorage.setItem('token',token);

     var result=validate();
     if(result){
        setPasswordError('');
        setPasswordErrorStatus(true);                    
        setConfirmPasswordError('');
        setConfirmPasswordErrorStatus(true);  
        reset(); 
   }
   
    
    
    
   
    };

    return(
        <div className="form">
            <Card style={{ width: '25rem' }}>
            
            <Card.Body>
            <div style={{height:"120px"}}>
                    <div>
                        <img height="27px" alt="fandooLogo" src={require('../Assets/FundooLogo.PNG')}/>    
                    </div>       
                    <div>     
                    <p style={{fontSize:"24px",margin:"0px"}}>Account Recovery</p>                       
                    <p style={{fontSize:"16px"}}>Use Your Fundoo Account</p>
                    </div>
            </div>
            <Form noValidate  onSubmit={handleSubmit}>
            <InputGroup className="mb-3" controlId="validationCustom01">            
            <FormControl
            placeholder="Password"
            type="Password"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={e=>{setPassword(e.target.value)}}            
            className={passwordErrorStatus ? "form-control " : "form-control is-invalid"}
            required
            />
            <Form.Control.Feedback type="invalid">
                {passwordError}
            </Form.Control.Feedback>
            </InputGroup>
            <InputGroup className="mb-3" controlId="validationCustom01">
            <FormControl
            placeholder="Confirm Password"
            type="Password"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={e=>{setConfirmPassword(e.target.value)}}    
            className={confirmPasswordErrorStatus ? "form-control " : "form-control is-invalid"}     
            required
            />
            <Form.Control.Feedback type="invalid">
              {confirmPasswordError}
            </Form.Control.Feedback>
            </InputGroup>  
            <div style={{display:"flex",justifyContent:"flex-end"}}>
            <Button variant="primary" type="submit"> Next </Button>            
            </div>
            </Form>
            </Card.Body>
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
    )

}