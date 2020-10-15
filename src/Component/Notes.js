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
        }
    }

    getNotes(){
        let note=[]
        NoteService.getNotes().then(response=>{
            console.log(response.data.data.data);
            note=response.data.data.data.filter(note=>note.isDeleted===false && note.isArchived===false );
            this.setState({notes:note});
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
                <DisplayNotes parent={"display"} GetNotes={()=>{this.getNotes()}} notes={this.state.notes}/>                    
            </div> 
        );
    }
}