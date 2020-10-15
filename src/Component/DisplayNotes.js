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

    const menu=(data)=>{
        if(props.parent.includes("archive"))
        {
            return(<MenuBar parent={""} GetNotes={props.GetNotes} notesId={data} className="note-menu" />);
        }
        if(props.parent.includes("trash"))
        {
            return(<div className="footer-style"><DeleteForeverIcon onClick={()=>{deleteForever(data);}} /><RestoreFromTrashIcon onClick={()=>{restore(data);}}/></div>);
        }
        if(props.parent.includes("display"))
        {
          return(<MenuBar parent={"archive"} GetNotes={props.GetNotes} notesId={data} className="note-menu" />)  ; 
        }
    }
    
    
    const Notes=props.notes.map(note=>
            
        <Card className="notes-style" style={{ backgroundColor:note.color}}>
            <div onClick={()=>{handleOnClick(note)}} className="notes-title">{note.title}</div>
            <div className="notes-body">{note.description}</div>
            <div className="notes-footer">{menu(note.id)} </div>            
        </Card>
    );

    return(
        <div className="display-notes">
            {Notes}   
            <CustomDialog GetNotes={props.GetNotes} notes={currentNote} show={show} onHide={()=>{setShow(false)}}/>
        </div>
    );    
        

} 