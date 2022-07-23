import jwt from 'jwt-decode';
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import useAuth from "../hooks/useAuth";
import { ADMIN_SIDEBAR, ROLE, STAFF_SIDEBAR } from "../util/enum";
import './layout.css';


function Layout({title,children}){
    // console.log("layout props" ,props)
    const {user} = useAuth();
    const localToken = localStorage.getItem('token');
    let userFromToken = null;
    if(localToken){
        console.log("token valid")
        userFromToken = jwt(localToken);
    }
    let role = null;
    let username = null;

    console.log("layout user : ",user)
    console.log("layout user from token: ",userFromToken)

    if(user){
        role = user.type
        username = user.sub
    }else if(userFromToken){
        role = userFromToken.role[0].authority
        username = userFromToken.sub

    }

    return (
        <section>
        <Navbar title={title} username={username} />
        {/* <Intro/> */}
        <div className="page-wrapper">
        <Sidebar renderContent={role===ROLE.ADMIN?ADMIN_SIDEBAR:STAFF_SIDEBAR}/>
     
        <div style={{display : 'inline-block' ,marginLeft:'30px',marginTop:'30px'}}>
        {children}

        </div>
        
        </div>
        
        </section>
    )



}

export default Layout;