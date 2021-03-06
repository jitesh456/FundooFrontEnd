import React from 'react';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import '../Css/CreateNot.scss';
import {Dropdown} from 'react-bootstrap';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import {ReactComponent as ArchiveIcon} from '../Assets/Archive.svg';
import NotesService from '../Service/NoteService';
import CustomDropdown from '../Component/CustomDropdown';
import UnarchiveIcon from '@material-ui/icons/Unarchive';

export default function Menubar(props){

    const changeColor=(color)=>{
        console.log(props.notes);
        const Data={
            color:color,
            noteIdList: [props.notesId]
        }
        NotesService.changeColor(Data).then(response=>{
            console.log(response)
            props.GetNotes();
        }).catch(error=>{
            console.log(error);
        });
        
    }
    const archive=(flag)=>{
        console.log(props.notes);
        const Data={
            isArchived: flag,
            noteIdList: [props.notesId]
        }
        NotesService.Archive(Data).then(response=>{
            console.log(response)
            props.GetNotes();
        }).catch(error=>{
            console.log(error);
        });
        
    }

    const archiveIcon=()=>{
        if(props.parent.includes("archive")){
            return(<ArchiveIcon style={{fill:"#5f6368"}}className="icon-design" onClick={()=>{archive(true)}} />)
        }
        else
        {
            return(<UnarchiveIcon style={{fill:"#5f6368"}}className="icon-design" onClick={()=>{archive(false)}} / >)
        }
    }
    return(
        <div className={props.className}style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
           <AddAlertIcon className="icon-design"/>
           <PersonAddIcon className="icon-design"/>           
           <Dropdown>
            <Dropdown.Toggle style={{ padding:"0px",border:"none",backgroundColor:"transparent"}} variant="light" id="dropdown-basic">                
                <ColorLensIcon className="icon-design"/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item  >
                    <div style={{display: "flex",flexWrap: "wrap"}}>
                        <div onClick={()=>{changeColor("#f28b82")}} style={{border:"1px solid red",backgroundColor: "#f28b82"}} className="color-chooser" ></div>
                        <div onClick={()=>{changeColor("#d7aefb")}} style={{border:"1px solid purple",backgroundColor: "#d7aefb"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#fff475")}} style={{border:"1px solid yellow",backgroundColor: "#fff475"}} className="color-chooser" ></div>
                        <div onClick={()=>{changeColor("#00ffff")}} style={{border:"1px solid blue",backgroundColor: "#00ffff"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#ccff90")}} style={{border:"1px solid green",backgroundColor: "#ccff90"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#C0C0C0")}} style={{border:"1px solid silver",backgroundColor: "silver"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#FFFFFF")}} style={{border:"1px solid whitesmoke",backgroundColor: "whitesmoke"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#e6c9a8")}} style={{border:"1px solid maroon",backgroundColor: "#e6c9a8"}} className="color-chooser"></div>
                        <div onClick={()=>{changeColor("#ADD8E6")}} style={{border:"1px solid lightblue",backgroundColor: "lightblue"}} className="color-chooser"></div>
                    </div>
                </Dropdown.Item>            
            </Dropdown.Menu>
            </Dropdown>
           <CropOriginalIcon className="icon-design"/>
            {archiveIcon()}
            <CustomDropdown GetNotes={props.GetNotes} notesId={props.notesId}/>
        </div>
    )
}