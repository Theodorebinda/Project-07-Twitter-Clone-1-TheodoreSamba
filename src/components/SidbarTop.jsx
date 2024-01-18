import { Link } from "react-router-dom";
import sidebars from "../utiles/Sidebar";
import Button from "./Button";

// fonction qui gere la navigation dans sidebar
function SidebarTop(){
    const navSidebar = sidebars.map((sidebar, index) => (
        <li key={index}>
            <Link to={sidebar.link}>
                <span  className="flex items-start gap-[8px]" href="">
                <img src={sidebar.icone} alt="" />
                <p>{sidebar.name}</p>
                </span>
            </Link>
        </li>
    ))
    return (
        <div>
            <ul className="inline-flex flex-col items-start gap-[20px]" >
                {navSidebar}
            </ul>
            <div className="pt-[20px] w-[225px]"> 
                <Button  className="button-sidebar"  label="Tweet"/>
            </div>
           
        </div>
          
        
    )


}
export default SidebarTop