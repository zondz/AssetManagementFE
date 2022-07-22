import Navbar from "../components/navbar/Navbar";

import Intro from "../components/intro/Intro";
import Sidebar from "../components/sidebar/Sidebar";

function Layout({children}){
    // check if user is admin or staff to render correct Sidebar
    const [user,setUser] = 'temp'
    console.log("user role : ")

    return (
        <>
        <Navbar />
        <Intro/>
        <Sidebar role={user.role}/>
        
        {children}
        
        </>
    )



}

export default Layout;