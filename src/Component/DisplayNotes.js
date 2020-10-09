import React  from 'react';
import {Card} from 'react-bootstrap';
import '../Css/CreateNot.scss';
import MenuBar from '../Component/MenuBar';
import CustomDropdown from '../Component/CustomDropdown';

export default function DisplayNotes(props){
   
    


        const Notes=props.notes.map(note=>
            note.isDeleted? "" :
            <Card className="notes-style">
            <div className="notes-title">{note.title}</div>
            <div className="notes-body">{note.description} </div>
            <div className="notes-body"><MenuBar className="note-menu" /> <CustomDropdown GetNotes={props.GetNotes}notesId={note.id}/></div>
            </Card>
        );

        return(
            <div className="display-notes">
                {Notes}
            </div>
        );
    
} 