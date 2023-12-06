import sidebars from "../utiles/Sidebar";
import Buton from "./tweetButon";

// fonction qui gere la navigation dans sidebar
function SidebarTop(){
    const navSidebar = sidebars.map(({icone,name}) => (
        <li >
            <a className="link" href="#">
                <img  className="icone-nav" src={icone} alt="" />
                <p>{name}</p>
            </a>
        </li>
    ))
    return (
        <div>
            <ul className="nav-sidebar" >
                {navSidebar}
            </ul>
            <div className="nav-button"> 
                <Buton />
            </div>
           
        </div>
          
        
    )


}
export default SidebarTop