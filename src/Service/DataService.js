import AxiosService from './AxiosService';

 class DataService{
    constructor(){
        this.AxiosService=new AxiosService();
    }
   

    addUser=(Data)=>{
        var url="http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";
        return this.AxiosService.post(url,Data,false);
    }
    login=(Data)=>{
        var url="http://fundoonotes.incubation.bridgelabz.com/api/user/login";
        return this.AxiosService.post(url,Data,false);
    }
    resetPassword=(Data)=>{
        var url="http://fundoonotes.incubation.bridgelabz.com/api/user/reset";
        return this.AxiosService.post(url,Data,false);
    }
    reset=(data)=>{
        const token=localStorage.getItem('token');
        var headers={            
        }
        var url='http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password'.concat(`?access_token=${token}`);
        return this.AxiosService.post(url,data,true,headers);
    }
    
}

export default new DataService();