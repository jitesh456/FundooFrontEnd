  
import axios from 'axios';

export default function AxiosService(){

}


AxiosService.prototype.post=function(url,data,isHeader=false,Header){
    return axios.post(url,data,isHeader && Header)
}

AxiosService.prototype.get=function(url,isHeader=false,Header){
    return axios.get(url,isHeader && Header)
}

AxiosService.prototype.delete=function(url,isHeader=false,Header){
    return axios.delete(url,isHeader && Header)
}

AxiosService.prototype.put=function(url,data,isHeader=false,Header){
    return axios.put(url,data,isHeader && Header)
}