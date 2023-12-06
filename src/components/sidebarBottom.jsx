import user from "../utiles/user"


function SidbarBottom (){
    return (
        <div className="sidebar-botom">
           <img className="user-sidebar" src={user.userImage} alt="" />
           <h4 ><a className="tweet-title-author" href="#">{user.name}</a></h4>
           <p ><a className="tweet-title-details" href="#" >{user.userName}</a></p>
        </div>
)}
export default SidbarBottom