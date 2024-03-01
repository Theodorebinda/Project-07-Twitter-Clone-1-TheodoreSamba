import { Link, useParams } from "react-router-dom";
import ProfileHeaderType from "./ProfilHeaderType";
import { useContext, useState } from "react";
import { Consumer } from "../Consumer";
import { CiShoppingTag } from "react-icons/ci";
import Tweet from "../Tweet";

function ProfileFollowers() {
  const { dataValue, dataUsers } = useContext(Consumer);
  const { userName } = useParams();

  const oneUser = dataUsers?.find((user) => {
    return user.autorDetails === userName;
  });

  const mesTweets = dataValue
    ?.filter((userTweet) => userTweet.userId == oneUser.id)
    .map((tweet, index) => <Tweet key={index} tweet={tweet} />);
  return (
    <>
      <div className="profile-hero timeline">
        <ProfileHeaderType
          name={oneUser.author}
          nbrsPostes={mesTweets.length}
        />
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
              {oneUser.isLogin ? (
                <a href="#" className="profile-edit-button hover-gray">
                  Edite Profil
                </a>
              ) : (
                <a href="#" className="profile-edit-button hover-gray">
                  Follow
                </a>
              )}
            </div>
          </div>
          <div className="phc-row-2">
            <div className="profile-description">
              <p>{oneUser.description}</p>
              <span className="flex text-start">
                <CiShoppingTag />
                <a className=" text-blue-500" href={oneUser.site}>
                  {oneUser.site}
                </a>
              </span>
            </div>
            <div className="profile-infos"></div>
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
        {mesTweets}
      </div>
    </>
  );
}
export default ProfileFollowers;
