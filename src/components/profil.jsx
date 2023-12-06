import user from "../utiles/user"
// composant qui gere le profil d'utilisateur dans le tweet editor
function Profile(){
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