import {Navbar,Button,Dropdown,Card} from 'react-bootstrap';
import React from 'react';
import '../Css/Dashboard.css'
import {ReactComponent as SearchLogo}  from '../Assets/Search.svg';
import {ReactComponent as ClearIcon}  from '../Assets/Clear.svg';
export default class DashBoard extends React.Component{

    render(){        
        return(
            <>
                <Navbar bg="white" variant="light" style={{border:"1px solid silver"}}>
                    <Navbar.Brand ><Button id="button" variant="light"><img height="27px" alt="MenuLogo" src={require('../Assets/Menu.png')}/> 
                    </Button></Navbar.Brand>
                    <div style={{width:"50px"}}>
                    <img height="40px" alt="MenuLogo" src={require('../Assets/Keep.png')}/>    
                    </div>
                    <div style={{width:"15%",paddingLeft:"1%",display:"flex"}}>
                    <span style={{fontSize:"22px"}}>Fundoo</span>
                    </div>
                    <div className="search-bar">
                        <SearchLogo className="search-logo"/>
                        <input className="search-text" type="text" placeholder="Search"/>
                        <ClearIcon className="clear"/>               
                    </div>
                    <div style={{display:"flex",width:"40%",justifyContent:"flex-end"}}>
                    <Dropdown>
                        <Dropdown.Toggle variant="light" className="profile-button">
                        <img height="40px" alt="MenuLogo" src={require('../Assets/profile.png')}/>    
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="profile-menu">
                            <div className="profile-details">
                                <div className="profile-image">
                                <img height="100%" alt="MenuLogo" src={require('../Assets/profile.png')}/>    
                                </div>
                                <div>
                                <span style={{fontFamily:"sans-serif",fontSize:"16px",fontWeight:"bold"}}>Jitesh Dubey</span>
                                </div>
                                <div>
                                <span style={{fontFamily:"inherit",fontSize:"14px",color:"grey"}}>jitesh0dubey@gmail.com</span>
                                </div>
                                <div className="sign-out">
                                <Button variant="light">Sign out</Button>
                                </div> 
                            </div>                           
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                </Navbar>            
            </>
        );
    }    
}