import Navbar from "../components/navbar/Navbar";

import Intro from "../components/intro/Intro";
import Sidebar from "../components/sidebar/Sidebar";
import useAuth from "../hooks/useAuth";
import jwt from 'jwt-decode'

function Layout({children}){
    // check if user is admin or staff to render correct Sidebar
    const {user} = useAuth();
    const localToken = localStorage.getItem('token');
    let userFromToken = jwt(localToken);
    let role = null;

    console.log("layout user : ",user)
    console.log("layout user from token: ",userFromToken)

    if(user){
        role = user.type
    }else if(userFromToken){
        role = userFromToken.role[0].authority
    }

    return (
        <>
        <Navbar />
        <Intro/>
        <Sidebar role={role}/>
        
        {children}
        
        </>
    )



}

export default Layout;