import React from 'react';
import {Navbar,Button,Dropdown} from 'react-bootstrap';
import {ReactComponent as SearchLogo}  from '../Assets/Search.svg';
import {ReactComponent as ClearIcon}  from '../Assets/Clear.svg';

export default function customNavbar(props){

    return(
        <Navbar  variant="light" style={{border:"1px solid silver"}}>
                    <Navbar.Brand ><Button id="button" type="menu-fold" onClick={()=>{
                        this.setState({open:!this.state.open,active:!this.state.active},this.handleClick())
                    }} aria-controls="example-collapse-text"
                    aria-expanded={this.state.open} variant="light"><img height="27px" alt="MenuLogo" src={require('../Assets/Menu.png')}/> 
                    </Button></Navbar.Brand>
                    <div style={{width:"50px"}}>
                    <img height="40px" alt="MenuLogo" src={require('../Assets/Keep.png')}/>    
                    </div>
                    <div className="nav-title">
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
                                <Button onClick={()=>{localStorage.clear();window.location.reload('/')}} variant="light">Sign out</Button>
                                </div>                             
                            </div>                           
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>                    
                </Navbar>   
    );
}