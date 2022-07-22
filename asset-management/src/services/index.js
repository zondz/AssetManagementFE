
import httpClient from "../httpClient/httpClient"
import { END_POINT } from "../httpClient/config"
export const authenticate=(data)=>{
    console.log("service authen data : ",data)

    return httpClient.authenticate(`${END_POINT.authenticate}`,data)
}

