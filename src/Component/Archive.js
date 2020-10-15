import React from 'react'
import DisplayNotes from '../Component/DisplayNotes';
import NoteService from '../Service/NoteService';
import '../Css/Dashboard.css';

export default class Archive extends React.Component{

    constructor(props){
        super(props)
        this.state={            
            notes:[],
            isDeleted:true
        }
    }

    getNotes(){
        let note=[];
        NoteService.getNotes().then(response=>{
            console.log(response.data.data.data);
            note=response.data.data.data.filter(note=>note.isArchived);
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
                <DisplayNotes parent={"archive"} GetNotes={()=>{this.getNotes()}} notes={this.state.notes}/>  
            </div> 
        );
    }
}