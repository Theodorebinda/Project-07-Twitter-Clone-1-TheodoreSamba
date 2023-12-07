import user from "../utiles/user"
import { RiLock2Fill } from "react-icons/ri";


function SidbarBottom (){
    return (
        <div className="sidebar-botom">
           <img className="user-sidebar" src={user.userImage} alt="" />
           <div className="sidebar-title">
              <h4 ><a className="sidebar-title-author" href="#">{user.name}</a>< RiLock2Fill /></h4> 
              <p ><a className="sidebar-title-details" href="#" >{user.userName}</a></p>
           </div>
        </div>
)}
export default SidbarBottom