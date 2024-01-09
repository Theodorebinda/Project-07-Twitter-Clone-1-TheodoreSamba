import { Link } from "react-router-dom";
import sidebars from "../utiles/Sidebar";
import Button from "./Button";

// fonction qui gere la navigation dans sidebar
function SidebarTop(){
    const navSidebar = sidebars.map((sidebar, index) => (
        <li key={index}>
            <Link to={sidebar.link}>
                <span  className="link" href="">
                <img  className="icone-nav" src={sidebar.icone} alt="" />
                <p>{sidebar.name}</p>
                </span>
            </Link>
        </li>
    ))
    return (
        <div>
            <ul className="nav-sidebar" >
                {navSidebar}
            </ul>
            <div className="nav-button"> 
            <Button  className="button-sidebar"  label="Tweet"/>
            </div>
           
        </div>
          
        
    )


}
export default SidebarTop