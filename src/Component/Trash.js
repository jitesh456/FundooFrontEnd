import React from 'react'
import DisplayNotes from '../Component/DisplayNotes';
import NoteService from '../Service/NoteService';
import '../Css/Dashboard.css';

export default class Trash extends React.Component{

    constructor(props){
        super(props)
        this.state={            
            notes:[]
        }
    }

    getNotes(){
        let note=[];
        NoteService.getNotes().then(response=>{
            console.log(response.data.data.data);
            note=response.data.data.data.filter(note=>note.isDeleted);
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
                <DisplayNotes  parent={"trash"} GetNotes={()=>{this.getNotes()}} notes={this.state.notes}/>  
            </div> 
        );
    }
}