import React from 'react'
import CreateNote from '../Component/CreateNote';
import DisplayNotes from '../Component/DisplayNotes';
import  NoteService from '../Service/NoteService';
import '../Css/Dashboard.css';

export default class Note extends React.Component{

    constructor(props){
        super(props)
        this.state={            
            notes:[],
            isDeleted:false
        }
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

    render(){
            
        return(
            <div className="create-note-container">
                <CreateNote GetNotes={()=>{this.getNotes()}} />
                <DisplayNotes deleted={this.state.isDeleted}GetNotes={()=>{this.getNotes()}} notes={this.state.notes}/>                    
            </div> 
        );
    }
}