import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import {Navigate, Outlet, useLocation} from 'react-router-dom'


function RequireAuth({allowedRoles}){

    const {user,setUser} = useAuth()
    const location = useLocation();
    console.log("Require auth user : ",user)
    if((!user)){
        console.log("user not logged in")

       return <Navigate to={"/login"} state={{from : location}} replace/>
    }else if(user&&!allowedRoles.includes(user.type)){
        console.log("user not authorized")

        return <Navigate to={"/unauthorized"} state={{from : location}} replace/>

     }



    return <Outlet/>;

}

export default RequireAuth;

