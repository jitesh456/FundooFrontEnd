import AxiosService from './AxiosService';

const baseurl="http://fundoonotes.incubation.bridgelabz.com/api/notes";
const token=localStorage.getItem('token');

const header={headers:{
    "Content-Type":'application/json',
    "Authorization":localStorage.getItem('Token')
}
 }

 class NoteService{
    constructor(){
        this.AxiosService=new AxiosService();
    }
   
    addCard=(Data)=>{
        let headers={};
         console.log(header);
        var url=baseurl.concat(`/addNotes?access_token=${token}`);
        return this.AxiosService.post(url,Data,true,headers);
    }   

    getNotes=()=>{
        var url=baseurl.concat("/getNotesList");
        const header={headers:{
            "Content-Type":'application/json',
            "Authorization":localStorage.getItem('Token')
        }}
        return this.AxiosService.get(url,true,header);
    }

    
    DeleteNotes=(Data)=>{
        var url=baseurl.concat("/trashNotes");
        return this.AxiosService.post(url,Data,true,header);
    } 

    UpdateNotes=(Data)=>{
        var url=baseurl.concat("/updateNotes");
        return this.AxiosService.post(url,Data,true,header);
    }
    changeColor=(Data)=>{
        var url=baseurl.concat("/changesColorNotes");
        return this.AxiosService.post(url,Data,true,header);
    }
    restoreNote=(Data)=>{
        var url=baseurl.concat("/trashNotes");
        return this.AxiosService.post(url,Data,true,header);
    }
    DeleteForever=(Data)=>{
        var url=baseurl.concat("/deleteForeverNotes");
        return this.AxiosService.post(url,Data,true,header);
    }
    Archive=(Data)=>{
        var url=baseurl.concat("/archiveNotes");
        return this.AxiosService.post(url,Data,true,header);
    }
}

export default new NoteService();