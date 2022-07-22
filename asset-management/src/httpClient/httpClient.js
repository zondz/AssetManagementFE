import instance from "./axiosInstance";

const postUser = (endPoint,data)=>{
   return instance.post(endPoint,data,{
       // header : {...JWT} 
   })}



const  httpClient = {
    postUser
    
}


export default httpClient;
