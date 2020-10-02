import React,{useState} from 'react';
import {InputGroup,FormControl,Card,Button,Form} from 'react-bootstrap';
import DataService from '../Service/DataService';

export default function ForgotPassword(){

    var emailPattern = /^[a-zA-Z]{3,}([-|+|.|_]?[a-zA-Z0-9]+)?[@]{1}[A-Za-z0-9]+[.]{1}[a-zA-Z]{2,4}([.]{1}[a-zA-Z]+)?$/;    
    const [email,setEmail]=useState('');
    const [emailError,setEmailError]=useState('');
    const [emailErrorStatus,setEmailErrorStatus]=useState(true);

    const forgotPassword=()=>{
        const Data={"email":email};
        DataService.resetPassword(Data).then(response=>{
            console.log(response.Data);
        }).catch(error=>{
            console.log(error);
        })
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!emailPattern.test(email))
        {
            setEmailError('Invaild Email Formate');
            setEmailErrorStatus(false);
            event.preventDefault();
            event.stopPropagation();
        }
        if(emailPattern.test(email))
        {
            setEmailError('');
            setEmailErrorStatus(true);    
            forgotPassword();       
        }

    }
    return(
        <div className="form">
            <Card style={{ width: '25rem' }}>
            
            <Card.Body>
            <div >
                    <div>
                        <img height="27px" alt="fandooLogo" src={require('../Assets/FundooLogo.PNG')}/>    
                    </div>       
                    <div>     
                    <p style={{fontSize:"24px"}}>Find your Email</p>
                    </div>
                    <div>     
                    <p style={{fontSize:"16px"}}>Provide your email for recovery</p>
                    </div>
            </div>
            <Form noValidate  onSubmit={handleSubmit}>
            <InputGroup className="mb-3" controlId="validationCustom01">
            
            <FormControl
            placeholder="Email"
            type="email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={e=>{setEmail(e.target.value)}}            
            className={emailErrorStatus ? "form-control " : "form-control is-invalid"}
            required
            />
            <Form.Control.Feedback type="invalid">
                {emailError}
            </Form.Control.Feedback>
            </InputGroup>
            <div style={{display:"flex",justifyContent:"flex-end"}}>
            <Button variant="primary" type="submit">Next </Button>
            </div>
            </Form>
            </Card.Body>
            </Card>
           
        </div>
    )

}