import React,{useState} from 'react';
import '../Css/CreateNot.scss';
import Menubar from '../Component/MenuBar';
import UserService from '../Service/NoteService';

export default function CreateNote(props){

    const[display,setDisplay]=useState(false)
    const[title,setTitle]=useState('');
    const[discription,setDiscription]=useState('');    

    const createNote=()=>{
        if(title !=="" && discription !=="")
        {   
            const data={
                "title": title,
                "description": discription,
                "isPined": false,
                "isArchived": false,
                "isDeleted": false,
            }
            UserService.addCard(data).then((response)=>{
                console.log(response.data)
                
                setDiscription('');
                setTitle('');
                props.GetNotes();

            }).catch(error=>{
                console.log(error);

            })
        }
    }
    return(
        <>
                <div className="add-note" >
                <div style={!display?{display:"none"}: {display:"block",width:"100%"}}>
                <input
                className="create-note"
                type="text"
                value={title}
                placeholder="Title"  
                onChange={(event)=>{setTitle(event.target.value)}}              
                />
                </div>
                <div onClick={()=>{setDisplay(true)}} style={{width:"100%"}} >
                <input
                className="create-note"
                value={discription}
                type="text"
                placeholder="Take a Note .."
                onChange={(event)=>{setDiscription(event.target.value)}}                              
                />               
                </div>
                    <div  style={!display?{display:"none"}: {display: "flex",justifyContent: "space-between",paddingTop: "12px",paddingBottom:"12px"}}>
                       <div style={{width:"70%"}}> <Menubar/></div><div style={{display:"flex"}}><button  id="closeButton" onClick={()=>{setDisplay(false);createNote()}} >Close</button></div>
                    </div>
                    
                </div>
        </>
    )
}

