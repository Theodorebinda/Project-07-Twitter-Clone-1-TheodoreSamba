import avatar from "../images/profile-photo.png";

function Profile(){
    let user ={
      name : "Bradley Ortiz",
      userName : "@bradley",
      userImage : avatar,
    }
    return (
      <>
        <img 
          className="avatar"
          src={user.userImage}
          />
      </>
    )
  }
export default Profile