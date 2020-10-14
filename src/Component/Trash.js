import React from 'react'
import DisplayNotes from '../Component/DisplayNotes';
import NoteService from '../Service/NoteService';
import '../Css/Dashboard.css';

export default class Trash extends React.Component{

    constructor(props){
        super(props)
        this.state={            
            notes:[],
            isDeleted:true
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
                <DisplayNotes deleted={this.state.isDeleted} GetNotes={()=>{this.getNotes()}} notes={this.state.notes}/> 
                
            </div> 
        );
    }
}