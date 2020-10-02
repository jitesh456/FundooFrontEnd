  
import axios from 'axios';

export default function AxiosService(){

}

AxiosService.prototype.post=function(url,data){
    return axios.post(url,data)
}

AxiosService.prototype.get=function(url){
    return axios.get(url)
}

AxiosService.prototype.delete=function(url){
    return axios.delete(url)
}

AxiosService.prototype.put=function(url,data){
    return axios.put(url,data)
}