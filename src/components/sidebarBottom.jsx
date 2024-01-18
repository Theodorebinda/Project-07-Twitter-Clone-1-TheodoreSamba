import { Link } from "react-router-dom";
import user from "../utiles/user"
import { RiLock2Fill } from "react-icons/ri";


function SidbarBottom (){
    return (
         <Link to="/profil"  className="flex p[8px] items-start pt[60px] mt-[70px]">
           <img className="w-[40px] h-[40px] shrink-0" src={user.userImage} alt="" />
           <div className="flex-col ">
            <div className="flex">
              <h4 >
               {user.name}
              </h4> 
               <span className="pt-[4px] pl-[4px]" href="#">
                  < RiLock2Fill />
               </span>
            </div>
              <p className="sidebar-title-details">{user.userName}</p>
           </div>
           </Link>
)}
export default SidbarBottom