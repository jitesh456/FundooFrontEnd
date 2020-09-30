import React from 'react';
import {InputGroup,FormControl,Card,Button} from 'react-bootstrap';
export default function ForgotPassword(){

    return(
        <div className="form">
            <Card style={{ width: '25rem' }}>
            
            <Card.Body>
            <div >
                    <div>
                        <img height="27px" src={require('../Assets/FundooLogo.PNG')}/>    
                    </div>       
                    <div>     
                    <p style={{fontSize:"24px"}}>Find your Email</p>
                    </div>
                    <div>     
                    <p style={{fontSize:"16px"}}>Provide your email for recovery</p>
                    </div>
            </div>
            <InputGroup className="mb-3">
            <FormControl
            placeholder="Email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
    
            </InputGroup>  
            <div style={{display:"flex",justifyContent:"flex-end"}}>
            <Button variant="primary">Next </Button>
            </div>
            </Card.Body>
            </Card>
           
        </div>
    )

}