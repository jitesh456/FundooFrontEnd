import AxiosService from './AxiosService';

 class DataService{
    constructor(){
        this.AxiosService=new AxiosService();
    }

    addUser=(Data)=>{
        var url="http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp";
        return this.AxiosService.post(url,Data);
    }
    login=(Data)=>{
        var url="http://fundoonotes.incubation.bridgelabz.com/api/user/login";
        return this.AxiosService.post(url,Data);
    }
    resetPassword=(Data)=>{
        var url="http://fundoonotes.incubation.bridgelabz.com/api/user/reset";
        return this.AxiosService.post(url,Data);
    }
}

export default new DataService();