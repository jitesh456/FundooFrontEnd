import React from 'react';
import {Dropdown} from 'react-bootstrap'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import NoteService from '../Service/NoteService';


export default function CustomDropdown(props){

    
    const DeleteNote=()=>{
        
        
        const Data=
        {
            isDeleted: true, 
            noteIdList: [props.notesId]
        }
        NoteService.DeleteNotes(Data).then(response=>{
            console.log(response);
            props.GetNotes();
        }).catch(error=>{
            console.log(error);
        })
        
    }

    return(
        <Dropdown>
            <Dropdown.Toggle style={{ padding:"0px" }} variant="light" id="dropdown-basic">
                <DragIndicatorIcon style={{ color:"#5f6368"}} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item  onClick={()=>{DeleteNote()}}>Delete</Dropdown.Item>            
            </Dropdown.Menu>
        </Dropdown>
    )
}