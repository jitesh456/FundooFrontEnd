import React from 'react';
import {InputGroup,FormControl,Card,Button} from 'react-bootstrap';
export default function ResetPassword(){

    return(
        <div className="form">
            <Card style={{ width: '25rem' }}>
            
            <Card.Body>
            <div style={{height:"120px"}}>
                    <div>
                        <img height="27px" src={require('../Assets/FundooLogo.PNG')}/>    
                    </div>       
                    <div>     
                    <p style={{fontSize:"24px",margin:"0px"}}>Account Recovery</p>                       
                    <p style={{fontSize:"16px"}}>Use Your Fundoo Account</p>
                    </div>
            </div>
            <InputGroup className="mb-3">
            <FormControl
            placeholder="Password"
            type="Password"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
    
            </InputGroup>
            <InputGroup className="mb-3">
            <FormControl
            placeholder="Confirm Password"
            type="Password"
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