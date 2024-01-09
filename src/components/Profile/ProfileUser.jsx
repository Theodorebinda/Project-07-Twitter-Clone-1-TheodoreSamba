import user from "../../utiles/user";
import ProfileHeader from "./profilHeader";

function ProfileUser() {
    return(
        <>
            <ProfileHeader />
            <div className="profile-hero">
                <div className="profile-cover">
                <img src={user.couvertureImage} alt="" />
                </div>
                <div className="profile-hero-content">
                <div className="phc-row-1">
                    <div className="phc-c1">
                    <a href="#">
                        <img
                        src={user.userImage}
                        alt=""
                        className="profile-avatar"
                        />
                    </a>
                    <h1 className="name">{user.name}</h1>
                    <p className="profile-username">{user.userName}</p>
                    </div>
                    <div className="phc-c2">
                    <a href="#" className="profile-edit-button hover-gray">
                        Profile editor
                    </a>
                    </div>
                </div>
                <div className="phc-row-2">
                    <div className="profile-description">
                    <p>{user.description}</p>
                    </div>
                    <div className="profile-infos">
                    </div>
                    <div className="profile-others">
                    <a href="#" className="profile-other">
                        {user.abonnement}
                        <span className="text">abonnements</span>
                    </a>
                    <a href="#" className="profile-other">
                        {user.abonne}
                        <span className="text">abonnés</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </>
        );
}
export default ProfileUser