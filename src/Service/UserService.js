import AxiosService from './AxiosService';

const baseurl="http://fundoonotes.incubation.bridgelabz.com/api";
 class UserService{
    constructor(){
        this.AxiosService=new AxiosService();
    }
   
    addCard=(Data)=>{
        const header={headers:{
            "Content-Type":'application/json',
            "Authorization":localStorage.getItem('Token')
        }
         }
         console.log(header);
        var url=baseurl.concat("/notes/addNotes");
        return this.AxiosService.post(url,Data,true,header);
    }    
}

export default new UserService();