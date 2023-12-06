import user from "../utiles/user"


function SidbarBottom (){
    return (
        <div className="sidebar-botom">
           <img className="user-sidebar" src={user.userImage} alt="" />
           <div className="sidebar-title">
              <h4 ><a className="sidebar-title-author" href="#">{user.name}</a></h4>
              <p ><a className="sidebar-title-details" href="#" >{user.userName}</a></p>
           </div>
        </div>
)}
export default SidbarBottom