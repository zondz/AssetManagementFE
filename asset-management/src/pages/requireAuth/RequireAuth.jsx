import jwt from 'jwt-decode';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";

function RequireAuth({allowedRoles}){


    const {user,setUser} = useAuth()
    const location = useLocation();
    console.log("user from context : ",user)
    const tokenFromLocalStorage = localStorage.getItem("token")
    console.log("token from storage ",tokenFromLocalStorage);
    let userFromToken = null;
    if(tokenFromLocalStorage){
        userFromToken = jwt(tokenFromLocalStorage);
    }
    
    if((!user) &&userFromToken===null){
        console.log("user not logged in")

       return <Navigate to={"/login"}  replace/>
        
       
    }

    // if((!user)){
    //     console.log("user not logged in")

    //    return <Navigate to={"/login"}  replace/>
    // }
    else if((user&&!allowedRoles.includes(user.type))){
        console.log("user not authorized")

        return <Navigate to={"/unauthorized"} state={{from : location}} replace/>

     }
     else if((userFromToken&&!allowedRoles.includes(userFromToken.role[0].authority))){
        return <Navigate to={"/unauthorized"} state={{from : location}} replace/>

     }




    return <Outlet/>;

}

export default RequireAuth;

