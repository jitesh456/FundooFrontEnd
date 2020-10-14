import React,{useState}  from 'react';
import {Card} from 'react-bootstrap';
import '../Css/CreateNot.scss';
import MenuBar from '../Component/MenuBar';
import CustomDialog from '../Component/CustomDialog';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import NoteService from '../Service/NoteService';

export default function DisplayNotes(props){
   
    
    const [show,setShow]=useState(false);
    const [currentNote,setNote]=useState('');

    const handleOnClick=(object)=>{
        setShow(true)
        setNote(object);
    }

    const restore=(id)=>{
        console.log(id)
        const Data={
            isDeleted:false,
            noteIdList:[id]
        }
        NoteService.restoreNote(Data).then(response=>{
            console.log(response);
            props.GetNotes();
        }).catch(error=>{
            console.log(error);
        })
    }
    const deleteForever=(id)=>{
        console.log(id)
        const Data={
            noteIdList:[id]
        }
        NoteService.DeleteForever(Data).then(response=>{
            console.log(response);
            props.GetNotes();
        }).catch(error=>{
            console.log(error);
        })
    }

        const Notes=props.notes.map(note=>
            note.isDeleted? "" :
            <Card className="notes-style" style={{ backgroundColor:note.color}}>
            <div onClick={()=>{handleOnClick(note)}} className="notes-title">{note.title}</div>
            <div className="notes-body">{note.description}</div>
            <div className="notes-footer"><MenuBar GetNotes={props.GetNotes} notesId={note.id} className="note-menu" /> </div>            
            </Card>
        );
        const deletedNotes=props.notes.map(note=>
            note.isDeleted? 
            <Card className="notes-style" style={{ backgroundColor:note.color}}>
            <div  className="notes-title">{note.title}</div>
            <div className="notes-body">{note.description}</div>
            <div className="notes-footer"><div className="footer-style"><DeleteForeverIcon onClick={()=>{deleteForever(note.id);}} /><RestoreFromTrashIcon onClick={()=>{restore(note.id);}}/></div></div>            
            </Card> : " "
        );
        if(props.deleted){            
            return(
                <div className="display-notes">
                {deletedNotes}                   
            </div>
            )
        }
        else
        {
            return(
                <div className="display-notes">
                    {Notes}   
                    <CustomDialog GetNotes={props.GetNotes} notes={currentNote} show={show} onHide={()=>{setShow(false)}}/>
                </div>
            );
        }  

} 