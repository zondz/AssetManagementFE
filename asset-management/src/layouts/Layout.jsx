import Navbar from "../components/navbar/Navbar";

import Intro from "../components/intro/Intro";
import Sidebar from "../components/sidebar/Sidebar";

function Layout({children}){
    // check if user is admin or staff to render correct Sidebar
    const [state,setState] = 'temp'
    // console.log("user role : ",state.role)

    return (
        <>
        <Navbar />
        <Sidebar role={state.role}/>
        <Intro/>
        {children}
        
        </>
    )



}

export default Layout;