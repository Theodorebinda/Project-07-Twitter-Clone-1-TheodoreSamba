import { useParams } from "react-router-dom";
import ProfileHeader from "./profilHeader";
import tweets from "../../utiles/tweet";
import ProfileHeaderType from "./ProfilHeaderType";


function ProfileFollowers() {
    const {username} = useParams()
    
    const oneUser = tweets.find((user) => {
        return user.author == username
    })
    return(
        <>
            <div className="profile-hero timeline">
            <ProfileHeaderType name={oneUser.author} nbrsPostes={oneUser.nbrsPostes}/>
                <div className="profile-cover">
                <img src={oneUser.couvertureImage} alt="" />
                </div>
                <div className="profile-hero-content">
                <div className="phc-row-1">
                    <div className="phc-c1">
                    <a href="#">
                        <img
                        src={oneUser.tweetAvatar}
                        alt=""
                        className="profile-avatar"
                        />
                    </a>
                    <h1 className="name">{oneUser.author}</h1>
                    <p className="profile-username">{oneUser.autorDetails}</p>
                    </div>
                    <div className="phc-c2">
                    <a href="#" className="profile-edit-button hover-gray">
                        Follow
                    </a>
                    </div>
                </div>
                <div className="phc-row-2">
                    <div className="profile-description">
                    <p>{oneUser.description}</p>
                    </div>
                    <div className="profile-infos">
                    </div>
                    <div className="profile-others">
                    <a href="#" className="profile-other">
                        {oneUser.abonnement}
                        <span className="text">abonnements</span>
                    </a>
                    <a href="#" className="profile-other">
                        {oneUser.abonne}
                        <span className="text">abonnés</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </>
        );
}
export default ProfileFollowers