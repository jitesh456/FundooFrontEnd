import React,{useState} from 'react';
import {InputGroup,FormControl,Card,Button,Form} from 'react-bootstrap';
export default function ResetPassword(){

    const passwordPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@|.|!|#])(?=.*[a-zA-Z]).{8,}$/;    
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');    
    const [passwordErrorStatus, setPasswordErrorStatus] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [confirmPasswordErrorStatus, setConfirmPasswordErrorStatus] = useState(true);

    const handleSubmit = (event) => {
      
      if(!passwordPattern.test(password)){
          setPasswordError('Not a valid Password');
          setPasswordErrorStatus(false);  
          event.preventDefault();
          event.stopPropagation();        
      }
      if(confirmPassword !== password || !passwordPattern.test(password) ){
        setConfirmPasswordError('confirm password must be same as password');
        setConfirmPasswordErrorStatus(false);  
        event.preventDefault();
        event.stopPropagation();        
     }
     if(passwordPattern.test(password)){
        setPasswordError('');
        setPasswordErrorStatus(true);                
    }
    if(confirmPassword === password && passwordPattern.test(password) ){
      setConfirmPasswordError('');
      setConfirmPasswordErrorStatus(true);  
             
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
           
        </div>
    )

}