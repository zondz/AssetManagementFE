

const postUser = (endPoint,data)=>{
   return instance.post(endPoint,data,{
       // header : {...JWT} 
   })}



const  httpClient = {
    get,
    postUser,
    authenticate
    
}


export default httpClient;
