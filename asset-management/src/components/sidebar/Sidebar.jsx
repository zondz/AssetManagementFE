
import { NavLink } from 'react-router-dom';
import logo from '../../asset/images/logo.jpeg'
import './sidebar.css'
function Sidebar({renderContent}){

    console.log("sidebar props ",renderContent)

    let activeStyle = {
        backgroundColor:'rgb(185, 60, 60)',
        color : 'whitesmoke'
        
    }
    let inactiveStyle = {
        backgroundColor: '#e4e8eb',
        color : 'black'
    }
    

    return (
        <>
        <div  style={{width:'280px' ,display:'inline-block',marginRight:'50px'}}>
        <div>
        <a className='d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none' href="#">
            <img style={{width : '100px',height:'100px'}} src={logo} alt="logo" />
        </a>
        <p className='title'>Online Asset Management</p>
        </div>
        <ul className='nav nav-pills flex-column mb-auto nav-custom'>
        {/* <li className='nav-item'>
            
        </li> */}
        {
            renderContent.map((item,index)=>{
                return(
                    // <li key={index} className='nav-item bg-light nav-item-custom'>
                        <NavLink key={index} className='nav-item  nav-item-custom' to={item.route}
                        style={
                            ({isActive})=> isActive?activeStyle:inactiveStyle
                        }
                        >
                            <p className='navlink-content'>{item.content}</p>
                        </NavLink>
                    // </li>
                )
            })
        }
        </ul>
        </div>
    
    
        </>
    )
}
export default Sidebar;