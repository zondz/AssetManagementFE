import { Link } from 'react-router-dom';
import './navbar.css'
// import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(props){

    const handleChangePassword=(event)=>{
        event.preventDefault();
        console.log("")

    }

    const handleChangeLogout=(event)=>{
        event.preventDefault();


    }

    return(
        <>
        
    <nav className="navbar navbar-expand-lg " style={{backgroundColor : 'rgb(171, 42, 22)',marginBottom:'30px'}} >
      <div className="container-fluid container-fluid-custom" >
        <a className="navbar-brand navbar-brand-custom" href="#">{props.title}</a>

        <div id="navbarSupportedContent" className='support-content' >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle toggle-custom"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {props.username}
              </a>
              <ul className="dropdown-menu">
                <li><div className="dropdown-item" onClick={handleChangePassword} >Change password</div></li>
                <li><Link className="dropdown-item" to="/logout" >Logout</Link></li>
               
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>


        </>
    )

}

export default Navbar;