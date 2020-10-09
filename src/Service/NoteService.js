import AxiosService from './AxiosService';

const baseurl="http://fundoonotes.incubation.bridgelabz.com/api/notes";
const token=localStorage.getItem('Token');

const header={headers:{
    "Content-Type":'application/json',
    "Authorization":localStorage.getItem('Token')
}
 }

 class UserService{
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
        return this.AxiosService.get(url,true,header);
    }

    
    DeleteNotes=(Data)=>{
        var url=baseurl.concat("/trashNotes");
        return this.AxiosService.post(url,Data,true,header);
    } 
}

export default new UserService();