import { Link } from "react-router-dom";
import user from "../utiles/user"
import { RiLock2Fill } from "react-icons/ri";


function SidbarBottom (){
    return (
         <Link to="/profil"  className="sidebar-botom">
           <img className="user-sidebar" src={user.userImage} alt="" />
           <div className="sidebar-title">
              <h4 ><a className="sidebar-title-author" href="#">{user.name}</a>< RiLock2Fill /></h4> 
              <p className="sidebar-title-details">{user.userName}</p>
           </div>
           </Link>
)}
export default SidbarBottom