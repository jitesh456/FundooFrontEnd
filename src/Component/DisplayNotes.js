import React,{useState}  from 'react';
import {Card} from 'react-bootstrap';
import '../Css/CreateNot.scss';
import MenuBar from '../Component/MenuBar';
import CustomDialog from '../Component/CustomDialog';

export default function DisplayNotes(props){
   
    
    const [show,setShow]=useState(false);
    const [currentNote,setNote]=useState('');

    const handleOnClick=(object)=>{
        setShow(true)
        setNote(object);
    }

        const Notes=props.notes.map(note=>
            note.isDeleted? "" :
            <Card className="notes-style" style={{ backgroundColor:note.color}}>
            <div onClick={()=>{handleOnClick(note)}} className="notes-title">{note.title}</div>
            <div className="notes-body">{note.description} </div>
            <div className="notes-body"><MenuBar GetNotes={props.GetNotes} notesId={note.id} className="note-menu" /> </div>
            <CustomDialog GetNotes={props.GetNotes} notes={currentNote} show={show} onHide={()=>{setShow(false)}}/>
            </Card>
        );

        return(
            <div className="display-notes">
                {Notes}   
            </div>
        );
    
} 