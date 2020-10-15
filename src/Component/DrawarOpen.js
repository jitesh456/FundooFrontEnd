import React from 'react';
import {ReactComponent as NoteLogo}  from '../Assets/NoteLogo.svg';
import {ReactComponent as ReminderLogo}  from '../Assets/ReminderLogo.svg';
import {ReactComponent as EditLabel}  from '../Assets/EditLabel.svg';
import {ReactComponent as Archive}  from '../Assets/Archive.svg';
import {ReactComponent as Delete}  from '../Assets/Delete.svg';
import {useHistory} from 'react-router-dom'

export default function DrawarOpen(props){

      var btns = document.getElementsByClassName("drawar-icon-contener-open");
      for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      })
      }


   const history=useHistory();
    return(
        <div id="a"  className="drawar">                                                             
                     <div onClick={()=>{
                        history.push("/dashboard/notes");
                     }} className="drawar-icon-contener-open active">
                        <NoteLogo className="drawar-icon-open"/>
                        <spam className={props.className}>Notes</spam>   
                     </div>
                     <div className="drawar-icon-contener-open">
                        <ReminderLogo className="drawar-icon-open"/>    
                        <spam className={props.className}>Reminder</spam>  
                     </div >                           
                     <div className="drawar-icon-contener-open">
                        <EditLabel className="drawar-icon-open"/>
                        <spam className={props.className}>Edit Lable</spam>  
                     </div>                           
                     <div className="drawar-icon-contener-open">
                        <Archive className="drawar-icon-open"/>  
                        <spam className={props.className}>Archive</spam>                                                         
                     </div>
                     <div className="drawar-icon-contener-open" onClick={()=>{
                        history.push("/dashboard/trash");
                     }}>
                        <Delete className="drawar-icon-open"/>   
                        <spam className={props.className}>Trash</spam>                                                        
                     </div>                                                            
        </div>        
    );
}