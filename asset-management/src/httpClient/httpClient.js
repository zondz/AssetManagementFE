import instance from "./axiosInstance";
//example 
const postUser = (endPoint,data)=>{
   return instance.post(endPoint,data,{
       // header : {...JWT} 
   })}


const authenticate = (endPoint,data)=>{
    return instance.post(endPoint,data)
}

const  httpClient = {
    postUser,
    authenticate
    
}


export default httpClient;
