import {Navbar,Button,Dropdown} from 'react-bootstrap';
import React from 'react';
import '../Css/Dashboard.css';
import {ReactComponent as SearchLogo}  from '../Assets/Search.svg';
import {ReactComponent as ClearIcon}  from '../Assets/Clear.svg';
import Drawar from './Drawar';
import DrawarOpen from './DrawarOpen';
import  NoteService from '../Service/NoteService';
import CreateNote from '../Component/CreateNote';
import DisplayNotes from '../Component/DisplayNotes';




export default class DashBoard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            open:false,
            active:false,            
            drawarWidth:"drawar-width",
            notes:[]
        }
        this.wrapperRef=React.createRef();
    }

    getNotes(){
        NoteService.getNotes().then(response=>{
            console.log(response.data.data.data);
            this.setState({notes:response.data.data.data});
        })
        .catch(error=>{
            console.log(error);
        });
    }

    componentDidMount(){
       this.getNotes();
       
    }
    handleClick(){        
        !this.state.open?this.setState({drawarWidth:"drawar-width-open-relative"}):this.setState({drawarWidth:"drawar-width"});
    }

    handleMouseHover=()=>{
        
        console.log(true);
        if(!this.state.active && this.state.open===false)
        {
            this.setState({open:true})
            this.setState({drawarWidth:"drawar-width-open drawar-position"})
        }
        if(!this.state.active && this.state.open===true)
        {
            this.setState({open:false})
            this.setState({drawarWidth:"drawar-width drawar-position"})
        }
    }
    
    displayDrawar(){
        if(!this.state.open){            
            return(<Drawar />)
        }
        if(this.state.open){
            return(<DrawarOpen />)
        }
    }

    render(){      
                
        return(
            <>
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
                <div className="drawar-container">              
                <div className={this.state.drawarWidth} onMouseEnter={()=>{this.handleMouseHover()}} 
                onMouseLeave={()=>{this.handleMouseHover()}}>                
                 {this.displayDrawar()}                                                  
                </div>
                    <div className="create-note-container">
                        <CreateNote GetNotes={()=>{this.getNotes()}} />
                        <DisplayNotes GetNotes={()=>{this.getNotes()}} notes={this.state.notes}/>                    
                    </div>                  
                </div>              
            </>
        );
    }    
}