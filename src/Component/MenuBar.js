import React from 'react';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import '../Css/CreateNot.scss';
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import {ReactComponent as ArchiveIcon} from '../Assets/Archive.svg';

export default function Menubar(){
    return(
        <div style={{display:"flex",justifyContent:"space-between",width:"60%"}}>
           <AddAlertIcon className="icon-design"/>
           <PersonAddIcon className="icon-design"/>
           <ColorLensIcon className="icon-design"/>
           <CropOriginalIcon className="icon-design"/>
            <ArchiveIcon style={{fill:"#5f6368"}}className="icon-design" />
        </div>
    )
}