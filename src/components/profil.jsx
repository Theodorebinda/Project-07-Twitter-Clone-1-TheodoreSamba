import { useContext } from "react";
import { Consumer } from "./Consumer";
// composant qui gere le profil d'utilisateur dans le tweet editor
function Profile() {
  const { dataUsers } = useContext(Consumer);
  const profilUser = dataUsers?.find((user) => user.isLogin == true);

  return (
    <>
      <img className="w-[70px]" src={profilUser?.tweetAvatar} />
    </>
  );
}
export default Profile;
