
import React,{useState,useEffect} from 'react';
import  {Modal,Container,Button} from 'react-bootstrap';
import  NoteService from '../Service/NoteService';
import   '../Css/CreateNot.scss';


export default function CustomDialog(props) {

    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');


    const clear=()=>{
        setTitle('');
        setDescription();
    }

    useEffect(()=>{
        setDescription(props.notes.description);
        setTitle(props.notes.title);
    },[props.notes.description,props.notes.title]);
    const updateNotes=()=>{        
        const data={
            "noteId": props.notes.id,
            "title": title,
            "description": description
        }
        NoteService.UpdateNotes(data).then(response=>{
            console.log(response);
            clear();
            props.GetNotes();
        }).catch(error=>{
            console.log(error);
        })
    }
    return (
      <Modal className="modal" {...props} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Notes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
                <input
                className="create-note"
                type="text"
                value={title}
                placeholder="Title"  
                onChange={(e)=>{setTitle(e.target.value)}}          
                />
                <input
                className="create-note"
                type="text"
                value={description}
                placeholder="Discription"  
                onChange={(e)=>{setDescription(e.target.value)}}                   
                />
          </Container>
        </Modal.Body> 
        <Modal.Footer>
            <Button onClick={()=>{updateNotes();props.onHide()}}>Update</Button>
        </Modal.Footer>    
      </Modal>
    );
  }
  