import { Link } from "react-router-dom";
import users from "../utiles/tweet"
import { RiLock2Fill } from "react-icons/ri";


function SidbarBottom (){
   const profilUser = users.find(user => user.isLogin == true)
    return (
         <Link to="/profil"  className="flex p[8px] items-start pt[60px] mt-[70px]">
           <img className="w-[40px] h-[40px] shrink-0" src={profilUser.tweetAvatar} alt="" />
           <div className="flex-col ">
            <div className="flex">
              <h4 >
               {profilUser.author}
              </h4> 
               <span className="pt-[4px] pl-[4px]" href="#">
                  < RiLock2Fill />
               </span>
            </div>
              <p className="sidebar-title-details">{profilUser.autorDetails}</p>
           </div>
           </Link>
)}
export default SidbarBottom