import users from "../utiles/tweet"
// composant qui gere le profil d'utilisateur dans le tweet editor
function Profile(){
  const profilUser = users.find(user => user.isLogin == true )

    return (
      <>
        <img 
          className="w-[70px]"
          src={profilUser.tweetAvatar}
          />
         
      </>
    )
  }
export default Profile